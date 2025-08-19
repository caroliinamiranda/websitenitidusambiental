var radio = document.querySelector('.manual-btn');
var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    nextImg()
}, 5000);

function nextImg(){
    cont++

    if(cont > 3){
        cont = 1;
    }

    document.getElementById('radio'+cont).checked = true;
}

var msgCookies = document.getElementById('cookies-msg');

function aceito(){
    localStorage.lgpd = "sim";
    msgCookies.classList.remove('mostrar');
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar');
}else{
    msgCookies.classList.add('mostrar');
}
