include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-cups-web
PKG_VERSION:=1.2
PKG_RELEASE:=1

LUCI_TITLE:=LuCI support for cups-web
LUCI_DEPENDS:=+luci-base +cups +curl +procd
LUCI_PKGARCH:=all

define Package/luci-app-cups-web/conffiles
/etc/config/cups-web
endef

define Package/luci-app-cups-web/postinst
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] || {
  # Detect architecture
  ARCH=$$(uname -m)
  case "$$ARCH" in
    x86_64|amd64) ARCH="amd64" ;;
    aarch64|arm64) ARCH="arm64" ;;
    armv7*|armhf) ARCH="armv7" ;;
    *) echo "Unsupported architecture: $$ARCH"; exit 0 ;;
  esac
  
  echo "Detected architecture: $$ARCH"
  echo "Downloading cups-web binary..."
  
  wget -O /usr/bin/cups-web "https://github.com/hanxi/cups-web/releases/latest/download/cups-web-linux-$$ARCH" && \
    chmod +x /usr/bin/cups-web && \
    mkdir -p /var/lib/cups-web/data /var/lib/cups-web/uploads && \
    echo "cups-web installed successfully." || \
    echo "Failed to download cups-web. Run /usr/libexec/cups-web-install manually."
}
endef

define Package/luci-app-cups-web/install
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./root/etc/config/cups-web $(1)/etc/config/cups-web
	
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./root/etc/init.d/cups-web $(1)/etc/init.d/cups-web
	
	$(INSTALL_DIR) $(1)/usr/libexec
	$(INSTALL_BIN) ./root/usr/libexec/cups-web-install $(1)/usr/libexec/cups-web-install
	
	$(INSTALL_DIR) $(1)/usr/share/luci/menu.d
	$(INSTALL_DATA) ./root/usr/share/luci/menu.d/luci-app-cups-web.json $(1)/usr/share/luci/menu.d/luci-app-cups-web.json
	
	$(INSTALL_DIR) $(1)/usr/share/rpcd/acl.d
	$(INSTALL_DATA) ./root/usr/share/rpcd/acl.d/luci-app-cups-web.json $(1)/usr/share/rpcd/acl.d/luci-app-cups-web.json
	
	$(INSTALL_DIR) $(1)/htdocs/luci-static/resources/view/cups-web
	$(INSTALL_DATA) ./htdocs/luci-static/resources/view/cups-web/*.js $(1)/htdocs/luci-static/resources/view/cups-web/
endef

include $(TOPDIR)/feeds/luci/luci.mk
