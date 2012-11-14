Ext.define('AM.model.Feature', {
    extend: 'Ext.data.Model',
    fields: ['id','feature','description','productspec'],
    proxy: {
        url: '/productspecs/feature',
        type: 'rest',
        reader: {
            // type: 'json',
            root: 'features',
            successProperty: 'success'
        }
    }
});
