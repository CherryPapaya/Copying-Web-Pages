document.getElementById('searchBar')
    .addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('googleSearchButton').click();
    }
});

document.getElementById('googleSearchButton').addEventListener('click', () => {
  visitPage();
})

function visitPage() {
  const searchTerm = document.getElementById('searchBar').value.trim();
  window.location='https://www.google.com/search?q=' + searchTerm;
}

