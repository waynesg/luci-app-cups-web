'use strict';
'require view';
'require uci';
'require rpc';

var callInitAction = rpc.declare({
    object: 'luci',
    method: 'setInitAction',
    params: ['name', 'action'],
    expect: { result: false }
});

return view.extend({
    render: function() {
        var port = uci.get('cups-web', 'main', 'port') || '8080';
        var enabled = uci.get('cups-web', 'main', 'enabled');
        var hostname = window.location.hostname;

        if (enabled !== '1') {
            return E('div', { 'class': 'cbi-section' }, [
                E('h3', {}, _('CUPS Web')),
                E('p', { 'class': 'alert-message warning' }, [
                    E('strong', {}, _('Service is disabled. ')),
                    _('Please enable CUPS Web service first.'),
                    E('br'),
                    E('a', { href: '/cgi-bin/luci/admin/services/cups-web' }, _('Go to configuration'))
                ])
            ]);
        }

        return E('div', { 'class': 'cbi-section' }, [
            E('div', { 'style': 'margin-bottom: 10px;' }, [
                E('a', {
                    'href': 'http://' + hostname + ':' + port,
                    'target': '_blank',
                    'class': 'cbi-button cbi-button-positive'
                }, _('Open CUPS Web in new window'))
            ]),
            E('iframe', {
                src: 'http://' + hostname + ':' + port,
                style: 'width:100%; height:80vh; border:1px solid #ccc; border-radius:4px;'
            })
        ]);
    },

    handleSaveApply: null,
    handleSave: null,
    handleReset: null
});
