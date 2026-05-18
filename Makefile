include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-cups-web
PKG_VERSION:=1.3
PKG_RELEASE:=1

LUCI_TITLE:=CUPS Web Print Management
LUCI_DEPENDS:=+luci-base

include $(TOPDIR)/feeds/luci/luci.mk
