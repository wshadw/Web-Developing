Ext.define('bet.model.UserStat', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['id',
        { name: 'user', type: 'string' },
        { name: 'money', type: 'int', convert: null }
    ]
   
});