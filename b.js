var start = new Date('2019-10-31T20:30:00');

var e = Elapsed(start);

var b = "<body style='background: black; text-align: center; color: green;'><div</body><div style='height: 100%;position: relative;'><div style='width: 100%; position: absolute;top: 50%;-ms-transform: translateY(-50%);transform: translateY(-50%);'><img style='height: 150' src='https://i.imgur.com/KSwlFiZ.png'/></br>black0tus was here.</br>Time elsapsed: " + e + "</div></div></body>"
document.getElementsByTagName("html")[0].innerHTML= b;

function Elapsed(start)
{
    var _t = "";
    var t = new Date();
    t -= start;
    t /= 1000;

    //seconds
    var s = Math.round(t % 60);
    if (s < 10) s = '0' + s;
    //mins
    t = Math.floor(t / 60);
    var m = Math.round(t % 60);
    if (m < 10) m = '0' + m;
    //hours
    t = Math.floor(t / 60);
    var h = Math.round(t % 24);
    if (h < 10) h = '0' + h;
    //days
    t = Math.floor(t / 24);
    var d = t;

    return d + ":" + h + ":" + m + ":" + s;
}
