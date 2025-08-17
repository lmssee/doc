#!/bin/bash

local_file="build"
# 服务器数据
server_user="root"
server_ip="com" # cn 亦可
ssh_key_path="~/.ssh/server_rsa"
clear;

# 打包到服务器函数，由于做了数据拆离，现在仅打包到 com
buildServer() {
      ssh -i $ssh_key_path $server_user@$server_ip " \
       rm -rf /home/$1 && \
       mkdir -p /home/$1/  \
      "
      ##  清除旧的打包文件 
      pnpm docusaurus clear
      ### 打包并上传到  
      TARGET_DOMAIN=$1 pnpm docusaurus build
      rsync -avz --delete --progress --exclude=".DS_Store" \
                  $local_file/  \
                  "${server_user}@${server_ip}:/home/$1" 
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
includeCom=false;

for arg in "$@"
do
      case $arg in
            'com')
                  printf "输出到 lmssee.com\n\n"
                  includeCom=true;
                  buildServer com;
                  ;;
            'io')
                  printf "输出到 github.io\n\n"
                  includeIo=true
                  publishToIo earthnutDev
                  ;;
      esac
done


if [[ $includeCom != true ]]; then 
  printf  "\n未选择输入到 lmssee.com \n"
  printf  "\n\e[32m输入 com 打包到 lmssee.com/earthnut\e[0m\n\n"
  
fi

if [[ $includeIo != true ]]; then 
  printf  "\n未选择输入到 github\n"
  printf  "\n\e[32m输入 io 打包到 github\e[0m\n\n"
fi

 
