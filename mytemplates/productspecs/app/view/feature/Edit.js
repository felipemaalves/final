Ext.define('AM.view.feature.Edit' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.featedit',
    store: 'Features',
    productSpecId: null,

    items : [
                    {
                        xtype: 'textfield',
                        name : 'feature',
                        fieldLabel: 'Name',
                    },
                    {
                        xtype: 'textarea',
                        fieldLabel: 'Description',
                        name : 'description'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'productspec'
                    }
        ]
});
