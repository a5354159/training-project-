function ajax(opt){
    console.log(opt)
    //创建核心对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest : ActiveXObject('Microsoft.XMLHTTP');
    //建立请求
    xhr.open(opt.type,opt.url,opt.async);
    //接收相应数据
    xhr.onreadystatechange = function(){
        // readyState属性用于获取请求状态
        if(xhr.readyState === 4){//请求完成
            
            //status获取HTTP请求状态码（结果）
            if(xhr.status === 200){//请求成功
                //获取相应数据responseText
                opt.success && opt.success(xhr.responseText)
            }else{//请求失败
                opt.error && opt.error();
            }
        }
    }
    //发送请求
    var data = null;
    xhr.send(data);
    
}