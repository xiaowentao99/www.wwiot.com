#!/bin/bash

cd "$(dirname "$0")"

echo "启动本地服务器..."
echo "访问地址: http://localhost:8000/products.html"
echo "按 Ctrl+C 停止"
echo ""

python3 -m http.server 8000 --bind 0.0.0.0
