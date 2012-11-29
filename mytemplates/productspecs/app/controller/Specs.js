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
                click: this.addFeat
            }
        });
    },

    updateSpec: function(button) {
	var win      = button.up('window'),
            store    = this.getSpecsStore(),
            form     = win.down('form'),
            record   = form.getRecord(),
            values   = form.getValues();
        record.set(values);
        win.close();
        if (!record.get('id')) {
            store.add(record);
        }
        store.sync();
    },

    delSpec: function(rec) {
        this.getSpecsStore().remove(rec);
        this.getSpecsStore().sync();
    },

    editSpec: function(record) {
        featStore = Ext.create('AM.store.Features');
        pSpecId = record.get('id');
        featStore.filter("pk", pSpecId);        
        featStore.load({
            scope: this,
            callback: function(record, operation, success){
                myWindow.bindStore(prodStore);
            }
        });
        debugger;
        view = Ext.widget('specedit');
        view.down('form').loadRecord(record);
    },

    addSpec: function() {
        var specModel = Ext.ModelManager.getModel('AM.model.Spec').create();
        view = Ext.widget('specedit');
        view.down('form').loadRecord(specModel);
    },

    addFeat: function(record) {
        
        var featView = Ext.create('AM.view.feature.Edit');
        view.down('fieldset').add(featView);
    },
    
});
