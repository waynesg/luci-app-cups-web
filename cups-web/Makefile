include $(TOPDIR)/rules.mk

PKG_NAME:=cups-web
PKG_VERSION:=0.2.19
PKG_RELEASE:=2
PKG_SOURCE:=cups-web-linux-amd64
PKG_SOURCE_URL:=https://github.com/waynesg/luci-app-cups-web/releases/download/openwrt-v$(PKG_VERSION)/
PKG_HASH:=c1302585cc205704caa60a78ab9d749298e2f6597a193ca7254909b001d56e3c
PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)
PKG_LICENSE:=MIT
PKG_MAINTAINER:=WAYNE

include $(INCLUDE_DIR)/package.mk

define Package/cups-web
  SECTION:=net
  CATEGORY:=Network
  SUBMENU:=Printing
  TITLE:=Web printing frontend for CUPS
  URL:=https://github.com/hanxi/cups-web
  DEPENDS:=@TARGET_x86_64 +cups +cups-client
endef

define Package/cups-web/description
 A web printing interface with user management, print history,
 document preview and direct IPP submission to CUPS.
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	cp $(DL_DIR)/$(PKG_SOURCE) $(PKG_BUILD_DIR)/cups-web
endef

define Build/Compile
endef

define Package/cups-web/conffiles
/etc/config/cups-web
endef

define Package/cups-web/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/cups-web $(1)/usr/bin/cups-web
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/cups-web.init $(1)/etc/init.d/cups-web
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/cups-web.config $(1)/etc/config/cups-web
endef

$(eval $(call BuildPackage,cups-web))
