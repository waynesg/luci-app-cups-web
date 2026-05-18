include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-cups-web
PKG_VERSION:=1.3
PKG_RELEASE:=1

LUCI_TITLE:=CUPS Web Print Management
LUCI_DEPENDS:=+luci-base
LUCI_PKGARCH:=all

define Package/luci-app-cups-web/conffiles
/etc/config/cups-web
endef

define Package/luci-app-cups-web/postinst
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] || {
  ARCH=$$(uname -m)
  case "$$ARCH" in
    x86_64|amd64) ARCH="amd64" ;;
    aarch64|arm64) ARCH="arm64" ;;
    armv7*|armhf) ARCH="armv7" ;;
    *) echo "Unsupported architecture: $$ARCH"; exit 0 ;;
  esac
  echo "Downloading cups-web for $$ARCH..."
  wget -O /usr/bin/cups-web "https://github.com/hanxi/cups-web/releases/latest/download/cups-web-linux-$$ARCH" && \
    chmod +x /usr/bin/cups-web && \
    mkdir -p /var/lib/cups-web/data /var/lib/cups-web/uploads && \
    echo "cups-web installed successfully." || \
    echo "Failed to download cups-web. Run /usr/libexec/cups-web-install manually."
}
endef

include $(TOPDIR)/feeds/luci/luci.mk
