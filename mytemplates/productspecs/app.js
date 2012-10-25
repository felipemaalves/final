Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: '/static/productspecs/app',
    controllers:[
        'Specs'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'speclist'
            }
        });
    }
});
