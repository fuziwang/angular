import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
class Study{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number,
        public info:string,
        public src:string
    ){}
}
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number){

    }
}
class Community{
    constructor(
        public id:number,
        public img:string,
        public title:string,
        public images:string,
        public info:string,
        public author:string,
        public time:string,
        public read:number,
        public commit:number
    ){}
}
class Discuss {
    constructor(public title: string, public person: string) { }
}
const course = [
    new Course(1,'2016级混合应用','http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',2,97),
    new Course(2,'2017-12-软件测试基础','http://www.edu2act.net//static/img/course.png',1,104),
    new Course(3,'2017级web开发（二）', 'http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130', 3, 399),
    new Course(4, '2016级测试方向-web系统测试', 'http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130', 3, 52),
    new Course(5, '2016级HTM5与CSS3前端方向', 'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130', 4, 91),
    new Course(6, '2017级3、4班软件测试基础', 'http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130', 2, 103),
    new Course(7, '2018级信息素养实践', 'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130', 0, 12),
    new Course(8, '2018级计算机导论', 'http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130', 1, 393),
    new Course(9, '2018-2019面向对象程序设计', 'http://www.edu2act.net//static/img/course.png', 4, 400),
    new Course(10, '2017级数据结构', 'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130', 3, 401),
    new Course(11, '2016级面向对象程序设计(C++)', 'http://usercontent.edu2act.cn/media/team/17-09-14/wFmfsk8VswjGQtzimbK2EE.png?imageView2/1/w/230/h/130', 0, 12),
    new Course(12, '2016级数据库系统概论', 'http://usercontent.edu2act.cn/media/team/18-02-26/QMXWNRHDsraTaVofSiRCbF.png?imageView2/1/w/230/h/130', 0, 12),
]

const study = [
    new Study(1, 'Github 开源之旅视频课程', 'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190', 14, 3734, 
        '完成本课程之后，能够达到以下目标：- 实名注册 Github 账户 - 能够在 Github 上搜索资料等','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4' ),
    new Study(2,'CSS3基础','http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190',12,2315,
        'CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(3, 'HTML5基础', 'http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190', 12, 1310, 
        'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(4,'Selenium IDEWEB自动化测试','http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190',13,3794,
        '对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE...','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(5, '扩展的ICONIX软件过程实践','http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190',12,2269,
        'ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(6, '自动化测试入门视频课程','http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190',11,3131,
        '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(7, '网页制作与开发', 'http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190', 42, 1572,
        '本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(8, '产品&交互设计那些事儿', 'http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190', 5, 1083,
        '本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(9, 'VR AR产品设计的思考视频课程', 'http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190', 3, 4335,
        '“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(10, 'ProcessOn界面原型绘制', 'http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190', 2, 4233,
        'ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。本次课程主要介绍','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(11, 'ProcessOn绘制流程图', 'http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190', 4, 3053,
        '绘制流程图是在产品设计过程中需求调研阶段非常重要的手段。研究中最重要的方法','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(12, '项目管理平台Redmine', 'http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190', 8, 4423,
        '本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用户使用，和其他同类型平台','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4')
]

const community = [
    new Community(1, 'http://www.edu2act.net/static/img/m.png', 'WEB开发（二）—— 函数','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
    '（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。',
    '刘秀梅','2018-10-11 15:10',698,72),
    new Community(2, 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', '类定义关键字详解', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg',
    'JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来',
    '3-张馨元', '2018-10-09 19:21', 23, 0),
    new Community(3, 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', ' 一个java文件中可包含多个main方法', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg',
    '一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方',
    '3-张馨元', '2018-10-09 19:17', 21, 2),
    new Community(4, 'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256', '数据结构——线性表的经典应用', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
    '1. 一元多项式的表示和相加 在数学上，一个一元多项式(P_{n}(x))可升序写成：(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n)它由n+1个系数唯一',
    '杨伟彬', '2018-10-08 14:28', 30, 0),
    new Community(5, 'http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256', '栈和队列之间的相互转化', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg',
    '队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元',
    '7-李建涛', '2018-10-01 12:51', 44, 2),
    new Community(6, 'http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256', 'JavaScript event（事件对象）', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
    '在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相',
    '刘孟祎', '2018-09-28 09:40', 43, 0)
]

const discuss = [
    new Discuss('# 2015级程序设计基 ... #', '6万'),
    new Discuss('# 2015级面向对象程 ... #', '3万'),
    new Discuss('# cms与模板制作 #', '3万'),
    new Discuss('# 数据结构 #', '3万'),
    new Discuss('# 数据库原理 #', '2万'),
    new Discuss('# 2015级程序设计基 ... #', '2万'),
    new Discuss('# 2014级PHP程序 ... #', '1万'),
    new Discuss('# Web开发（二）20 ... #', '1万')
]
app.get('/api/course', (req, res) => {
    res.json(course);
});
app.get('/api/course/:id', (req, res) => {
    // req.params 表示请求的是那个id 在下列的res进行判断
    res.json(course.find((ele)=>ele.id == req.params.id));
});

app.get('/api/study',(req,res)=>{
    res.json(study);
})

app.get('/api/study/:id',(req,res)=>{
    res.json(study.find((ele)=>ele.id == req.params.id));
})

app.get('/api/community',(req,res)=>{
    res.json(community);
})

app.get('/api/community/:id',(req,res)=>{
    res.json(community.find((ele)=>ele.id == req.params.id));
})

app.get('/api/discuss',(req,res)=>{
    res.json(discuss);
})
app.listen(8080);