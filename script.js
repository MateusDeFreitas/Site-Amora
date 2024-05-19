function clickmenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("expanded");
}
function mudartamanho() {
    if (window.innerWidth < 968) {
        menu.classList.remove("expanded");
    }
}
function ir() {
    if (s1.style.display == 'block') {
        s1.style.display = 'none'
        s2.style.display = 'none'
        s3.style.display = 'none'
        s4.style.display = 'block'
        s5.style.display = 'block'
        s6.style.display = 'block'
    } else if (s4.style.display == 'block') {
        s4.style.display = 'none'
        s5.style.display = 'none'
        s6.style.display = 'none'
        s7.style.display = 'block'
        s8.style.display = 'block'
        s9.style.display = 'block'
    } else {
        s7.style.display = 'none'
        s8.style.display = 'none'
        s9.style.display = 'none'
        s1.style.display = 'block'
        s2.style.display = 'block'
        s3.style.display = 'block'
    }

}
function voltar() {
    if (s1.style.display == 'block') {
        s1.style.display = 'none'
        s2.style.display = 'none'
        s3.style.display = 'none'
        s7.style.display = 'block'
        s8.style.display = 'block'
        s9.style.display = 'block'
    } else if (s4.style.display == 'block') {
        s4.style.display = 'none'
        s5.style.display = 'none'
        s6.style.display = 'none'
        s1.style.display = 'block'
        s2.style.display = 'block'
        s3.style.display = 'block'
    } else {
        s7.style.display = 'none'
        s8.style.display = 'none'
        s9.style.display = 'none'
        s4.style.display = 'block'
        s5.style.display = 'block'
        s6.style.display = 'block'
    }
}
function irmobile() {
    if (s1m.style.display == 'block') {
        s1m.style.display = 'none'
        s2m.style.display = 'none'
        s3m.style.display = 'block'
        s4m.style.display = 'block'
    } else if (s3m.style.display == 'block') {
        s3m.style.display = 'none'
        s4m.style.display = 'none'
        s5m.style.display = 'block'
        s6m.style.display = 'block'
    } else if (s5m.style.display == 'block') {
        s5m.style.display = 'none'
        s6m.style.display = 'none'
        s7m.style.display = 'block'
        s8m.style.display = 'block'
    } else {
        s7m.style.display = 'none'
        s8m.style.display = 'none'
        s1m.style.display = 'block'
        s2m.style.display = 'block'
    }

}
function voltarmobile() {
    if (s1m.style.display == 'block') {
        s1m.style.display = 'none'
        s2m.style.display = 'none'
        s7m.style.display = 'block'
        s8m.style.display = 'block'
    } else if (s3m.style.display == 'block') {
        s3m.style.display = 'none'
        s4m.style.display = 'none'
        s2m.style.display = 'block'
        s1m.style.display = 'block'
    } else if (s5m.style.display == 'block') {
        s5m.style.display = 'none'
        s6m.style.display = 'none'
        s4m.style.display = 'block'
        s3m.style.display = 'block'
    } else {
        s7m.style.display = 'none'
        s8m.style.display = 'none'
        s6m.style.display = 'block'
        s5m.style.display = 'block'
    }
}
function irmenores() {
    if (s1mm.style.display == 'block') {
        s1mm.style.display = 'none'
        s2mm.style.display = 'block'
    } else if (s2mm.style.display == 'block') {
        s2mm.style.display = 'none'
        s3mm.style.display = 'block'
    } else if (s3mm.style.display == 'block') {
        s3mm.style.display = 'none'
        s4mm.style.display = 'block'
    } else if (s4mm.style.display == 'block') {
        s4mm.style.display = 'none'
        s5mm.style.display = 'block'
    } else if (s5mm.style.display == 'block') {
        s5mm.style.display = 'none'
        s6mm.style.display = 'block'
    } else if (s6mm.style.display == 'block') {
        s6mm.style.display = 'none'
        s7mm.style.display = 'block'
    } else if (s7mm.style.display == 'block') {
        s7mm.style.display = 'none'
        s8mm.style.display = 'block'
    } else if (s8mm.style.display == 'block') {
        s8mm.style.display = 'none'
        s9mm.style.display = 'block'
    } else {
        s9mm.style.display = 'none'
        s1mm.style.display = 'block'
    }
}
function voltarmenores() {
    if (s1mm.style.display == 'block') {
        s1mm.style.display = 'none'
        s9mm.style.display = 'block'
    } else if (s2mm.style.display == 'block') {
        s2mm.style.display = 'none'
        s1mm.style.display = 'block'
    } else if (s3mm.style.display == 'block') {
        s3mm.style.display = 'none'
        s2mm.style.display = 'block'
    } else if (s4mm.style.display == 'block') {
        s4mm.style.display = 'none'
        s3mm.style.display = 'block'
    } else if (s5mm.style.display == 'block') {
        s5mm.style.display = 'none'
        s4mm.style.display = 'block'
    } else if (s6mm.style.display == 'block') {
        s6mm.style.display = 'none'
        s5mm.style.display = 'block'
    } else if (s7mm.style.display == 'block') {
        s7mm.style.display = 'none'
        s6mm.style.display = 'block'
    } else if (s8mm.style.display == 'block') {
        s8mm.style.display = 'none'
        s7mm.style.display = 'block'
    } else {
        s9mm.style.display = 'none'
        s8mm.style.display = 'block'
    }
}