Ext.define('AM.view.spec.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.specedit',
    
    stores: [
        'Specs',
    ],

    title: "Edit Product Spec" , 
    width: 320,
    height: 450,
    autoscroll: true,

    layout: 'fit',
    autoShow: true,
//    resizable: false,

    initComponent: function() {
        foo = this;
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
                        title: 'Features',
                        xtype: 'fieldset',
                        layout: 'anchor',
                        defaults: {width:280 , height:95 },
                        isScrollable: true,
                        hidden: false
                    },
                ],
                bbar: [
                    {
                            text: 'Add Feature',
                            xtype: 'button',
                            action: 'add',
                            flex: 1,
                            textAlign: 'center',
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

