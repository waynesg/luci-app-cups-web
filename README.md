# luci-app-cups-web

适用于 ImmortalWrt/OpenWrt x86-64 的 [cups-web](https://github.com/hanxi/cups-web) 网页打印管理插件。

## 功能

- 中文网页打印界面
- LuCI“服务 -> 网页打印”菜单内嵌 CUPS Web，保留 LuCI 顶栏和菜单，不会跳转或打开新窗口
- CUPS/IPP 打印机管理
- PDF、图片和文本文件上传打印
- 用户、打印记录和打印参数管理
- procd 服务管理和 UCI 配置
- 自动启用本地 CUPS WebInterface，供打印机列表查询

## 默认配置

- 访问地址：`http://路由器IP:8080`
- 用户名：`admin`
- 密码：`admin`
- 配置文件：`/etc/config/cups-web`
- 数据目录：`/etc/cups-web`

首次登录后应立即修改默认密码。

LuCI 内嵌页面需要通过 HTTP 访问路由器；浏览器会阻止 HTTPS LuCI 内嵌 HTTP 8080 服务。HTTPS 模式下页面会提供独立打开按钮。

LuCI 使用 HTTPS 时，浏览器会阻止内嵌的 HTTP 页面。此时请通过 HTTP 访问 LuCI，或为 cups-web 单独配置 HTTPS。

## 说明

该包使用上游静态 x86-64 发布文件。OpenWrt 环境不包含 LibreOffice、Java、Ghostscript 及 Debian 驱动工具，因此 Office/OFD 转换和网页内安装 Debian 打印驱动不可用。

## 上游同步

GitHub Actions 每天北京时间 02:23 检查 `hanxi/cups-web` 的最新 Release。发现新版本后会下载 x86-64 二进制文件、重新计算 SHA-256，并自动更新 `cups-web/Makefile`。也可在 Actions 页面手动运行 `Sync upstream cups-web`。
