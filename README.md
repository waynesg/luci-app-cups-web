# luci-app-cups-web

适用于 ImmortalWrt/OpenWrt x86-64 的 [cups-web](https://github.com/hanxi/cups-web) 网页打印管理插件。

## 功能

- 中文网页打印界面
- LuCI“服务 -> 网页打印”菜单
- CUPS/IPP 打印机管理
- PDF、图片和文本文件上传打印
- 用户、打印记录和打印参数管理
- procd 服务管理和 UCI 配置

## 默认配置

- 访问地址：`http://路由器IP:8080`
- 用户名：`admin`
- 密码：`admin`
- 配置文件：`/etc/config/cups-web`
- 数据目录：`/etc/cups-web`

首次登录后应立即修改默认密码。

## 说明

该包使用上游静态 x86-64 发布文件。OpenWrt 环境不包含 LibreOffice、Java、Ghostscript 及 Debian 驱动工具，因此 Office/OFD 转换和网页内安装 Debian 打印驱动不可用。
