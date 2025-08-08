#!/bin/bash

rm -rf dist.zip

pnpm docusaurus clear 

pnpm docusaurus build

cd build

# 压缩打包文件
zip -qr ../dist.zip "." -z << EOF 

author: earthnut .

EOF

if [ $? -ne 0 ]; then 
  echo "出错了"
# else 
fi

echo "打包完成  ✅  "