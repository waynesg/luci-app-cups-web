'use strict';
'require view';
'require uci';

return view.extend({
	load: function() {
		return uci.load('cups-web');
	},

	render: function() {
		var listen = uci.get('cups-web', 'main', 'listen_addr') || '0.0.0.0:8080';
		var match = listen.match(/:(\d+)$/);
		var url = 'http://' + window.location.hostname + ':' + (match ? match[1] : '8080') + '/';

		if (window.location.protocol === 'https:') {
			return E('div', { 'class': 'cbi-map' }, [
				E('h2', {}, [ _('Web Printing') ]),
				E('div', { 'class': 'cbi-section' }, [
					E('p', {}, [ _('浏览器不允许在 HTTPS 的 LuCI 页面中嵌入 HTTP 服务。请使用 HTTP 打开 LuCI，或在新页面中打开网页打印。') ]),
					E('a', { 'class': 'btn cbi-button cbi-button-action', 'href': url, 'target': '_blank', 'rel': 'noopener' }, [ _('打开网页打印') ])
				])
			]);
		}

		return E('div', { 'class': 'cbi-map cups-web' }, [
			E('iframe', {
				class: 'cups-web-frame',
				src: url,
				title: _('Web Printing'),
				loading: 'eager',
				style: 'border: 0; display: block; height: calc(100vh - 180px); min-height: 720px; width: 100%;'
			})
		]);
	},

	handleSaveApply: null,
	handleSave: null,
	handleReset: null
});
