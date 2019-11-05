<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:78:"/var/www/www.gxfwz36524.com/car/public/../application/admin/view/car/edit.html";i:1554445875;s:74:"/var/www/www.gxfwz36524.com/car/application/admin/view/layout/default.html";i:1547814856;s:71:"/var/www/www.gxfwz36524.com/car/application/admin/view/common/meta.html";i:1547814855;s:73:"/var/www/www.gxfwz36524.com/car/application/admin/view/common/script.html";i:1547814855;}*/ ?>
<!DOCTYPE html>
<html lang="<?php echo $config['language']; ?>">
    <head>
        <meta charset="utf-8">
<title><?php echo (isset($title) && ($title !== '')?$title:''); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">

<link rel="shortcut icon" href="/car/public/assets/img/favicon.ico" />
<!-- Loading Bootstrap -->
<link href="/car/public/assets/css/backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="/car/public/assets/js/html5shiv.js"></script>
  <script src="/car/public/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config:  <?php echo json_encode($config); ?>
    };
</script>
    </head>

    <body class="inside-header inside-aside <?php echo defined('IS_DIALOG') && IS_DIALOG ? 'is-dialog' : ''; ?>">
        <div id="main" role="main">
            <div class="tab-content tab-addtabs">
                <div id="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <section class="content-header hide">
                                <h1>
                                    <?php echo __('Dashboard'); ?>
                                    <small><?php echo __('Control panel'); ?></small>
                                </h1>
                            </section>
                            <?php if(!IS_DIALOG && !$config['fastadmin']['multiplenav']): ?>
                            <!-- RIBBON -->
                            <div id="ribbon">
                                <ol class="breadcrumb pull-left">
                                    <li><a href="dashboard" class="addtabsit"><i class="fa fa-dashboard"></i> <?php echo __('Dashboard'); ?></a></li>
                                </ol>
                                <ol class="breadcrumb pull-right">
                                    <?php foreach($breadcrumb as $vo): ?>
                                    <li><a href="javascript:;" data-url="<?php echo $vo['url']; ?>"><?php echo $vo['title']; ?></a></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                            <!-- END RIBBON -->
                            <?php endif; ?>
                            <div class="content">
                                <form id="edit-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">

    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-name" data-rule="required" class="form-control" name="row[name]" type="text" value="<?php echo $row['name']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Firstprice'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-firstprice" data-rule="required" class="form-control" step="0.01" name="row[firstprice]" type="number" value="<?php echo $row['firstprice']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Di'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-di" data-rule="required" class="form-control" step="0.01" name="row[di]" type="number" value="<?php echo $row['di']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Monthprice'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-monthprice" data-rule="required" class="form-control" step="0.01" name="row[monthprice]" type="number" value="<?php echo $row['monthprice']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Allprice'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-allprice" data-rule="required" class="form-control" step="0.01" name="row[allprice]" type="number" value="<?php echo $row['allprice']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Type'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                        
            <select  id="c-type" data-rule="required" class="form-control selectpicker" name="row[type]">
                <?php if(is_array($typeList) || $typeList instanceof \think\Collection || $typeList instanceof \think\Paginator): if( count($typeList)==0 ) : echo "" ;else: foreach($typeList as $key=>$vo): ?>
                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['type'])?$row['type']:explode(',',$row['type']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>

        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Carimages'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-carimages" data-rule="required" class="form-control" size="50" name="row[carimages]" type="text" value="<?php echo $row['carimages']; ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-carimages" class="btn btn-danger plupload" data-input-id="c-carimages" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="true" data-preview-id="p-carimages"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-carimages" class="btn btn-primary fachoose" data-input-id="c-carimages" data-mimetype="image/*" data-multiple="true"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-carimages"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-carimages"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Number'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-number" data-rule="required" class="form-control" name="row[number]" type="number" value="<?php echo $row['number']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Grade'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                        
            <select  id="c-grade" data-rule="required" class="form-control selectpicker" name="row[grade]">
                <?php if(is_array($gradeList) || $gradeList instanceof \think\Collection || $gradeList instanceof \think\Paginator): if( count($gradeList)==0 ) : echo "" ;else: foreach($gradeList as $key=>$vo): ?>
                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['grade'])?$row['grade']:explode(',',$row['grade']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>

        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Maincontent'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <textarea id="c-maincontent" class="form-control editor" rows="5" name="row[maincontent]" cols="50"><?php echo $row['maincontent']; ?></textarea>
        </div>
    </div>
    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-success btn-embossed disabled"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>
<script>
    var  myselect=document.getElementById("c-grade")
    var index=myselect.selectedIndex;
    console.log(typeof(parseInt(myselect.options[index].text)))

</script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/car/public/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/car/public/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo $site['version']; ?>"></script>
    </body>
</html>