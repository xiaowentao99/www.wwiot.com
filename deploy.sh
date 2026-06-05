#!/bin/bash

# 部署脚本 - 打包后上传到服务器并解压

set -e

REMOTE_HOST="lanneng.wwiot.com"
REMOTE_USER="iot"
REMOTE_PATH="/home/$REMOTE_USER/www.wwiot.com"
PACKAGE_NAME="www.wwiot.com.tar.gz"
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)"

# SSH 参数
SSH_OPTS="-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null"

echo "========================================"
echo "开始部署到 $REMOTE_HOST"
echo "========================================"

# 进入项目目录
cd "$LOCAL_DIR"

# 1. 本地打包
echo "[1/3] 本地打包..."
tar -czvf "$PACKAGE_NAME" \
  --exclude='deploy.sh' \
  --exclude='run.sh' \
  --exclude='*.tar.gz' \
  --exclude='.git' \
  --exclude='.codebuddy' \
  -C "$LOCAL_DIR" .

# 2. 上传到服务器
echo "[2/3] 上传到服务器..."
scp $SSH_OPTS "$PACKAGE_NAME" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"

# 3. 服务器解压
echo "[3/3] 服务器解压..."
ssh $SSH_OPTS "$REMOTE_USER@$REMOTE_HOST" "cd $REMOTE_PATH && tar -xzvf $PACKAGE_NAME && rm $PACKAGE_NAME"

# 清理本地压缩包
rm "$PACKAGE_NAME"

echo ""
echo "========================================"
echo "部署完成!"
echo "访问地址: http://www.wwiot.com"
echo "========================================"
