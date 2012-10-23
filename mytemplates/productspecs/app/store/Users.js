Ext.define('AM.store.Specs', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Spec',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
	api: {
	    read: 'data/specs.json',
	    update:'data/updateSpecs.json'
	},
        reader: {
            type: 'json',
            root: 'specs',
            successProperty: 'success'
        }
    }
});
