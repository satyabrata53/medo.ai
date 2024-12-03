document.getElementById('symptomForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const symptom = document.getElementById('symptom').value.trim(); // Trim input
  const resultDiv = document.getElementById('result');

  // Clear previous results
  resultDiv.innerHTML = 'Loading...';

  try {
    const response = await fetch('http://localhost:3000/api/health/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: symptom }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.success) {
      const details =
        data.type === 'medicine'
          ? `
          <p><strong>Name:</strong> ${data.data.name}</p>
          <p><strong>Dosage:</strong> ${data.data.dosage || 'N/A'}</p>
          <p><strong>Side Effects:</strong> ${data.data.sideEffects?.join(', ') || 'None'}</p>
          <p><strong>Precautions:</strong> ${data.data.precautions?.join(', ') || 'None'}</p>
          <p><strong>Interactions:</strong> ${data.data.interactions?.join(', ') || 'None'}</p>
        `
          : `
          <p><strong>Symptom:</strong> ${data.data.name}</p>
          <p><strong>Probable Diseases:</strong> ${data.data.probableDiseases?.join(', ') || 'None'}</p>
        `;

      resultDiv.innerHTML = details;
    } else {
      resultDiv.innerHTML = `<p>${data.message}</p>`;
    }
  } catch (error) {
    resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    console.error('Fetch Error:', error);
  }
});



  
  