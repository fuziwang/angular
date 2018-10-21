### angular demo

+ `todolist` 第一个版本的`todolist` - 通过一个组件进行实现（未通过其他组件进行绑定）


+ `app` 第二个版本的`todolist` 创建三个组件，一个是父组件，在根组件中引入，两个子组件：一个组件是输入框，一个组件里是列表，在父组件中引入，练习父子组件的交互。同时利用服务，将本地存储的方法进行封装，注入到组件（如课上所写代码），功能和todolist官网完全一样。

+ `animate` JavaScript复习：基于百度网盘的animate视频进行了 `animate`函数封装的代码，实现动画效果

  链接：https://pan.baidu.com/s/1F00kDF4igfOQbr9Vscj_8g 
  提取码：nhc6

+ `carousel` 利用animate函数及DOM操作，实现轮播图效果，效果如carousel.gif（未使用animate函数，使用的是css3中的transform属性进行改变）

```javascript
/*
    思路：
        预备：  生成的过程
                定义数据： 和轮播图相关的数据
                图片和点击图片将要跳转的路径
                数据怎么组织？
                //一组数据  一组中每一项 图片和跳转的路径
                [{imgSrc:"01.jpg",targetSrc:"http://www.baidu.com"},{imgSrc:"01.jpg",targetSrc:"http://www.baidu.com"},{imgSrc:"01.jpg",targetSrc:"http://www.baidu.com"}]//JSON
        第一步：当页面加载完后，获取所要操作的节点对象
        第二步：根据数据动态生成轮播图以及控制按钮
        第三步：为每一个控制按钮添加一个鼠标浮动事件onmouseenter
                当前的按钮样式发生变化（acitve），其他的恢复原来样式
                对应的轮播图显示出来（active）,其他的隐藏
        第四步：开启自动轮播
                开启一个定时器，间接性的自动的切换轮播图
        第五步：为包含轮播区域容器lunBo添加一个鼠标浮动事件停止定时器（停止自动轮播）
               为包含轮播区域容器lunBo添加一个鼠标离开事件开启定时器            
*/
```

+ `JavaScript-demo` 记录原生JavaScript实现相应的案例

案例一： 百度搜索（基于`jsonp`）

案例二：双向数据绑定

+ `edu2act` ：模仿“雪梨教育”，利用 angular 和 express 实现[雪梨平台](http://www.edu2act.net/task/list/)。