Ext.define('wh.model.Product', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['id',
        {name: 'name',  type: 'string'},
        {name: 'prot',   type: 'string'},
        {name: 'size',   type: 'int', convert: null},
        {name: 'price',   type: 'int', convert: null},
        {name: 'diskount',   type: 'int', convert: null},
    ],


    changeName: function(value) {
        this.set('name', value);
    }
});