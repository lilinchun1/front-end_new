/**
 * Created by 闫继鹏 on 2014/12/2.
 */
function teambug_num_input(teambug_num_input){
    var c=$(teambug_num_input);
    if(/[^\d]/.test(c.val())){//替换非数字字符
        var temp_amount=c.val().replace(/[^\d]/g,'');
        $(teambug_num_input).val(temp_amount);
    }
    check_stock(c);//检查库存方法
}

//检查库存方法
function check_stock(teambug_num_input){
    var c=$(teambug_num_input);//获取团购数量
    var stock_num=parseInt($("#stock_num").text());//获取静态库存数量
    if(c.val()>stock_num){
        alert("超过库存");
        $(teambug_num_input).val(stock_num);
    }
}