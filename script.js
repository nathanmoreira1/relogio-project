/* Selecionar os elementos que vamos usar */
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

/* Função que atualiza o horario */
function updateClock() {
    let now = new Date(); 
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (minute<10) {
        if (second<10) {
            digitalElement.innerHTML = `${hour}:${'0'+minute}:${'0'+second}`
        }
        else {
            digitalElement.innerHTML = `${hour}:${'0'+minute}:${second}`
        }
    }
    else {
        if (second<10) {
            digitalElement.innerHTML = `${hour}:${minute}:${'0'+second}`
        }
        else {
            digitalElement.innerHTML = `${hour}:${minute}:${second}`
        }
    }

    /* Atualizar o ponteiro dos segundos */
    let sDeg = ((360/60) * second) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;

    /* Atualizar o ponteiro dos minutos */
    let mDeg = ((360/60) * minute) - 90;
    mElement.style.transform = `rotate(${mDeg}deg)`;

    /* Atualizar o ponteiro das horas */
    let hDeg = ((360/12) * hour) - 90;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

/* Colocar ela pra rodar de 1 em 1 segundo */
setInterval(updateClock, 1000);

/* Chamar ela uma vez para retirar o delay de 1s ao entrar na página */
updateClock();