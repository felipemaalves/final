Ext.define('AM.controller.Products', {
    extend: 'Ext.app.Controller',

    stores: [
        'Products'
    ],
    models: [
        'Product'
    ],

    views: [
        'product.List',
        'product.Edit',
        'spec.List'
    ],

    refs: [
        {ref: 'viewprodlist', selector: '#prodTable'}
    ],


    init: function() {
        this.control({
            'speclist': {
                itemclick: this.openProd
            },
            'productlist': {
                editproduct: this.editProd,
                deleteproduct: this.delProd,
                addproduct: this.addProd
            },
	        'prodedit button[action=save]': {
		        click: this.updateProd
	        }
        });
    },


    openProd: function(grid, record) {
        myWindow = this.getViewprodlist(),
            prodStore = Ext.create('AM.store.Products');
        myWindow.setVisible(true);
        gRecord = record;
        gGrid = grid;
        pSpecId = record.get('id');
        prodStore.filter("pk", pSpecId);
        myWindow.productSpecId = pSpecId;
        prodStore.load({
            scope: this, 
            callback: function(record, operation, success){
                myWindow.bindStore(prodStore);
            }
        });
    },

    refresh: function(grid, record){
        myWindow = this.getViewprodlist(),
            prodStore = Ext.create('AM.store.Products');
        myWindow.setVisible(true);
        prodStore.filter("pk", pSpecId);
        myWindow.productSpecId = pSpecId;
        prodStore.load({
            scope: this,
            callback: function(record, operation, success){
                myWindow.bindStore(prodStore);
            }
        });
    },
        
    updateProd: function(button) {
	var win      = button.up('window'),
            form     = win.down('form'),
            store    = this.getViewprodlist().getStore(),
            record   = form.getRecord(),
            values   = form.getValues();
        record.set(values);
        if (record.data.price == "") {
            record.data.price = 0;
        }
        if (record.data.name == "") {
            record.data.name = 'Sem Nome';
        }
        if (!record.get('id')) {
            store.add(record);
            myWindow.setVisible(false);
        }
        win.close();
        store.sync();
    },

    delProd: function(rec) {
        this.getViewprodlist().getStore().remove(rec);
        this.getViewprodlist().getStore().sync();
    },

    editProd: function(rec) {
        var view = Ext.widget('prodedit');
	    view.down('form').loadRecord(rec);
    },

    addProd: function() {
        var prodModel = Ext.ModelManager.getModel('AM.model.Product').create();
        prodModel.data.productspec = this.getViewprodlist().productSpecId;
        var view = Ext.widget('prodedit');
        view.down('form').loadRecord(prodModel);
    }
});
