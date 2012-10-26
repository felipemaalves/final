Ext.define('AM.store.Specs', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Spec',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
	api: {
	    read: '/productspecs/store/',
	    update:'/static/productspecs/data/updateSpecs.json'
	},
        reader: {
            type: 'json',
            root: 'specs',
            successProperty: 'success'
        }
    }
});
