var a = 0;
var b = 0;
var m = 5;
var l = 0;
var sr = "";
var srt = "";
var sc = " ";
var sa = "*";
l = gl(m);
play(l);
function play(n) {
    for (a = 0; a < n; a++) {
        for (b = 0; b < n - a; b++) {
            sr = sr + sc;
        }
        for (b = 0; b < 2 * a + 1; b++) {
            srt = srt + sa;
        }
        console.log(sr + srt);
        sr = "";
        srt = "";
    }
}
function gl(l) {
    return l;
}
//# sourceMappingURL=main.js.map