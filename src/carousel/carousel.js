// 获取元素
var pic = document.querySelector('#pic'),
    img = document.getElementsByTagName('img'),
    li = document.getElementsByTagName('li'),
    btnleft = document.querySelector('.btn-left'),
    btnright = document.querySelector('.btn-right'),
    count = 0, // 跑动的计数
    isgo = false, // 判断动画执行的方向
    timer; // 定义时间
// 定义计时器 控制图片移动
autoplay();

function listyle() {
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#ccc";
    }
    li[count].style.backgroundColor = "red";
}

function autoplay() {
    timer = setInterval(function() {
        if (isgo == false) {
            count++;
            pic.style.transform = "translate(" + (-972) * count + "px)";
            if (count >= img.length - 1) {
                count = img.length - 1;
                isgo = true;
            }
        } else {
            count--;
            pic.style.transform = "translate(" + (-972) * count + "px)";
            if (count <= 0) {
                count = 0;
                isgo = false;
            }
        }
        listyle();
    }, 4000);
}
// 鼠标停在按钮时的操作
for (var i = 0; i < li.length; i++) {
    li[i].index = i; // 添加标识
    li[i].onmouseover = function() {
        clearInterval(timer);
        if (this.index == 4) {
            isgo = true;
        }
        if (this.index == 0) {
            isgo = false;
        }
        count = this.index;
        listyle();
        pic.style.transform = "translate(" + (-972) * this.index + "px)";
    }
    li[i].onmouseout = function() {
        autoplay();
    }
}
// 鼠标停在箭头时的操作
btnleft.onmouseover = function() {
    clearInterval(timer);
}
btnright.onmouseover = function() {
    clearInterval(timer);
}
btnleft.onmouseout = function() {
    autoplay();
}
btnright.onmouseout = function() {
    autoplay();
}
btnleft.onclick = function() {
    count--;
    if (count < 0) {
        count = 4;
    }
    listyle();
    pic.style.transform = "translate(" + (-972) * count + "px)";
}
btnright.onclick = function() {
    count++;
    if (count > 4) {
        count = 0;
    }
    listyle();
    pic.style.transform = "translate(" + (-972) * count + "px)";
}