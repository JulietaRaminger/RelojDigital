function updateClock() {
    let now = new Date();
    let nombreDia = now.getDay(),
        mes = now.getMonth(),
        diaNumero = now.getDate(),
        año = now.getFullYear(),
        hora = now.getHours(),
        minutos = now.getMinutes(),
        segundos = now.getSeconds(),
        periodo = "AM";

    if (hora == 0) {
        hora = 12;
    }
    if (hora > 12) {
        hora = hora - 12;
        periodo = 'PM';
    }

    Number.prototype.rellenarCeros = function (digitos) {
        return String(this).padStart(digitos, '0');
    }

    let meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    let diasSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];
    let ids = [
        "dia",
        "mes",
        "dianum",
        "anio",
        "hora",
        "minutos",
        "segundos",
        "periodo",
    ];
    let valores = [diasSemana[nombreDia], meses[mes], diaNumero.rellenarCeros(2), año, hora.rellenarCeros(2), minutos.rellenarCeros(2), segundos.rellenarCeros(2), periodo];

    for (let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).textContent = valores[i];
}

function iniciarReloj() {
    updateClock(); 
    setInterval(updateClock, 1000); 
}

iniciarReloj(); 