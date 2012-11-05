Ext.define('AM.store.Specs', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Spec',
    autoLoad: true,
    
    proxy: {
        url: '/productspecs/store',
        type: 'rest',


	/*api: {
	    read: '/productspecs/store/',
	    update:'/productspecs/store/(?P<pk>\d+)/'
	},*/
        reader: {
            type: 'json',
            root: 'specs',
            successProperty: 'success'
        }
    }
});
