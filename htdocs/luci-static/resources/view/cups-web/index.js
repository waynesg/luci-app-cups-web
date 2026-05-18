'use strict';
'require view';
'require form';
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
        var m, s, o;

        m = new form.Map('cups-web', _('CUPS Web Configuration'),
            _('Configure CUPS Web print management service.'));

        s = m.section(form.TypedSection, 'main', _('General Settings'));
        s.anonymous = true;

        o = s.option(form.Flag, 'enabled', _('Enable'),
            _('Enable CUPS Web service'));
        o.default = '0';
        o.rmempty = false;

        o = s.option(form.Value, 'port', _('Port'),
            _('HTTP port for CUPS Web interface'));
        o.default = '8080';
        o.datatype = 'port';
        o.rmempty = false;

        o = s.option(form.Value, 'cups_host', _('CUPS Host'),
            _('CUPS server address (host or host:port)'));
        o.default = 'localhost';
        o.rmempty = false;

        o = s.option(form.Value, 'db_path', _('Database Path'),
            _('Path to SQLite database file'));
        o.default = '/var/lib/cups-web/data/cups-web.db';
        o.rmempty = false;

        o = s.option(form.Value, 'upload_dir', _('Upload Directory'),
            _('Directory for uploaded files'));
        o.default = '/var/lib/cups-web/uploads';
        o.rmempty = false;

        return m.render();
    },

    handleSaveApply: null,
    handleSave: null,
    handleReset: null
});
