// must wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() 
{
  const input = document.querySelector('#fruit');
  const suggestions = document.querySelector('.suggestions ul');

  const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//   this is the function needed to filter fruits based on the input in the search bar
function search(str) 
{
      str = str.toLowerCase(); 
      return fruit.filter(item => item.toLowerCase().includes(str));
  }

  function searchHandler(e) 
  {
      const inputVal = e.target.value.trim();
      const results = search(inputVal);
      
      showSuggestions(results, inputVal);
  }

  function showSuggestions(results, inputVal) 
  {
      suggestions.innerHTML = ''; // clears previous suggestions
      
   
        // creates list items based on search results 
         results.forEach(result => 
            {
          const li = document.createElement('li');
          li.textContent = result;
          suggestions.appendChild(li);
      });
      
      if (inputVal === '') {
          suggestions.style.display = 'none'; // If the input is empty, it will not show predicted text / suggestions 
      }
      else {
          suggestions.style.display = 'block'; 
      }
  }

  function useSuggestion(e)
   {
      if (e.target.tagName === 'LI') {
          input.value = e.target.textContent;
          suggestions.style.display = 'none'; // hides suggestions after users select one
      }
  }

  input.addEventListener('input', searchHandler);
  suggestions.addEventListener('click', useSuggestion);
});