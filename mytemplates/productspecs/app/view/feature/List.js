Ext.define('AM.view.feature.List' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.featurelist',
    store: 'Features',

    initComponent: function()
    {
        title: 'Features',
        items: [
            {
                xtype:'form',
                renderTo: Ext.getBody(),
                pinned: true,
                items: [
                    {
                        xtype: 'textfield',
                        //name : 'feature',
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
                        //name : 'description',
                        autoScroll: true,
                        bottom: 100,
                        pinned: true,
                    },
                ],
            },
        ],
    },
});
