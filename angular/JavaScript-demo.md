#### 双向数据绑定

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>双向数据绑定</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
    </style>
</head>

<body>
    <div id="app">
        <div>
            <input type="text" value="" l-model="msg">
            <input type="text" value="" l-model="name">
        </div>
        <input type="text" l-model="age"> {{name}} {{age}}
        <div>
            <h3>{{msg}}:{{name}}</h3>
        </div>
        <h3>{{name}}</h3>
         {{age}}
    </div>

    <script>
      	/*
      	思路：
      	（1）将#app下的子元素都放在文档碎片fragment中，之后通过遍历函数对#app下的子元素进行操作，最后ele.appendChild(fragment);将文档碎片中的内容都呈现出来
      	（2）在bind函数中，需要对fragment.childNodes进行操作；
      	+ 首先获得元素节点和文本节点
      	+ 其次确定元素节点和文本节点，将元素节点和文本节点中内容都为name的存放在元素节点对应的对象里面，同理，将age也进行存放
      	+ 在存放的过程中要进行递归操作，将所有后代节点都找到
      	+ 最后进行绑定事件 update setValue操作
      	*/
        //{{name}} {{age}}
        var msg = 'hello',
            age = 23,
            name = 'frewen';
        let reg = /\{\{([^}]*)\}\}/g; //匹配大括号{{}}
        let obj = {
            name: new Viewmodel('frewen'),
            age: new Viewmodel(30)
        }

        // name:{value:'frewen',nodelist:[input,{{}}]}
        function Viewmodel(data) {
            this.value = data;
            this.nodelist = [];
        }
        Viewmodel.prototype.bindNode = function(node) {
            this.nodelist.push(node);
        }
        Viewmodel.prototype.update = function() {
            this.nodelist.forEach((node) => {
                if (node.nodeType == 1) {
                    node.value = this.value;
                } else {
                    node.textContent = node.yuan.replace(reg, function() { // 一定要改变
                        return obj[arguments[1]].value; // 分别找到name和age的value
                    });
                }
            })
        }
        Viewmodel.prototype.setValue = function(value){
            this.value = value;
            this.update();
        }

        function bind(e) {
            let ele = document.querySelector(e);
            // 创建文档碎片
            let fragment = document.createDocumentFragment();
            // console.log(document.nodeType);
            // 文档碎片中缓存节点
            let child = null;
            while (child = ele.firstChild) {
                fragment.appendChild(ele.firstChild)
            }
            // Array.from().forEach()
            // 遍历节点
            function search(fragment) {
                [...fragment.childNodes].forEach(node => {
                    if (node.nodeType == 1) { //如果是元素节点
                        [...node.attributes].forEach(attr => { //遍历节点属性，判断是否含有l-model
                            let {name,value} = attr; 
                          //attr是属性节点，是节点就是个对象，有狠多属性，拿name和value属性
                            if (name.includes('l-model')) {
                                obj[value] = new Viewmodel(window[value]);
                                obj[value].bindNode(node); // 找到元素节点，把所对应的内容加到对应的对象Viewmodel上
                                node.addEventListener('input',()=>{
                                    obj[value].setValue(node.value);
                                },false)
                            }
                        });
                    }
                    if (node.childNodes.length) {
                        search(node);
                    }
                    if (node.nodeType == 3 && reg.test(node.textContent)) {
                        node.textContent.replace(reg, function() {
                            //console.log(arguments);
                            node.yuan = node.textContent;
                            obj[arguments[1]].bindNode(node);
                        });
                    }
                })
            }
            search(fragment);
            Object.keys(obj).forEach((key) => {
                obj[key].update();
            })
            ele.appendChild(fragment);
        }
        bind('#app');
    </script>
</body>

</html>
```

#### 百度搜索

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>百度搜索</title>
</head>

<body>
    <input type="text" id="inp" />
    <ul id="list">

    </ul>
    <!--跨域的方法 jsonp cors postMessage webScoket-->
    <script>
      /*
      思路：
      （1）获取对应的input输入框和对应的list ul列表
      （2）对输入框绑定input监听事件，执行promise对象的then方法（then方法主要执行innerHTML的工作）
      （3）jsonp是一个函数，函数的功能是将url和data和fn连接起来 创建 script标签对src属性进行改变
      */
        // $.ajax({
        //     url: '',
        //     data: {},
        //     success: () => {}
        // })
        let ul = document.querySelector('#list'),
            inp = document.querySelector('#inp');
        // 绑定事件
        inp.addEventListener('input', function() {
            jsonp({
                url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
                data: {wd: this.value},
                cb: 'fn'
            }).then((d) => {
                ul.innerHTML = '';
                d.s.length && d.s.forEach((ele) => {
                    ul.innerHTML += `<li>${ele}</li>`;
                });
            })
        }, false);

        function jsonp({url,data,cb}) {
            return new Promise((resolve,reject)=>{
                let script = document.createElement('script'),
                    arr = [];
                window[cb] = function (d) {
                    resolve(d);
                };
                data = {...data,cb};
                Object.keys(data).forEach((key)=>{
                    arr.push(`${key}=${data[key]}`);
                })
                script.src = `${url}?${arr.join('&')}`;
                document.body.appendChild(script);
            });
        }
    </script>
    <!-- <script src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=fn"></script> -->
</body>

</html>
```

