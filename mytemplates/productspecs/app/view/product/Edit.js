Ext.define('AM.view.product.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.prodedit',
    
    stores: [
        'Products',
        'FeatureValues'
    ],

    title: "Edit Product" , 
    width: 320,
    height: 450,
    autoscroll: true,

    layout: 'fit',
    autoShow: true,
    resizable: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'price',
                        fieldLabel: 'Price'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'productspec'
                    },
                    {
                        title: 'Feature Values',
                        xtype: 'fieldset',
                        flex: 1,
                        autoScroll: true,
                        hidden: false
                    }
                ],
            },
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});

