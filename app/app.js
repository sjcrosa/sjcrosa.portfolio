function homeClick() {
    var x = document.getElementById('homeSection');
    var y = document.getElementById('aboutSection');
    var z = document.getElementById('contactSection');
    var a = document.getElementById('btnHome');
    var b = document.getElementById('btnAbout');
    var c = document.getElementById('btnContact');
    x.style.opacity = '1';
    y.style.opacity = '0';
    z.style.opacity = '0';
    a.style.opacity = '1';
    b.style.opacity = '0.5';
    c.style.opacity = '0.5';
}

function aboutClick() {
    var x = document.getElementById('homeSection');
    var y = document.getElementById('aboutSection');
    var z = document.getElementById('contactSection');
    var a = document.getElementById('btnHome');
    var b = document.getElementById('btnAbout');
    var c = document.getElementById('btnContact');
    x.style.opacity = '0';
    y.style.opacity = '1';
    z.style.opacity = '0';
    a.style.opacity = '0.5';
    b.style.opacity = '1';
    c.style.opacity = '0.5';
}
function contactClick() {
    var x = document.getElementById('homeSection');
    var y = document.getElementById('aboutSection');
    var z = document.getElementById('contactSection');
    var a = document.getElementById('btnHome');
    var b = document.getElementById('btnAbout');
    var c = document.getElementById('btnContact');
    x.style.opacity = '0';
    y.style.opacity = '0';
    z.style.opacity = '1';
    a.style.opacity = '0.5';
    b.style.opacity = '0.5';
    c.style.opacity = '1';
}