function C() {
    document.calc.textview.value = ''
}

function del() {
    var del = document.calc.textview.value
    document.calc.textview.value = del.substring(0, del.length -1)
}

function satu() {
    document.calc.textview.value += '1'
}

function dua() {
    document.calc.textview.value += '2'
}

function tiga() {
    document.calc.textview.value += '3'
}

function empat() {
    document.calc.textview.value += '4'
}

function lima() {
    document.calc.textview.value += '5'
}

function enam() {
    document.calc.textview.value += '6'
}

function tujuh() {
    document.calc.textview.value += '7'
}

function delapan() {
    document.calc.textview.value += '8'
}

function sembilan() {
    document.calc.textview.value += '9'
}

function nol() {
    document.calc.textview.value += '0'
}

function bagi() {
    document.calc.textview.value += '/'
}

function kali() {
    document.calc.textview.value += '*'
}

function tambah() {
    document.calc.textview.value += '+'
}

function kurang() {
    document.calc.textview.value += '-'
}

function hasil() {
    document.calc.textview.value = eval(document.calc.textview.value)
}

function akar() {
    document.calc.textview.value = Math.sqrt(document.calc.textview.value)
}

function titik() {
    document.calc.textview.value += '.' 
}

function kuadrat() {
    document.calc.textview.value = eval(document.calc.textview.value * document.calc.textview.value)
}

function sin() {
    document.calc.textview.value = Math.sin(document.calc.textview.value)
}

function cos() {
    document.calc.textview.value = Math.cos(document.calc.textview.value)
}

function tan() {
    document.calc.textview.value = Math.tan(document.calc.textview.value)
}

function operator() {
    const operator =  ['+', 'x','/','-']
    return operator.includes(char) 
}

// function gambar() {
//     var gmbr = document.getElementById('gambr');
//     gmb
// }