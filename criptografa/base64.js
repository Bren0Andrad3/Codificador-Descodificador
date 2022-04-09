

function capturar (){
    const capturando = document.getElementById('codificar').value;
    const b64 = btoa(capturando);
    document.getElementById('cod').innerHTML = b64;
}

function capturar2(){
    const capturando2 = document.getElementById("descodificar").value;
    const unicode = atob(capturando2);
    document.getElementById('des').innerHTML = unicode;
}

