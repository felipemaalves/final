Ext.define('AM.view.spec.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.speclist',
    title: 'All Product Specs',
    store: 'Specs',

    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
//          {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});
