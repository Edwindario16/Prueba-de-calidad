function calcularConsumo() {
  const lecturaAnterior = parseFloat(document.getElementById('lecturaAnterior').value);
  const lecturaActual = parseFloat(document.getElementById('lecturaActual').value);
  const tarifa = parseFloat(document.getElementById('tarifa').value);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(lecturaAnterior) || isNaN(lecturaActual) || isNaN(tarifa)) {
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = '<strong>Por favor, completa todos los campos con valores válidos.</strong>';
    return;
  }

  const consumo = lecturaActual - lecturaAnterior;

  if (consumo < 0) {
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = '<strong>Error:</strong> La lectura actual debe ser mayor que la anterior.';
    return;
  }

  const total = consumo * tarifa;
  let nivel = '';
  if (consumo <= 30) nivel = 'Consumo bajo';
  else if (consumo <= 80) nivel = 'Consumo medio';
  else nivel = 'Consumo alto';

  resultadoDiv.style.display = 'block';
  resultadoDiv.innerHTML = `
    <strong>Consumo:</strong> ${consumo} kWh<br>
    <strong>Total a pagar:</strong> S/ ${total.toFixed(2)}<br>
    <strong>Nivel de consumo:</strong> ${nivel}
  `;
}
