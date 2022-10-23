function definirHoras() {
    var horas = new Date().getHours()
    var minutos = new Date().getMinutes()
    var segundos = new Date().getSeconds()

    // console.log(`${horas}:${minutos}:${segundos}`) -> mostrando no console para verificar as horas, os minutos e os segundos. Assim, consigo ver se as horas, os minutos e os segundos batem com os respectivos dados atuais e reais. No caso, deu certo!

    // h = horas.
    var h = document.getElementById("hours").innerHTML = horas
    // m = minutos.
    var m = document.getElementById("minutes").innerHTML = minutos
    // s = segundos.
    var s = document.getElementById("seconds").innerHTML = segundos
}

// definirHoras() -> chamei a função para executar a função e mostrar os dados quando fiz o teste no console.

var intervalo = setInterval(definirHoras, 1000)