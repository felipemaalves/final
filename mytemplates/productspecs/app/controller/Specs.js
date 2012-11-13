Ext.define('AM.controller.Specs', {
    extend: 'Ext.app.Controller',

    stores: [
	    'Specs',
        'Products'
    ],
    models: [
        'Spec',
        'Product'
    ],

    views: [
        'spec.List',
	    'spec.Edit',
        'product.List'
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

    editSpec: function(rec) {
    var view = Ext.widget('specedit');
	view.down('form').loadRecord(rec);
    },

    addSpec: function() {
        var specModel = Ext.ModelManager.getModel('AM.model.Spec').create();
        var view = Ext.widget('specedit');
        view.down('form').loadRecord(specModel);
    }
});
