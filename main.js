
//Fetch the items from the JSON file
function loadItems() {
   return fetch('data.json')
   .then(response => console.log(response));
}
//main
loadItems()
.then(items => {
   // displayItems(items);
   // setEventListeners(items)
})
.catch(console.log);