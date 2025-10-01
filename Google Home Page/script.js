document.getElementById('searchBar')
    .addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('googleSearchButton').click();
    }
});

document.getElementById('googleSearchButton').addEventListener('click', () => {
  const searchInput = document.getElementById('searchBar').value;
  console.log(searchInput);
})
