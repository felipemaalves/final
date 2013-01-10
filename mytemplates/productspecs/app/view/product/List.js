Ext.define('AM.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.productlist',
    title: 'Products',
    store: 'Products',
    columnLines: true,
    hidden: true,
    itemId: 'prodTable',
    productSpecId: null,

    tbar: [
        { 
            xtype: 'button',
            scale: 'large',
            icon: 'http://png-3.findicons.com/files/icons/2222/gloss_basic/32/add.png',
            iconAlign: 'left',
            text: 'Add Product',
            handler: function() {
                this.up('productlist').fireEvent('addproduct');
            },
            itemId: 'btnAddP'
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
                        tooltip: 'Edit Product',
                        handler: function(grid, row, col) {
                            var store = grid.getStore();
                            var record = store.getAt(row);
                            this.up('productlist').fireEvent('editproduct', record);
                        },
                        itemId: 'btnEditP'
                    },
                    {
                        icon: 'http://agapemonteverde.com.br/imagens/icon_delete.jpg',
                        width: 10,
                        height: 10,
                        tooltip: 'Delete Product',
                        handler: function(grid, row, col) {
                            var store = grid.getStore();
                            var rec = store.getAt(row);
                            alert (rec.get('name') + ' Deletado');
                            this.up('productlist').fireEvent('deleteproduct', rec);
                        },
                        itemId: 'btnDelP'
                    }
                ]
            },
            {
                header: 'Name',  
                dataIndex: 'name',  
                flex: 0.75
            },
            {
                header: 'Price',
                dataIndex: 'price',
                flex: 0.25
            }
        ];
        this.callParent(arguments);
    },

});

