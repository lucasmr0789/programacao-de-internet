function ex5() {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('res5').innerText = "Digite dois números válidos.";
    return;
  }

  if (a > b) {
    document.getElementById('res5').innerText = "O maior valor é: " + a;
  } else if (b > a) {
    document.getElementById('res5').innerText = "O maior valor é: " + b;
  } else {
    document.getElementById('res5').innerText = "Os valores são iguais.";
  }
}