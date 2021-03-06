Ext.define('AM.model.Product', {
    extend: 'Ext.data.Model',
    fields: ['id','name','price','productspec'],
    proxy: {
        url: '/productspecs/product',
        type: 'rest',
        reader: {
            // type: 'json',
            root: 'products',
            successProperty: 'success'
        }
    }
});
