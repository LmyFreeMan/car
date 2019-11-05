<?php

namespace app\admin\model;

use think\Model;

class Car extends Model
{
    // 表名
    protected $table = 'car';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = false;
    
    // 追加属性
    protected $append = [
        'rate_text',
        'type_text',
        'grade_text'
    ];
    

    
    public function getRateList()
    {
        return ['default' => __('Rate default'),'small' => __('Rate small'),'larger' => __('Rate larger'),'morelarge' => __('Rate morelarge')];
    }     

    public function getTypeList()
    {
        return ['rongwei' => __('Type rongwei'),'bentian' => __('Type bentian'),'biyadi' => __('Type biyadi'),'bieke' => __('Type bieke'),'changan' => __('Type changan'),'dazhong' => __('Type dazhong'),'xuefolan' => __('Type xuefolan'),'richan' => __('Type richan'),'benteng' => __('Type benteng'),'aodi' => __('Type aodi'),'beijing' => __('Type beijing')];
    }     

    public function getGradeList()
    {
        return ['default' => __('Grade default'),'small' => __('Grade small'),'larger' => __('Grade larger')];
    }     


    public function getRateTextAttr($value, $data)
    {        
        $value = $value ? $value : (isset($data['rate']) ? $data['rate'] : '');
        $list = $this->getRateList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getTypeTextAttr($value, $data)
    {        
        $value = $value ? $value : (isset($data['type']) ? $data['type'] : '');
        $list = $this->getTypeList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getGradeTextAttr($value, $data)
    {        
        $value = $value ? $value : (isset($data['grade']) ? $data['grade'] : '');
        $list = $this->getGradeList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}
