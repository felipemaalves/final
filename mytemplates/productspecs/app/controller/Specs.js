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
            'speclist': {
                editclickgrid: this.editSpec,
                deletepspec: this.delSpec
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

    delSpec: function(rec) {
        //debugger;
        this.getSpecsStore().remove(rec);
        this.getSpecsStore().sync();
    },

    editSpec: function(rec) {
    var view = Ext.widget('specedit');
	view.down('form').loadRecord(rec);
    }
});
