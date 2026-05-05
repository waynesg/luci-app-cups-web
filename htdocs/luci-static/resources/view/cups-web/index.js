'use strict';
'require view';

return view.extend({
    render: function() {
        return E('iframe', {
            src: 'http://' + window.location.hostname + ':8080',
            style: 'width:100%; height:90vh; border:none;'
        });
    }
});
