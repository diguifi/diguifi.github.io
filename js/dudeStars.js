let xhttpGet = new XMLHttpRequest();
xhttpGet.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let notas = JSON.parse(this.responseText).result.notas;
        console.log(notas);

        let somaNotas = 0;
        notas.forEach(nota => {
            somaNotas += nota;
        });

        let total = (somaNotas / notas.length).toFixed(1);

        document.getElementById("ratings").innerHTML = total.toString() + '/5';
		document.getElementById("total").innerHTML = notas.length.toString();
    }
};

xhttpGet.open('GET', 'https://www.jsonstore.io/16824c0f7a1696d7acfabe21392bd07d8afcc0ba76cb366ab189dfa94186dc08', true);
xhttpGet.send();