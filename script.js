//your code here
document.addEventListener("DOMContentLoaded", function () {
  // Suppose an array that contains a list of band names
  let bandNames = ['The Beatles', 'Led Zeppelin', 'The Rolling Stones', 'Pink Floyd', 'Metallica', 'Queen'];

  // Function to sort band names without articles
  function sortBandNames(bandNames) {
    return bandNames.sort((a, b) => {
      return removeArticles(a) > removeArticles(b) ? 1 : -1;
    });
  }

  // Function to remove articles from the band name for sorting
  function removeArticles(name) {
    const articles = ['a', 'an', 'the'];
    const words = name.split(' ');
    return words.filter(word => !articles.includes(word.toLowerCase())).join(' ');
  }

  // Function to display band names in ul with li tags
  function displayBandNames(bandNames) {
    const ul = document.getElementById('band');

    // Clear existing list
    ul.innerHTML = '';

    // Add sorted band names to the list
    sortBandNames(bandNames).forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });
  }

  // Initial display
  displayBandNames(bandNames);
});


