document.getElementById('btnLoad').addEventListener('click', () => {
  const dataDiv = document.getElementById('data');
  dataDiv.style.display = 'block';
  dataDiv.innerHTML = '<p>Carregando dados, aguarde...</p>';

  // Simula um carregamento de dados demorado, tipo uma requisição lenta
  setTimeout(() => {
    dataDiv.innerHTML = `
      <ul>
        <li>Item 1: Informação importante</li>
        <li>Item 2: Informação importante</li>
        <li>Item 3: Informação importante</li>
      </ul>
    `;
  }, 1500);
});