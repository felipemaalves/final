Ext.define('AM.view.spec.List' ,{
    extend: 'Ext.grid.Panel',
    renderTo: Ext.getBody(),
    width: 300,
    height: 500,
    alias: 'widget.speclist',
    title: 'All Product Specs',
    store: 'Specs',
        
    initComponent: function() {
        this.columns = [
            {header: ' ', width: 50 },
            {header: 'Name',  dataIndex: 'name',  flex: 1},
//          {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});

