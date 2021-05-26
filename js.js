  
  // 日历的js------------------------------------------------------------------
  addition();

  function addition() {
      var date = new Date();
      var cyear = date.getFullYear();
      var cmonth = date.getMonth();
      var cday = date.getDay();
      var cdate = date.getDate();

      var arr1 = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
      var arr2 = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      document.getElementById("datenow").innerHTML = cdate;
      document.getElementById("daynow").innerHTML = arr1[cday - 1];
      document.getElementById("month").innerHTML = arr2[cmonth];
      document.getElementById("year").innerHTML = cyear + '年';
      let days = new Date(cyear, cmonth + 1, -1).getDate() + 1; //获取当前月的最后一天的日期 ，即当前月有几天；
      let zhou = new Date(cyear, cmonth, 1).getDay(); //第一天星期几
      let html = '';
      var i = 0;
      for (i = 1; i < zhou; i++) {
          html += '<li class="none"></li>';
      };
      for (i = 1; i <= days; i++) {
          if (i == cdate) {
              html += '<li class="now">' + i + '</li>';
          } else html += '<li class="notnow">' + i + '</li>';
      };
      document.getElementById('add').innerHTML = html;
  }


  let date = new Date();
  let cyear = date.getFullYear();
  let cmonth = date.getMonth();
  let cday = date.getDay();
  let cdate = date.getDate();

  document.getElementById('prev').onclick = function () {
      cmonth = cmonth - 1;

      if (cmonth < 0) {
          cyear = cyear - 1;
          cmonth = 11;
      }
      appear();
  }
  document.getElementById('next').onclick = function () {
      cmonth = cmonth + 1;

      if (cmonth > 11) {
          cyear = cyear + 1;
          cmonth = 0;
      }
      appear();
  }

  function appear() {
      var arr1 = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
      var arr2 = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月', ]
      document.getElementById("datenow").innerHTML = cdate;
      document.getElementById("daynow").innerHTML = arr1[cday - 1];
      document.getElementById("month").innerHTML = arr2[cmonth];
      document.getElementById("year").innerHTML = cyear + '年';
      let days = new Date(cyear, cmonth + 1, -1).getDate() + 1; //获取当前月的最后一天的日期 ，即当前月有几天；
      let zhou = new Date(cyear, cmonth, 1).getDay(); //第一天星期几
      let html = '';
      var i = 0;
      for (i = 1; i < zhou; i++) {
          html += '<li class="none"></li>';
      };
      for (i = 1; i <= days; i++) {
          html += '<li class="notnow">' + i + '</li>';
      };
      document.getElementById('add').innerHTML = html;
  }
//   ------------------------------------------------------------------------------
// 倒计时的js-------------------------------------------------------------
setInterval("countdown('2021-6-12 09:00:00')", " 1000"); //每隔1000ms调用一次
function countdown(settime) {
    var nowtime = +new Date();
    var inputtime = +new Date(settime);
   
    var seconds = (inputtime - nowtime) / 1000;

    var d = parseInt(seconds / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    var h = parseInt(seconds / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    var m = parseInt(seconds / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(seconds % 60);
    s = s < 10 ? '0' + s : s;
    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
};
// ------------------------------------------------------------------------------------
  //钟表的js-----------------------------------------------------------------
  var hour = document.querySelector('.hr');
  var second = document.querySelector('.ss');
  var minute = document.querySelector('.min')

  setInterval(function () {
      var now= new Date ();
      var Second = now.getSeconds();
      var Minute = now.getMinutes();
      var Hour = now.getHours();

      hour.style.transform = 'rotate(' + (Hour + Minute / 60) * 30 + 'deg)';
      minute.style.transform = 'rotate(' + (Minute + Second / 60) * 6 + 'deg)';
      second.style.transform = 'rotate(' + (Second) * 6 + 'deg)';
  }, 1000)
