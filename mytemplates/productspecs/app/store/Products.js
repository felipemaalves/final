Ext.define('AM.store.Products', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Product',
    // autoLoad: false,
    // autoSync: false,
    remoteFilter: true
});
