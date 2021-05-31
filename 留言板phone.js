  //1.获取元素
  var text = document.querySelector('#text');
  var btn = document.querySelector('button');
  var showtext=document.querySelector('.showtext');
  var ultext=showtext.children[0];
  var appreant = ultext.children;

  //2.注册事件
  btn.onclick = function () {
      if (text.value == '') {
          alert('请输入内容');
          return false;
      } else {
          var litext = document.createElement('li');
          litext.innerHTML = text.value;
          ultext.insertBefore(litext, appreant[0]);
          text.value = '';
      }
  }