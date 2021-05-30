 document.addEventListener('DOMContentLoaded',function(){
//1.获取元素
var text = document.querySelector('#text');
var btn = document.querySelector('button');
var ul = document.querySelector('#liuyan');
var appreant = ul.children;

//2.注册事件
btn.onclick = function () {
    if (text.value == '') {
        alert('请输入内容');
        return false;
    } else {
        var li = document.createElement('li');
        li.innerHTML = text.value;
        ul.insertBefore(li, appreant[0]);
        text.value = '';
    }
}
 })
 