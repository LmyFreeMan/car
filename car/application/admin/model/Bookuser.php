<?php

namespace app\admin\model;

use think\Model;

class Bookuser extends Model
{
    // 表名
    protected $table = 'bookuser';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = false;
    
    // 追加属性
    protected $append = [

    ];
    

    







}
