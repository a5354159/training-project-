# ʵѵday1
1.  �����es5��ʵ��const/let ԭ��?
   
######     ��ʹ�ö���������������Object.defineProperty��
#####  ���������������֣�
- ����������������ֵ������
- ��ȡ����������getter��setter����������������
##### ���������ܣ�
######     �������������ȡ�������Կ��޸�:
    
- configurable����ǰ����Ԫ�ص������������Ƿ�ɸģ��Ƿ��ɾ��
- enumerable����ǰ����Ԫ���Ƿ��ö��
###### Ψ�����������������޸ģ�
- value: ��ǰ����Ԫ�ص�ֵ
- writable����ǰ����Ԫ�ص�ֵ�Ƿ���޸�
###### �������£�
```
var __const = function __const (data, value) {
        window.data = value // ��Ҫ�����data���ص�window�£�����ֵvalue
        Object.defineProperty(window, data, { // ����Object.defineProperty�������ٳֵ�ǰ���󣬲��޸�������������
          enumerable: false,
          configurable: false,
          get: function () {
            return value
          },
          set: function (data) {
            if (data !== value) { // ��Ҫ�Ե�ǰ���Խ��и�ֵʱ�����׳�����
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
      for (let item in window) { // ��Ϊconst�����������global��Ҳ�ǲ����ڵģ������õ���enumerable: false��ģ����һ����
        if (item === 'a') { // ��Ϊ����ö�٣����Բ�ִ��
          console.log(window[item])
        }
      }
      a = 20 // ����
```
##### ��ô const �Ѿ�ʵ���� let�أ�
######     ͬ�� ��Ϊlet��������������� ��ô�������ʵ�ֵ��� �����ȿ���es6������ԭ�� �������£�
    
```
{
  var a = 1;
  let b = 2;
}

console.log(a);
console.log(b);
```
#### ���ǵõ��Ľ����ͼ����ʾ��
![image](https://upload-images.jianshu.io/upload_images/3145898-2e19e720b8a2cf7b.png)
<html>
<p>Ҳ����˵��var�����ı������ڲ����ڿ鼶���������Կ�����ȫ�ֻ����е��ã���let�����ı������ڴ��ڿ鼶���������Բ�����ȫ�ֻ����е��á�</p>
<p>�����ϵķ�����֪�����ǿ���ͨ��ģ��鼶��������ʵ��let���������£�</p>
</html>

```
function outputNum(count){
//�鼶������
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
###### ���ǿ��Կ���ͨ��ʹ������ִ�к���������iֻ����forѭ�����������ж��壬ѭ��һ������������i�ͻᱻ���٣�ѭ������ͷ��ʲ�������i�ˡ�
2. prorex ʵ�֣�

        ������һ�����캯�� ����˵��Ҳ��һ������
        ��һ������������ֱ��ǣ�
            handler���������壨traps����ռλ������
            traps���ṩ���Է��ʵķ������������ڲ���ϵͳ�в������ĸ��
            target���������⻯�Ķ�����ͨ����������Ĵ洢��ˡ�����Ŀ����֤���ڶ��󲻿���չ�Ի򲻿��������ԵĲ����������ֲ�������壩��

#     �﷨
>  let p = new Proxy(target, handler);
##### ������
- target
 ��Proxy��װ��Ŀ����󣨿������κ����͵Ķ��󣬰���ԭ�����飬������������һ��������
- handler
һ�������������ǵ�ִ��һ������ʱ����������Ϊ�ĺ�����


