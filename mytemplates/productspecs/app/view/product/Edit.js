Ext.define('AM.view.product.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.prodedit',
    
    stores: [
        'Products',
    ],

    title: "Edit Product" , 

    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
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

