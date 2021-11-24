$(document).ready(function(){
    $("#ipt-account-login1").blur(function(){
        var thisVal=$('.name1').val();
        if(thisVal===""){
            $('.tishi').css({"display":"inline-block"}).html("用户名不能为空!");
            $('.zhanghao1').css({"border":"1px solid red"});
        }else{
            $('.tishi').css({"display":"none"});
            $('.zhanghao1').css({"border":"1px solid #ddd"});
        }
    });
});

$(document).ready(function(){
    $("#ipt-account-login2").blur(function(){
        var thisVal=$('.pass').val();
        var pas=document.getElementById('ipt-account-login2')
        if(thisVal===""){
            $('.tishi').css({"display":"inline-block"}).html("密码长度应为6至32个字符之间!");
            $('.zhanghao2').css({"border":"1px solid red"});
        }else{
            $('.tishi').css({"display":"none"});
            $('.zhanghao2').css({"border":"1px solid #ddd"});
        }
    });
});