
document.getElementById('portfolioForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const programme = document.getElementById('programme').value;
  const bio = document.getElementById('bio').value;
  const github = document.getElementById('github').value;
  const linkedin = document.getElementById('linkedin').value;

  fetch('templates/template.html')
    .then(response => response.text())
    .then(template => {
      const html = template
        .replace('{NOM}', nom)
        .replace('{PROGRAMME}', programme)
        .replace('{BIO}', bio)
        .replace('{GITHUB}', github)
        .replace('{LINKEDIN}', linkedin);

      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      document.getElementById('previewFrame').src = url;
    });
});
