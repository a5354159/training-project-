# 实训day1
1.  如何在es5中实现const/let 原理?
   
######     答：使用对象属性描述符（Object.defineProperty）
#####  属性描述符有两种：
- 数据描述符：具有值的属性
- 存取描述符：由getter与setter函数对描述的属性
##### 描述符功能：
######     数据描述符与存取描述符皆可修改:
    
- configurable：当前对象元素的属性描述符是否可改，是否可删除
- enumerable：当前对象元素是否可枚举
###### 唯有数据描述符可以修改：
- value: 当前对象元素的值
- writable：当前对象元素的值是否可修改
###### 代码如下：
```
var __const = function __const (data, value) {
        window.data = value // 把要定义的data挂载到window下，并赋值value
        Object.defineProperty(window, data, { // 利用Object.defineProperty的能力劫持当前对象，并修改其属性描述符
          enumerable: false,
          configurable: false,
          get: function () {
            return value
          },
          set: function (data) {
            if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！
              throw new TypeError('Assignment to constant variable.')
            } else {
              return value
            }
          }
        })
      }
      __const('a', 10)
      console.log(a)
      delete a
      console.log(a)
      for (let item in window) { // 因为const定义的属性在global下也是不存在的，所以用到了enumerable: false来模拟这一功能
        if (item === 'a') { // 因为不可枚举，所以不执行
          console.log(window[item])
        }
      }
      a = 20 // 报错
```
##### 那么 const 已经实现了 let呢？
######     同理 因为let是有作用域问题的 那么它是如何实现的哪 首先先看下es6中它的原理 代码如下：
    
```
{
  var a = 1;
  let b = 2;
}

console.log(a);
console.log(b);
```
#### 我们得到的结果如图下所示：
![image](https://upload-images.jianshu.io/upload_images/3145898-2e19e720b8a2cf7b.png)
<html>
<p>也就是说，var声明的变量由于不存在块级作用域所以可以在全局环境中调用，而let声明的变量由于存在块级作用域所以不能在全局环境中调用。</p>
<p>由以上的分析可知，我们可以通过模拟块级作用域来实现let。代码如下：</p>
</html>

```
function outputNum(count){
//块级作用域
  (function(){
    for(var i = 0; i < count; i ++){
      console.log(i)
    }
  })();
  console.log(i)
}

outputNum(5)             
```
![image](https://upload-images.jianshu.io/upload_images/3145898-58bf167153bf21ff.png)
###### 我们可以看到通过使用立即执行函数，变量i只会在for循环的语句块中有定义，循环一旦结束，变量i就会被销毁，循环外面就访问不到变量i了。
2. prorex 实现？

        答：他是一个构造函数 所以说它也是一个对象
        他一共有三个术语，分别是：
            handler：包含陷阱（traps）的占位符对象。
            traps：提供属性访问的方法。这类似于操作系统中捕获器的概念。
            target：代理虚拟化的对象。它通常用作代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。

#     语法
>  let p = new Proxy(target, handler);
##### 参数：
- target
 用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
- handler
一个对象，其属性是当执行一个操作时定义代理的行为的函数。


