Ext.define('bet.view.stats.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.allstats',

    title: 'Статистика выигрышей',
    store: 'Stats',

    columns: [
        { header: 'Игрок', dataIndex: 'user', flex: 1 },
        { header: 'Результат ($)', dataIndex: 'money', flex: 1 }
    ]
});