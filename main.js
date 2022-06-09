
//Fetch the items from the JSON file
function loadItems() {
   return fetch('data.json')
   .then(response => response.json())
   .then(json => json.items);
}

//Update the list with the given items
function displayItems(items) {
   const container = document.querySelector('.items');
   const html = items.map(item => creatHTMLString(item));
   // console.log(html);
   container.innerHTML = items.map(item => creatHTMLString(item)).join('');
}

//Create HTML list item from the given data
function creatHTMLString(item) {
   return `
      <li class="item">
         <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
         <span class="item_description">${item.gender}, ${item.size}</span>
      </li>
   `;
}
//main
loadItems()
   .then(items => {
   displayItems(items);
   // setEventListeners(items)
   })
.catch(console.log);