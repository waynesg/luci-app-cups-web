include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-cups-web
PKG_VERSION:=1.0
PKG_RELEASE:=1

LUCI_TITLE:=LuCI support for cups-web
LUCI_DEPENDS:=+luci-base +cups +curl +bash
LUCI_PKGARCH:=all

include $(TOPDIR)/feeds/luci/luci.mk
