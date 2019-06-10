#### es5实现let   const
属性描述符：writable    默认值是否可写  false 不可写
插件 | 说明
---|---
configurable |  是否可被删除 /false 不可删除
enurmable | 是否可被枚举  /false 不可被枚举
value   |
get|
set|


···

es6 proxy：

    let obj2={a:1}
    proxy = new Proxy(obj2(对象),{
            get(target,key){
                console.log(target,key)
            },
            set(target,key,val){
                console.log(target,key,val)
            }
        })




### promise   Async/await   generator
三种状态:pennding  fulfilled   rejected

    let url=""
    function imgLoad(url){
        return new Promise((resolve,reject)=>{
            let img = new Image();
            img.src=url
            img.onload=function(){
                resolve(img)
            }
            img.onerror=function(e){
                reject(e)
            }
        })
    }

    imgLoad(url).then(res=>{
        document.body.appendChild(res) 
        return res 
    },err=>{
        console.log(err)
    })
// 链式调用 第一个then要有返回值  下面的then才会接收到值







































