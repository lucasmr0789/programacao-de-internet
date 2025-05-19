function ex3() {
  let saldo = parseFloat(document.getElementById('saldo').value);
  if (isNaN(saldo)) {
    document.getElementById('res3').innerText = "Digite um valor válido!";
    return;
  }
  let novoSaldo = saldo * 1.01;
  document.getElementById('res3').innerText = "Novo saldo com 1% de reajuste: R$ " + novoSaldo.toFixed(2);
}