function calcular() {
  const ingresos = parseFloat(document.getElementById('ingresos').value) || 0;
  const gastos = parseFloat(document.getElementById('gastos').value) || 0;
  const meta = parseFloat(document.getElementById('meta').value) || 0;
  const ahorroMensual = ingresos - gastos;
  let mensaje;

  if (ahorroMensual <= 0) {
    mensaje = `No puedes ahorrar, tus gastos igualan o superan tus ingresos.`;
  } else {
    const meses = Math.ceil(meta / ahorroMensual);
    mensaje = `Puedes ahorrar <strong>${ahorroMensual}</strong> al mes. Alcanzarás tu meta en aproximadamente <strong>${meses}</strong> meses.`;
  }

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = mensaje;
  resultadoDiv.style.display = 'block';
}
