Ext.define('AM.controller.Specs', {
    extend: 'Ext.app.Controller',

    stores: [
	'Specs'
    ],
    models: [
        'Spec'
    ],

    views: [
        'spec.List',
	'spec.Edit'
    ],

    init: function() {
        this.control({
            'viewport > speclist': {
                itemdblclick: this.editSpec
            },
	    'specedit button[action=save]': {
		click: this.updateSpec
	    }
        });
    },

    updateSpec: function(button) {
	var win      = button.up('window'),
            form     = win.down('form'),
            record   = form.getRecord(),
            values   = form.getValues();
        
        record.set(values);
        win.close();
	this.getSpecsStore().sync();
    },

    editSpec: function(grid, record) {
	var view = Ext.widget('specedit');
	view.down('form').loadRecord(record);
    }
});
