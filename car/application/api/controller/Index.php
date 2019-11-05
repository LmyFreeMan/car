<?php

namespace app\api\controller;

use app\common\controller\Api;
use fast\Date;
use fast\Pinyin;
use think\Db;
/**
 * 首页接口
 */
class Index extends Api
{

    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     * 
     */
    public function index()
    {
        $this->success('请求成功');
    }
    public function exitopenid()
    {
        $r=Db::table('owneruser')->where('openid',$_POST['openid'])->select();
        return json_encode($r);
    }
    public function changeindex()
    {
        $r=Db::table("frist")->select();
        return json_encode($r);
    }
    public  function selectlist()
    {
//

        $pin = new Pinyin();
       // var_dump($_REQUEST["type"]);
         $type=$pin::get($_REQUEST["type"]);
        // var_dump($type);
        //var_dump($_REQUEST);
      if($_GET["type"]!="")
     $str=$_GET['allprice']." and ".$_GET['dis']." and type="."'".$type."'";
      else
          $str=$_GET['allprice']." and ".$_GET['dis'];
      $r=Db::table('car')->where($str)->select();
      return json_encode($r);


    }
    public  function getcarinfo()
    {
        $r=Db::table("carinfo")->select();

        return json_encode($r);

    }
    public function  banner()
    {

       $r=Db::table('banner')->where('switch',1)->select();
       return json_encode($r);
    }
    public function  contentlist()
    {
        $result=Db::table("content")->select();
        return json_encode($result);
    }
    public function  getaccesstoken()
    {

        $id="wx654d8edf35471dd0";
        $secret="f0624be7fb33fa49991cd4a8f272b201";
        $url="https://api.weixin.qq.com/sns/jscode2session?appid=".$id."&secret=".$secret."&js_code=".$_POST['code']."&grant_type=authorization_code";
//        var_dump($url);
        $postUrl = $url;

        $ch = curl_init();//初始化curl
        curl_setopt($ch, CURLOPT_URL,$postUrl);//抓取指定网页
        curl_setopt($ch, CURLOPT_HEADER, 0);//设置header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//要求结果为字符串且输出到屏幕上
        curl_setopt($ch, CURLOPT_POST, 1);//post提交方式
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $data = curl_exec($ch);//运行curl
        curl_close($ch);
        //  var_dump($data);
        print_r($data);

















    }
    public  function  bynumber()
    {
        $r=Db::table('car')->order('number desc,allprice desc')->select();
        return json_encode($r);
    }

    public function  adduser()
    {

        $data = ['openid' => $_POST["openid"],
                 'phone'=>$_POST["phone"],
                "city"=>$_POST["city"],
                "createtime"=>time()
            ];
        Db::table('owneruser')->insert($data);
    }
    public function  addloan()
    {
        $r=Db::table('loan')->where('openid',$_POST['openid'])->select();
       if(count($r)==0)
           $data=[
               "username"=>$_POST["username"],
               "phone"=>$_POST["phone"],
               "openid"=>$_POST["openid"],
               "creattime"=>time()
           ];
        Db::table("loan")->insert($data);

    }
    public  function  addbookuser()
    {


        $r=Db::table('car')->where('id',$_GET['id'])->find();
        $f=Db::table('bookuser')->where("name",$r['name'])->where("tel",$_GET['phone'])->select();
        if($_GET["phone"]=="null")
        {
            $result=Db::table('owneruser')->where('openid',$_GET['openid'])->find();
            $_GET["phone"]=$result['phone'];
        }
        if($f==null)
        {
            echo "success";
            $data = ['tel'=>$_GET["phone"],
                'name'=>$r['name'],
                'id'=>$_GET['id'],
                "createtime"=>time()
            ];
            Db::table('bookuser')->insert($data);

        }
        else
            echo "fail";
    }
    public  function  byname()
    {

        $r=Db::table('car')->where('name','like',$_GET['name'].'%')->select();
        if($r)
            return json_encode($r);
        else
            echo 'fail';
    }
    public  function bymonthprice()
    {

        if($_GET["id"]!=null) {
            $where = "monthprice>" . $_GET["id"];
            $r = Db::table('car')->where($where)->select();
        }
       // if($_GET["id"]=="smallprice")

//        else if($_GET["id"]=="smallprice1")
//            $r=Db::table('car')->where("monthprice<1977")->select();
//        else if($_GET["id"]=="middleprice")
//            $r=Db::table('car')->where("firstprice=0")->select();
//        else if($_GET["id"]=="largeprice")
//            $r=Db::table('car')->where("firstprice<100000")->select();
        else
      $r=Db::table('car')->where("monthprice>1308")->select();
        return json_encode($r);
    }
    public  function byfirstprice()
    {
        $r=Db::table('car')->order("firstprice",">",$_GET["firstprice"])->select();
        return json_encode($r);
    }
    public  function byid()
    {
        $r=Db::table('car')->where("id",$_GET["id"])->select();
        return json_encode($r);
    }
    public function bydi()
    {
        if($_GET["id"]=="zeroprice")
            $r=Db::table('car')->where("di",0)->select();
        if($_GET["id"]=="oneprice")
            $r=Db::table('car')->where("di",1)->select();
        if($_GET["id"]=="twoprice")
            $r=Db::table('car')->where("di",2)->select();
        return json_encode($r);
    }
    public  function contentbyid()
    {
        $r=Db::table('content')->where("id",$_GET["id"])->select();
        return json_encode($r);
    }
    public  function  bytype()
    {
        $r=Db::table('car')->where("type",$_GET["type"])->select();
        return json_encode($r);
    }
    public  function byprice()
    {
        if($_GET["id"]=="smallprice")
            $r=Db::table('car')->where("allprice","<",100000)->select();
        if($_GET["id"]=="middleprice")
            $r=Db::table('car')->where("allprice",">",100000)->where("allprice","<",150000)->select();
        if($_GET["id"]=="largeprice")
            $r=Db::table('car')->where("allprice",">",150000)->select();
        return json_encode($r);
    }
}
