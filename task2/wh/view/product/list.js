Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',

    title : 'Список товаров',
    store: 'Products',

    columns: [
        {header: 'Наименование',  dataIndex: 'name',  flex: 1},
        {header: 'Защищенность',  dataIndex: 'prot',  flex: 1},
        {header: 'Размер',  dataIndex: 'size',  flex: 1},
        {header: 'Цена (₽)', dataIndex: 'price', flex: 1},
        {header: 'Скидка (%)',  dataIndex: 'diskount',  flex: 1}
    ]
});