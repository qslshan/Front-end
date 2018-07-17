function myready(fn) {
    //IE模拟DOMContentLoad
    function IEContentLoaded(fn) {
        var done =false;
        //只执行一次用户的回调函数init（）
        var init=function(){
            if (!done){
                done =true;
                fn();
            }
        };
        //监听document的加载状态
        d.onreadystatechange=function () {
            //如果用户是在domready之后绑定的函数，就立马执行
            if（d.readyState=='complete'）{
                d.onreadystatechange()=null;
                init();
            }
        }

    }
}