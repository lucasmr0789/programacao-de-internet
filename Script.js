function ex7() {
  let fixo = parseFloat(document.getElementById('fixo').value);
  let vendas = parseFloat(document.getElementById('vendas').value);

  if (isNaN(fixo) || isNaN(vendas)) {
    document.getElementById('res7').innerText = "Preencha os dois campos corretamente.";
    return;
  }

  let comissao = vendas * 0.04;
  let salarioFinal = fixo + comissao;

  document.getElementById('res7').innerText =
    "Comissão: R$ " + comissao.toFixed(2) +
    "\nSalário final: R$ " + salarioFinal.toFixed(2);
}