<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:80:"/var/www/www.gxfwz36524.com/car/public/../application/admin/view/frist/edit.html";i:1555752151;s:74:"/var/www/www.gxfwz36524.com/car/application/admin/view/layout/default.html";i:1547814856;s:71:"/var/www/www.gxfwz36524.com/car/application/admin/view/common/meta.html";i:1547814855;s:73:"/var/www/www.gxfwz36524.com/car/application/admin/view/common/script.html";i:1547814855;}*/ ?>
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
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Banner1_top'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-banner1_top" data-rule="required" class="form-control" name="row[banner1_top]" type="text" value="<?php echo $row['banner1_top']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Banner1_bottom'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-banner1_bottom" data-rule="required" class="form-control" name="row[banner1_bottom]" type="text" value="<?php echo $row['banner1_bottom']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Monthprice'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-monthprice" data-rule="required" class="form-control" name="row[monthprice]" type="text" value="<?php echo $row['monthprice']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Fristprice'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-fristprice" data-rule="required" class="form-control" name="row[fristprice]" type="text" value="<?php echo $row['fristprice']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Firstimage'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-firstimage" data-rule="required" class="form-control" size="50" name="row[firstimage]" type="text" value="<?php echo $row['firstimage']; ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-firstimage" class="btn btn-danger plupload" data-input-id="c-firstimage" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-firstimage"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-firstimage" class="btn btn-primary fachoose" data-input-id="c-firstimage" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-firstimage"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-firstimage"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Frist'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-frist" data-rule="required" class="form-control" name="row[frist]" type="text" value="<?php echo $row['frist']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Secondimage'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-secondimage" data-rule="required" class="form-control" size="50" name="row[secondimage]" type="text" value="<?php echo $row['secondimage']; ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-secondimage" class="btn btn-danger plupload" data-input-id="c-secondimage" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-secondimage"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-secondimage" class="btn btn-primary fachoose" data-input-id="c-secondimage" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-secondimage"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-secondimage"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Second'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-second" data-rule="required" class="form-control" name="row[second]" type="text" value="<?php echo $row['second']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Thirdimage'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-thirdimage" data-rule="required" class="form-control" size="50" name="row[thirdimage]" type="text" value="<?php echo $row['thirdimage']; ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-thirdimage" class="btn btn-danger plupload" data-input-id="c-thirdimage" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-thirdimage"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-thirdimage" class="btn btn-primary fachoose" data-input-id="c-thirdimage" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-thirdimage"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-thirdimage"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Third'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-third" class="form-control" name="row[third]" type="text" value="<?php echo $row['third']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Fouthimage'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-fouthimage" data-rule="required" class="form-control" size="50" name="row[fouthimage]" type="text" value="<?php echo $row['fouthimage']; ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-fouthimage" class="btn btn-danger plupload" data-input-id="c-fouthimage" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-fouthimage"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-fouthimage" class="btn btn-primary fachoose" data-input-id="c-fouthimage" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-fouthimage"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-fouthimage"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Fourth'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-fourth" class="form-control" name="row[fourth]" type="text" value="<?php echo $row['fourth']; ?>">
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/car/public/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/car/public/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo $site['version']; ?>"></script>
    </body>
</html>