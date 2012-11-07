Ext.define('AM.view.spec.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.speclist',
    title: 'All Product Specs',
    store: 'Specs',
    columnLines: true,

    tbar: [
        { 
            xtype: 'button',
            scale: 'large',
            icon: 'http://png-3.findicons.com/files/icons/2222/gloss_basic/32/add.png',
            iconAlign: 'left',
            text: 'Add Product Spec',
            handler: function() {
                this.up('speclist').fireEvent('addpspec');
            },
            itemId: 'btnAdd'
        }
    ],
    
    initComponent: function() {
        this.columns = [
            {
                xtype: 'actioncolumn',
                width: 65,
                items: [
                    {
                        icon: 'http://cmsresources.windowsphone.com/windowsphone/en-us/How-to/wp7/inline/basic-icon-edit.png',
                        width: 10,
                        height: 10,
                        tooltip: 'Edit Product Spec',
                        handler: function(grid, row, col) {
                            var store = grid.getStore();
                            var rec = store.getAt(row);
                            this.up('speclist').fireEvent('editclickgrid', rec);
                        },
                        itemId: 'btnEdit'
                    },
                    {
                        icon: 'http://agapemonteverde.com.br/imagens/icon_delete.jpg',
                        width: 10,
                        height: 10,
                        tooltip: 'Delete Product Spec',
                        handler: function(grid, row, col) {
                            var store = grid.getStore();
                            var rec = store.getAt(row);
                            alert (rec.get('name') + ' Deletado');
                            this.up('speclist').fireEvent('deletepspec', rec);
                        },
                        itemId: 'btnDel'
                    }
                ]
            },
            {
                header: 'Name',  
                dataIndex: 'name',  
                flex: 1
            }
        ];
        this.callParent(arguments);
    },

});

