<?php

namespace app\admin\model;

use think\Model;

class Loan extends Model
{
    // 表名
    protected $table = 'loan';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    
    // 追加属性
    protected $append = [
        'creattime_text'
    ];
    

    



    public function getCreattimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['creattime']) ? $data['creattime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setCreattimeAttr($value)
    {
        return $value && !is_numeric($value) ? strtotime($value) : $value;
    }


}
