//钟表的js-----------------------------------------------------------------
document.addEventListener('DOMContentLoaded',function(){
    var hour = document.querySelector('.hr');
    var second = document.querySelector('.ss');
    var minute = document.querySelector('.min')
    function dialtime () {
        var now= new Date ();
        var Second = now.getSeconds();
        var Minute = now.getMinutes();
        var Hour = now.getHours();

        hour.style.transform = 'rotate(' + (Hour + Minute / 60) * 30 + 'deg)';
        minute.style.transform = 'rotate(' + (Minute + Second / 60) * 6 + 'deg)';
        second.style.transform = 'rotate(' + (Second) * 6 + 'deg)';
    }
    dialtime ();
    setInterval(dialtime, 1000)})
   

