#!/bin/bash

rm -rf dist.zip

pnpm docusaurus clear 

if ! pnpm docusaurus build ; then 

  echo "打包出错了"

  exit 0

fi 

if ! cd build ; then 

  printf "\e[31m出错了，没有找到打包后的文件\e[m\n"

  exit 0
fi

# 压缩打包文件
zip -qr ../dist.zip "." -z << EOF 

author: earthnut .

EOF

if [ $? -ne 0 ]; then 
  echo "出错了"
# else 
fi

echo "打包完成  ✅  "