#!/bin/bash

# 本地 build 数据
local_file="build"
local_compressed_file="out.zip"
# 服务器数据
server_user="root"
server_ip="lm"
server_com_path="/home/com"
server_cn_path="/home/cn"
ssh_key_path="~/.ssh/server_rsa"
clear;

# 打包函数
buildServer() {
      #         rm -rf /home/$1/* \
      ssh -i $ssh_key_path $server_user@$server_ip " \
       mkdir -p /home/$1/  \
      "
      ##  清除旧的打包文件 
      pnpm docusaurus clear
      ### 打包并上传到  
      TARGET_DOMAIN=$1 pnpm docusaurus build
      # cd $local_file
      # zip -qr ../${local_compressed_file}  .  -x .DS_Store # 压缩
      # cd ../
      # scp -i ${ssh_key_path}  ${local_compressed_file} \
      #              "${server_user}@${server_ip}:/home/$1"
      rsync -avz --delete --progress --exclude=".DS_Store" \
                  $local_file/  \
                  "${server_user}@${server_ip}:/home/$1" 
      # ssh -i $ssh_key_path $server_user@$server_ip "  \
      #            cd /home/$1  \
      #            && unzip -qo ${local_compressed_file} \
      #            && rm ${local_compressed_file} \
      #        "
      #### 打包正确方法
      ## 方法一：正常将 build 打包，解压时使用下面的： 
      # unzip -jq ${local_compressed_file} -d /home/$1  
      ## 方法二：将 build 下文件打包：
      # zip -qr ../${local_compressed_file} -C build .  -x .DS_Store
      #  rm $local_compressed_file # 移除本地打包压缩文件
 
    rm -rf build # 移除本地打包文件
}

publishToIo() {
      ##  清除旧的打包文件 
      pnpm docusaurus clear
          ### 打包并上传到  
      TARGET_DOMAIN=$1 pnpm docusaurus build
      cd build 
      rm -rf .git
      git init
      git remote add origin git@$1:$1/$1.github.io.git
      git add . 
      git commit -m 'hello world' 
      git push origin main --force 
      cd ../ 
      rm -rf build # 移除本地打包文件
}

# printf "\n 参数的数量： $# \n"
# printf "\n 参数的列表： $@ \n"
# printf "\n 所有参数为一个字符串： $* \n"
# printf "\n $@ \n\n"
# printf "\n\n\n\n\n$1 \n\n"
# printf "$2 \n\n"
# printf "$3 \n\n"

includeIo=false;
includeCn=false;
includeCom=false;
includeCnEarthnut=false;
includeComEarthnut=false;

for arg in "$@"
do
      case $arg in
            'cn')
                  printf "输出到 lmssee.cn \n\n"
                  includeCn=true;
                  includeCnEarthnut=true;
                  buildServer cn;
                  buildServer cnEarthnut
                  ;;
            'com')
                  printf "输出到 lmssee.com\n\n"
                  includeCom=true;
                  includeComEarthnut=true;
                  buildServer com;
                  buildServer comEarthnut
                  ;;
            'io')
                  printf "输出到 github.io\n\n"
                  includeIo=true
                  publishToIo lmssee
                  publishToIo earthnutDev
                  ;;
      esac
done

if [[ $includeCn != true ]]; then 
  printf  "\n未选择输入到 lmssee.cn \n"
  printf  "\n\e[32m输入 cn 打包到 lmssee.cn/earthnut\e[0m\n\n"
  
fi

if [[ $includeCom != true ]]; then 
  printf  "\n未选择输入到 lmssee.com \n"
  printf  "\n\e[32m输入 com 打包到 lmssee.com/earthnut\e[0m\n\n"
  
fi

if [[ $includeIo != true ]]; then 
  printf  "\n未选择输入到 github\n"
  printf  "\n\e[32m输入 io 打包到 github\e[0m\n\n"
fi

 
