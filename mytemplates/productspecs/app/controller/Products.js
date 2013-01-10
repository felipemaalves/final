Ext.define('AM.controller.Products', {
    extend: 'Ext.app.Controller',

    stores: [
        'Products',
        'Specs',
        'Features',
        'FeatureValues'
    ],
    models: [
        'Product',
        'Spec',
        'Feature',
        'FeatureValue'
    ],

    views: [
        'product.List',
        'product.Edit',
        'spec.List',
        'feature.ValueEdit'
    ],

    refs: [
        {ref: 'viewprodlist', selector: '#prodTable'},
        {ref: 'viewprodlist', selector: '#prodTable'}
    ],


    init: function() {
        this.control({
            'speclist': {
                itemclick: this.openProd,
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
        this.getFeat(grid, record);
    },

    updateProd: function(button) {
	var win      = button.up('window'),
            form     = win.down('form'),
            store    = this.getViewprodlist().getStore(),
            record   = form.getRecord(),
            values   = form.getValues();
        debugger;
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
        else {
            max = featStore.data.length;
            for(var i = 0,c = 0; i < max; i ++) {
                if (record.data.value[i] != '') {
                    valModel = Ext.ModelManager.getModel('AM.model.FeatureValue').create();
                    valModel.data.productspec = record.get('productspec');
                    if (max ==1) {
                        valModel.data.value = record.get('value')
                        valModel.data.feature = record.get('feature');
                        valModel.data.feature_id = record.get('feature_id');
                        valModel.data.product = record.get('id');
                    }
                    else {
                        valModel.data.value = record.data.value[i];
                        valModel.data.feature = record.data.feature[i];
                        valModel.data.feature_id = record.data.feature_id[i];
                        valModel.data.product = record.get('id');
                    }
                    if (record.data.product[i] == '' && max!=1){
                        valStore.add(valModel);
                    }
                    else if (record.data.product == '' && max==1){
                        valStore.add(valModel);
                    }
                    else {
                        var rec = valStore.data.items[c];
                        if (!(rec.get('value') == valModel.get('value'))){
                            valStore.remove(rec);
                            valStore.add(valModel);
                        }
                        else {
                            c++;
                        }
                    }
                }
            }
            valStore.sync();
        }
        win.close();
        store.sync();
    },

    delProd: function(rec) {
        this.getViewprodlist().getStore().remove(rec);
        this.getViewprodlist().getStore().sync();
    },

    editProd: function(record) {
        var valWindow = Ext.widget('valedit');
        this.getVal(record);
        valWindow.product = prodId;
        var view = Ext.widget('prodedit');
        var fs = view.down('fieldset');
            valStore.load({
                scope: this,
                callback: function(record, operation, success){
                    for ( var c = 0, max = featStore.data.length; c < max; c ++){
                        this.addVal(fs,record, c);
                        valTotal = c;
                    }
                }
            });
	    view.down('form').loadRecord(record);
    },
    
    addVal: function (fieldset, record, counter) {
        var valView = Ext.create('AM.view.feature.ValueEdit');
        var feature = featStore.data.items[counter].get('feature');
        var featId = featStore.data.items[counter].get('id');
        if (feature == ''){
            feature = 'Sem Nome';
        }
        valView.down('[name=value]').fieldLabel = feature;
        valView.down('[name=feature]').setValue(feature);
        valView.down('[name=feature_id]').setValue(featId);
        for ( var i = 0 , max = record.length; i < max; i ++){
            if (record[i].get('feature') == feature){
                valView.down('[name=value]').setValue(record[i].get('value'));
                valView.down('[name=product]').setValue(prodId);
            }
        }
        fieldset.add(valView);
        return valView;
    },
        
    addProd: function() {
        var prodModel = Ext.ModelManager.getModel('AM.model.Product').create();
        prodModel.data.productspec = this.getViewprodlist().productSpecId;
        var view = Ext.widget('prodedit');
        view.down('form').loadRecord(prodModel);
        view.down('fieldset').setVisible(false);
    },

    getFeat: function(grid, record) {
        featStore = Ext.create('AM.store.Features');
            pSpecId = record.get('id');
        featStore.filter("pk", pSpecId);
        featStore.load();        
    },
    
    getVal: function(record) {
        valStore = Ext.create('AM.store.FeatureValues');
            prodId = record.get('id');
        valStore.filter("pk", prodId);
    }
});
