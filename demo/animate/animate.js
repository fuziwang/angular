function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        var isStop = true;
        for (var attr in json) {
            var now = 0;
            if (attr == 'opacity') {
                now = parseInt(getStyle(obj, attr) * 100);
            } else {
                now = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - now) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            var current = now + speed;
            if (attr == 'opacity') {
                box.style[attr] = current / 100;
            } else {
                box.style[attr] = current + 'px';
            }
            if (json[attr] !== current) {
                isStop = false;
            } // 只要有一个没有到，就不可以clear
        }
        if (isStop) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30)
}