Ext.define('AM.controller.Specs', {
    extend: 'Ext.app.Controller',

    stores: [
	    'Specs',
        'Products',
        'Features'
    ],
    models: [
        'Spec',
        'Product',
        'Feature'
    ],

    views: [
        'spec.List',
	    'spec.Edit',
        'feature.Edit'
    ],

    /*refs: [
        {ref: 'viewfeatedit', selector: '#featTable'}            
    ],*/

    init: function() {
        this.control({
            'speclist': {
                editclickgrid: this.editSpec,
                deletepspec: this.delSpec,
                addpspec: this.addSpec
            },
	        'specedit button[action=save]': {
		        click: this.updateSpec
	        },
            'specedit button[action=add]': {
                click: this.addFeatBtn
            }
        });
    },

    updateSpec: function(button) {
	var win      = button.up('window'),
            store    = this.getSpecsStore(),
            form     = win.down('form'),
            record   = form.getRecord(),
            values   = form.getValues();
        debugger;
        record.set(values);
        win.close();
        if (!record.get('id')) {
            store.add(record);
        }
        else {
            for(var i = 0, max = record.data.productspec.length; i < max; i ++) {
                if (i >= featCount) {
                    featCount += 1;
                    featModel = Ext.ModelManager.getModel('AM.model.Feature').create();
                    featModel.data.description = record.data.description[i];
                    featModel.data.feature = record.data.feature[i];
                    featModel.data.productspec = record.get('id');
                    featStore.add(featModel)
                }
                else {
                    record.data.productspec[i] = record.get('id');
                }
            }
            featStore.sync();
        }
        store.sync();
    },

    delSpec: function(rec) {
        this.getSpecsStore().remove(rec);
        this.getSpecsStore().sync();
    },

    editSpec: function(record) {
        myWindow = Ext.widget('featedit');
            featStore = Ext.create('AM.store.Features');
        pSpecId = record.get('id');
        featStore.filter("pk", pSpecId);
        myWindow.productSpecId = pSpecId;
        featCount = 0;
        featStore.load({
            scope: this,
            callback: function(record, operation, success){
                for(var i = 0, max = record.length; i < max; i ++){
                    var v = record[i];
                    this.addFeat(v);
                    featCount += 1;
                }
                myWindow.bindStore(featStore);
            }
        });
        view = Ext.widget('specedit');
        view.down('form').loadRecord(record);
    },

    addSpec: function() {
        var specModel = Ext.ModelManager.getModel('AM.model.Spec').create();
        view = Ext.widget('specedit');
        view.setHeight(125);
        view.down('form').loadRecord(specModel);
        view.down('fieldset').setVisible(false);
        view.down('bbar').setVisible(false);
    },

    addFeat: function(record) {
        var featView = Ext.create('AM.view.feature.Edit');
        view.down('fieldset').add(featView);
        if (record.get('feature')){
            featView.down('[name=feature]').setValue(record.get('feature'));
            featView.down('[name=description]').setValue(record.get('description'));
        }
    },
    addFeatBtn: function () {
        var featView = Ext.create('AM.view.feature.Edit');
        view.down('fieldset').add(featView);
    }
    
});
