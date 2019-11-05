define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'frist/index',
                    add_url: 'frist/add',
                    edit_url: 'frist/edit',
                    del_url: 'frist/del',
                    multi_url: 'frist/multi',
                    table: 'frist',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'banner1_top', title: __('Banner1_top')},
                        {field: 'banner1_bottom', title: __('Banner1_bottom')},
                        {field: 'monthprice', title: __('Monthprice')},
                        {field: 'fristprice', title: __('Fristprice')},
                        {field: 'firstimage', title: __('Firstimage'), formatter: Table.api.formatter.image},
                        {field: 'frist', title: __('Frist')},
                        {field: 'secondimage', title: __('Secondimage'), formatter: Table.api.formatter.image},
                        {field: 'second', title: __('Second')},
                        {field: 'thirdimage', title: __('Thirdimage'), formatter: Table.api.formatter.image},
                        {field: 'third', title: __('Third')},
                        {field: 'fouthimage', title: __('Fouthimage'), formatter: Table.api.formatter.image},
                        {field: 'fourth', title: __('Fourth')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});