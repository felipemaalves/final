Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: '/static/productspecs/app',
    controllers:[
        'Specs'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',

            items: [{
                region: 'center',
                xtype: 'speclist',
                },
                {
                region: 'east',
                xtype: 'speclist',
                width: 500,
                collapsible: true,
                },
            ],
        });
    }
});
