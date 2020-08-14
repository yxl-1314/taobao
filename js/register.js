let flag
$('.btn').click(function() {
    let userVal = $('#userName').val()
    let passVal = $('#passWord').val()
    if(userVal === '') {
        $('.hint').html('账号不能为空').css({'color':'red' , 'font-weight' : '700'})
        return
    }else if(passVal === '') {
        $('.hint').html('密码不为空').css({'color':'red' , 'font-weight' : '700'})
        return
    }else {
        $('.hint').html('')
        flag = true
    }
})


var sliding_validation = SlidingValidation.create($('.verification'), {
    slide_block_wrapper_width: "310px",
    // 滑动成功后 滑动进度的背景颜色
    success_url_icon: "../images/ok.png", 
    // 默认滑块上面的url地址
    default_url_icon: "../images/right-arrow.png",  
}, function() {
    // 滑动成功之后的操作
    if(flag === false) {
        return
    }
    $.ajax({
        url:''
    })
})

