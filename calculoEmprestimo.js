function calcular() {
  let emprestimo = Number.parseFloat(document.getElementById('emprestimo').value)
  let juros = Number.parseFloat(document.getElementById('juros').value)
  let periodo = Number.parseFloat(document.getElementById("periodo").value)
  
  juros = juros / 100 / 12
  periodo = periodo * 12

  const fator = Math.pow(1 + juros, periodo)
  const prestacao = (emprestimo * fator * juros) / (fator - 1)
  const pagtotal = prestacao * periodo
  const totalJuros = pagtotal - emprestimo
  
  document.getElementById('prestacao').innerText = `R$ ${prestacao.toFixed(2)}`
  document.getElementById('pagtotal').innerText = `R$ ${pagtotal.toFixed(2)}`
  document.getElementById('totaljuros').innerText = `R$ ${totalJuros.toFixed(2)}`
}


