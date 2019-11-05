define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'car/index',
                    add_url: 'car/add',
                    edit_url: 'car/edit',
                    del_url: 'car/del',
                    multi_url: 'car/multi',
                    table: 'car',
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
                        {field: 'name', title: __('Name')},
                        {field: 'firstprice', title: __('Firstprice'), operate:'BETWEEN'},
                        {field: 'rate', title: __('Rate'), searchList: {"default":__('Rate default'),"small":__('Rate small'),"larger":__('Rate larger'),"morelarge":__('Rate morelarge')}, formatter: Table.api.formatter.normal},
                        {field: 'di', title: __('Di'), operate:'BETWEEN'},
                        {field: 'monthprice', title: __('Monthprice'), operate:'BETWEEN'},
                        {field: 'allprice', title: __('Allprice'), operate:'BETWEEN'},
                        {field: 'type', title: __('Type'), searchList: {"rongwei":__('Type rongwei'),"bentian":__('Type bentian'),"biyadi":__('Type biyadi'),"bieke":__('Type bieke'),"changan":__('Type changan'),"dazhong":__('Type dazhong'),"xuefolan":__('Type xuefolan'),"richan":__('Type richan'),"benteng":__('Type benteng'),"aodi":__('Type aodi'),"beijing":__('Type beijing')}, formatter: Table.api.formatter.normal},
                        {field: 'carimages', title: __('Carimages'), formatter: Table.api.formatter.images},
                        {field: 'number', title: __('Number')},
                        {field: 'grade', title: __('Grade'), searchList: {"default":__('Grade default'),"small":__('Grade small'),"larger":__('Grade larger')}, formatter: Table.api.formatter.normal},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
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