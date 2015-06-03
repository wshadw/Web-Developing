Ext.define('bet.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'fit',
    items: [
    {
        xtype: 'panel',
        tbar: [
            {xtype: 'button', text: 'Обновить', itemId: 'btnRefresh'},
            {xtype: 'button', text: 'Счет', itemId: 'btnPrint'}
        ],
        items: [{
            xtype: 'allstats'
        }
        ]
    }
    ]
});