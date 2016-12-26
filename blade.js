$('nav#heading').append('<div class="row"> ' +
    '<div class="col-md-2"> ' +
    '<div class="navbar-header"> ' +
    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse"> ' +
    '<span class="sr-only"></span> ' +
    '<span class="icon-bar"></span> ' +
    '<span class="icon-bar"></span> ' +
    '<span class="icon-bar"></span> ' +
    '</button> ' +
    '<a href="#" class="navbar-brand" style="color: #ffffff">生活家居进销存</a> ' +
    '</div> ' +
    '</div> ' +
    '<div class="col-md-10"> ' +
    '</div> ' +
    '</div>');

$('#sidebar').append('<div class="invoicing-sidebar"> ' +
    '<div class="sidebar-user"> ' +
    '<img src="no-avatar.png" alt="头像"> ' +
    '</div> ' +
    '<ul class="sidebar-menu"> ' +
    '<li class="drop-link" id="sidebar-item-1"> ' +
    '<a class="sidebar-item-heading" href="javascript:void(0)"><i class="fa fa-newspaper-o fa-2x sidebar-icon"></i>资料管理<i class="fa fa-angle-down pull-right"></i></a> ' +
    '<div class="sub-menu" id="sub-menu-1"> ' +
    '<ul class="sub-menu-list"> ' +
    '<li><a href="info-operator.html">用户信息管理</a></li> ' +
    '<li><a href="info-company.html">企业信息管理</a></li> ' +
    '<li><a href="info-customer.html">客户信息管理</a></li> ' +
    '<li><a href="info-good.html">商品信息管理</a></li> ' +
    '<li><a href="info-supplier.html">供应商信息管理</a></li> ' +
    '<li><a href="info-depot.html">仓库信息管理</a></li> ' +
    '</ul> ' +
    '</div> ' +
    '</li> ' +
    '<li class="drop-link" id="sidebar-item-2"> ' +
    '<a class="sidebar-item-heading" href="javascript:void(0)"><i class="fa fa-shopping-basket fa-2x sidebar-icon"></i>采购管理<i class="fa fa-angle-down pull-right"></i></a> ' +
    '<div class="sub-menu" id="sub-menu-2"> ' +
    '<ul class="sub-menu-list"> ' +
    '<li><a href="purchase-order.html">采购订单</a></li> ' +
    '<li><a href="purchase-in-depot.html">采购入库</a></li> ' +
    '<li><a href="purchase-info.html">采购查询</a></li> ' +
    '<li><a href="purchase-return.html">采购退货</a></li> ' +
    '</ul> ' +
    '</div> ' +
    '</li> ' +
    '<li class="drop-link" id="sidebar-item-3"> ' +
    '<a class="sidebar-item-heading" href="javascript:void(0)"><i class="fa fa-money fa-2x sidebar-icon"></i>销售管理<i class="fa fa-angle-down pull-right"></i></a> ' +
    '<div class="sub-menu" id="sub-menu-3"> ' +
    '<ul class="sub-menu-list"> ' +
    '<li><a href="sale-order.html">销售订货</a></li> ' +
    '<li><a href="sale-out-depot.html">销售出库</a></li> ' +
    '<li><a href="sale-info.html">销售查询</a></li> ' +
    '<li><a href="sale-return.html">销售退货</a></li> ' +
    '</ul> ' +
    '</div> ' +
    '</li> ' +
    '<li class="drop-link" id="sidebar-item-4"> ' +
    '<a class="sidebar-item-heading" href="javascript:void(0)"><i class="fa fa-tasks fa-2x sidebar-icon"></i>库存管理<i class="fa fa-angle-down pull-right"></i></a> ' +
    '<div class="sub-menu" id="sub-menu-4"> ' +
    '<ul class="sub-menu-list"> ' +
    '<li><a href="depot-in.html">入库</a></li> ' +
    '<li><a href="depot-out.html">出库</a></li> ' +
    '<li><a href="depot-check.html">库存盘点</a></li> ' +
    '<li><a href="depot-change.html">库存调拨</a></li> ' +
    '<li><a href="detail-depot.html">库存查询</a></li> ' +
    '<li><a href="depot-warning.html">库存警戒</a></li> ' +
    '</ul> ' +
    '</div> ' +
    '</li> ' +
    '<li class="drop-link" id="sidebar-item-5"> ' +
    '<a class="sidebar-item-heading" href="javascript:void(0)"><i class="fa fa-bar-chart fa-2x sidebar-icon"></i>统计分析<i class="fa fa-angle-down pull-right"></i></a> ' +
    '<div class="sub-menu" id="sub-menu-5"> ' +
    '<ul class="sub-menu-list"> ' +
    '<li><a href="detail-purchase.html">采购明细</a></li> ' +
    '<li><a href="detail-sale.html">销售明细</a></li> ' +
    '<li><a href="detail-in-depot.html">入库明细</a></li> ' +
    '<li><a href="detail-out-depot.html">出库明细</a></li> ' +
    '<li><a href="detail-depot.html">库存汇总</a></li> ' +
    '</ul> ' +
    '</div> ' +
    '</li> ' +
    '<li class="drop-link" id="sidebar-item-6"> ' +
    '<a class="sidebar-item-heading" href="javascript:void(0)"><i class="fa fa-cog fa-2x sidebar-icon"></i>系统管理<i class="fa fa-angle-down pull-right"></i></a> ' +
    '<div class="sub-menu" id="sub-menu-6"> ' +
    '<ul class="sub-menu-list"> ' +
    '<li><a href="setting-operation.html">操作记录</a></li> ' +
    '<li><a href="">参数设置</a></li> ' +
    '<li><a href="setting-permission.html">权限设置</a></li> ' +
    '<li><a href="setting-password.html">修改密码</a></li> ' +
    '</ul> ' +
    '</div> ' +
    '</li> ' +
    '</ul> ' +
    '</div>');



$(document).ready(function () {
    $("#sidebar-item-1").click(function () {
        $("#sub-menu-1").slideToggle(500, function () {
            $("#sidebar-item-1").toggleClass('drop-active');
            $("#sidebar-item-1").children(":first").toggleClass("drop-active");
        });
    });
    $("#sidebar-item-2").click(function () {
        $("#sub-menu-2").slideToggle(500, function () {
            $("#sidebar-item-2").toggleClass('drop-active');
            $("#sidebar-item-2").children(":first").toggleClass("drop-active");
        });
    });
    $("#sidebar-item-3").click(function () {
        $("#sub-menu-3").slideToggle(500, function () {
            $("#sidebar-item-3").toggleClass('drop-active');
            $("#sidebar-item-3").children(":first").toggleClass("drop-active");
        });
    });
    $("#sidebar-item-4").click(function () {
        $("#sub-menu-4").slideToggle(500, function () {
            $("#sidebar-item-4").toggleClass('drop-active');
            $("#sidebar-item-4").children(":first").toggleClass("drop-active");
        });
    });
    $("#sidebar-item-5").click(function () {
        $("#sub-menu-5").slideToggle(500, function () {
            $("#sidebar-item-5").toggleClass('drop-active');
            $("#sidebar-item-5").children(":first").toggleClass("drop-active");
        });
    });
    $("#sidebar-item-6").click(function () {
        $("#sub-menu-6").slideToggle(500, function () {
            $("#sidebar-item-6").toggleClass('drop-active');
            $("#sidebar-item-6").children(":first").toggleClass("drop-active");
        });
    });

    $(".invoicing-sidebar").css("min-height", document.body.scrollHeight+'px');

    $('#save-button').click(function (e) {
        e.preventDefault();
        swal({
            title: '确认保存吗?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确认保存",
            cancelButtonText: '点错了'
        }, function () {
            var form = $('form[ajax-url]');
            var url = form.attr('ajax-url');
            if (!url) {
                swal("系统错误","请联系管理员，url参数错误","error");
            } else {
                var data = form.serialize();
                console.log(data);
                $.ajax({
                    url: url,
                    data: data,
                    type: 'post',
                    dataType: 'json',
                    cache: false,
                    success: function (data) {
                        if (data.errcode) {
                            alert('操作失败');
                        } else {
                            alert('操作成功');
                        }
                    },
                    error: function (e) {
                        alert('未知错误');
                        console.log(e.responseText);
                    }
                })
            }
        })
    });

    

    function isEmpty(e)
    {
        if (typeof(e) == 'undefined' ) {
            return true;
        } else if (typeof(e) != "object" ) {
            return true;
        } else if (!e) {
            return true;
        }

        return false;
    }
});

function initEditData(url,data) {
    $.ajax({
        url: url,
        data: data,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if (data.errcode) {
                swal("系统错误","信息初始化失败","error");
            } else {
                var info = data.data;
                for (var i in info) {
                    $('[name='+ i +']').val(info[i]);
                }
            }
        },
        error: function (e) {
            swal("未知错误","请联系管理","error");
            console.log(e.responseText);
        }
    })
}

function getUserInfo(url,callback) {
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error: function (e) {
            swal("未知错误","请联系管理员","error");
            console.log(e.responseText);
        }
    })
}

function getListData(url,callback,data='') {
    $.ajax({
        url: url,
        data: data,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error: function (e) {
            swal("未知错误","请联系管理员","error");
            console.log(e.responseText);
        }
    })
}


