Ext.define('AM.store.Products', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Product',
    //autoLoad: true,
    //autoSync: false,
    remoteFilter: true
});
