var target_date = new Date("april 16, 2022").getTime();
var month, day, hour, minute, second;

setInterval(function () {
    var current_date = new Date().getTime();
    var second_f = (target_date - current_date) / 1000;

    month = parseInt(second_f / 86400) / 30;

    day = parseInt(Number(String(month).substr(0, 1)) * 30.417);
    second_f = second_f % 86400;
    
    hour = parseInt(second_f / 3600);
    second_f = second_f % 3600;
    
    minute = parseInt(second_f / 60);
    second = parseInt(second_f % 60);

    // document.getElementById('month').innerHTML = String(month).substr(0, 1);
    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
}, 1000)