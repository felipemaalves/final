Ext.define('AM.view.spec.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.specedit',
    
    stores: [
        'Specs',
    ],

    title: "Edit Product Spec" , 
    width: 500,
    height: 600,

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
                        title: 'Features',
                        items: [
                                {
                                    xtype:'form',
                                    renderTo: Ext.getBody(),
                                    name: 'namess',
                                    pinned: true,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            dataIndex : 'name',
                                            fieldLabel: 'Name',
                                        },
                                        {
                                            xtype: 'htmleditor',
                                            enableAlignments:false,
                                            enableColors:false,
                                            enableFont:false,
                                            enableFontSize:false,
                                            enableFormat:false,
                                            enableLinks:false,
                                            enableLists:false,
                                            enableSourceEdit:false,
                                            errorMsgCls:false,
                                            width: 465 ,
                                            fieldLabel: 'Description',
                                            name : 'bla',
                                            autoScroll: true,
                                            bottom: 100,
                                            pinned: true,
                                        },
                                    ],
                                },
                        ],
                        buttons: [
                            {
                                text: 'Add Feature',
                            },
                        ],
                    },
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

