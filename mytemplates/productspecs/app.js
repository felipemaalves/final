Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: '/static/productspecs/app',
    controllers:[
        'Specs',
        'Products'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'table',
                columns: 3
            },
            defaults: {frame:true, width:300, height: 600},

            items: [
                {
                    xtype: 'speclist',
                },
                {
                    xtype: 'productlist',
                },
            ],
        });
    }
});
