Ext.define('AM.model.Spec', {
    extend: 'Ext.data.Model',
    fields: ['id','name'],
    proxy: {
        url: '/productspecs/store',
        type: 'rest',

        reader: {
            type: 'json',
            root: 'specs',
            successProperty: 'success'
        }
    }
});
