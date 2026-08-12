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
