function aceleracao(x) {
    return (
        -0.0000000373088 * x ** 11 +
        0.0000068281472 * x ** 10 -
        0.0005539316612 * x ** 9 +
        0.026222750588 * x ** 8 -
        0.8022558829358 * x ** 7 +
        16.5881137119785 * x ** 6 -
        235.3222083571951 * x ** 5 +
        2274.6605485782375 * x ** 4 -
        14539.003318690482 * x ** 3 +
        57644.14658773901 * x ** 2 -
        124251.97657014523 * x +
        104249.07756688114
    );
}

function velocidade(x) {
    return (
        -0.0000000031091 * x ** 12 +
        0.0000006207407 * x ** 11 -
        0.0000553931661 * x ** 10 +
        0.0029136389542 * x ** 9 -
        0.100281985367 * x ** 8 +
        2.3697305302826 * x ** 7 -
        39.2203680595325 * x ** 6 +
        454.9321097156475 * x ** 5 -
        3634.7508296726205 * x ** 4 +
        19214.715529246336 * x ** 3 -
        62125.98828507261 * x ** 2 +
        104249.07756688114 * x -
        57705.67292715436
    );
}

function integrarSimpson(func, a, b, n) {
    if (n % 2 !== 0) throw "n deve ser par";
    const h = (b - a) / n;
    let soma = func(a) + func(b);
    for (let i = 1; i < n; i++) {
        const xi = a + i * h;
        if (i % 2 === 0) {
            soma += 2 * func(xi); // índices pares recebem peso 2
        } else {
            soma += 4 * func(xi); // índices ímpares recebem peso 4
        }
    }
    return soma * (h / 3);

}

function calcular() {
    const n = parseInt(document.getElementById("n").value);
    const a = 0;
    const b = 30;
    const casas_decimais = 6;
    const valorGeogebraAcel = 1837.575298770651;  // valor exato da aceleração (Geogebra)
    const valorGeogebraVel = -1377.663442850666;  // valor exato da velocidade (Geogebra)

    try {
        const integralAcel = integrarSimpson(aceleracao, a, b, n);
        const mediaAcel = integralAcel / (b - a);

        const integralVel = integrarSimpson(velocidade, a, b, n);
        const mediaVel = integralVel / (b - a);


        const erroAcel = mediaAcel - valorGeogebraAcel;
        const erroVel = mediaVel - valorGeogebraVel;
        document.getElementById("resultado").innerHTML = `
            <strong>Intervalo de tempo:</strong> de ${a} até ${b} [a, b]<br>
            <strong>Subdivisões:</strong> ${n}<br><br><hr>
            <strong>Média da Aceleração:</strong> ${mediaAcel.toFixed(casas_decimais)} m/s²<br>
            <strong>Erro:</strong> ${erroAcel.toFixed(casas_decimais)}<br><hr>
            <strong>Média da Velocidade:</strong> ${mediaVel.toFixed(casas_decimais)} m/s<br>
            <strong>Erro:</strong> ${erroVel.toFixed(casas_decimais)}
        `;
    } catch (e) {
        document.getElementById("resultado").innerHTML = `<span style="color: red;">Erro: ${e}</span>`;
    }
}
