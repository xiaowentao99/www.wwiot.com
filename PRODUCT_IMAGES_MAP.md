# 产品图片映射表

本文件记录了产品图片的文件名与产品型号的对应关系，方便您将图片放入 `images/` 目录。

## 📁 图片目录结构

```
wwiot-website/
└── images/          # 产品图片目录
    ├── WW-10L-SP1.png
    ├── WW-15L-C-K.jpg
    ├── WW-20L-LW-HW-C-SP21.jpg
    ├── WW-20L-LW-HW-C-SP22.png
    ├── WW-22L-LW-HW-C.png
    ├── WW-50L-LW-HW-C.jpg
    ├── WW-D2L-LW-HW-C.jpg
    └── WW-G1.jpg
```

## 📋 映射关系

### 1. WW-10 系列 - 工业温湿度传感器

| 图片文件名 | 对应产品型号 |
|-----------|-------------|
| `WW-10L-SP1.png` | WW-10L, WW-10LW, WW-10HW, WW-10C |
| `WW-10L-SP1.png` | WW-10L-SP1, WW-10LW-SP1, WW-10HW-SP1, WW-10C-SP1 |

### 2. WW-15 系列 - K型温度传感器

| 图片文件名 | 对应产品型号 |
|-----------|-------------|
| `WW-15L-C-K.jpg` | WW-15L-K, WW-15C-K |

### 3. WW-20 系列 - 开关量采集终端

| 图片文件名 | 对应产品型号 |
|-----------|-------------|
| `WW-20L-LW-HW-C-SP21.jpg` | WW-20L, WW-20LW, WW-20HW, WW-20C |
| `WW-20L-LW-HW-C-SP21.jpg` | WW-20L-SP21, WW-20LW-SP21, WW-20HW-SP21, WW-20C-SP21 |
| `WW-20L-LW-HW-C-SP22.png` | WW-20L-SP22, WW-20LW-SP22, WW-20HW-SP22, WW-20C-SP22 |

### 4. WW-22 系列 - 烟感

| 图片文件名 | 对应产品型号 |
|-----------|-------------|
| `WW-22L-LW-HW-C.png` | WW-22L, WW-22LW, WW-22HW, WW-22C |

### 5. WW-50 系列 - 倾角传感器

| 图片文件名 | 对应产品型号 |
|-----------|-------------|
| `WW-50L-LW-HW-C.jpg` | WW-50L, WW-50LW, WW-50HW, WW-50C |
| `WW-50L-LW-HW-C.jpg` | WW-50L-P2, WW-50LW-P2, WW-50HW-P2, WW-50C-P2 |

### 6. WW-D2 系列 - 太阳能数据采集器

| 图片文件名 | 对应产品型号 |
|-----------|-------------|
| `WW-D2L-LW-HW-C.jpg` | WW-D2L, WW-D2LW, WW-D2HW, WW-D2C |

### 7. WW-G1 系列 - 网关

| 图片文件名 | 对应产品型号 |
|-----------|-------------|
| `WW-G1.jpg` | WW-G1, WW-G1-610 |

## 📝 操作步骤

1. 将产品图片复制到 `wwiot-website/images/` 目录
2. 确保图片文件名与上表一致
3. 如果需要显示某产品图片但文件名不同，可修改 `products.html` 中的 `productImages` 配置

## 🔧 自定义图片映射

如需修改图片映射，编辑 `products.html` 中的 `productImages` 对象：

```javascript
const productImages = {
  '型号后缀': '图片文件名',
  // 例如:
  '10L': 'WW-10L-SP1.png',
};
```
