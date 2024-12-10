let shoppingItems = [];

// Get the elements from the HTML
let itemInput = document.getElementById("itemInput");
let priceInput = document.getElementById("priceInput");
let addItemButton = document.getElementById("addItemButton");
let shoppingList = document.getElementById("shoppingList");
let clearListButton = document.getElementById("clearListButton");

// Add event listener to "Add Item" button
addItemButton.addEventListener('click', function() {
    // Get the item name and price
    let itemName = itemInput.value;
    let itemPrice = Number(priceInput.value);

    // Ensure that both fields are not empty
    if (itemName !== "" && itemPrice !== "") {
        // Add the item to the shoppingItems array
        shoppingItems.push({ name: itemName, price: itemPrice, purchased: false });

        // Clear the input fields
        itemInput.value = "";
        priceInput.value = "";

        // Update the list after adding a new item
        updateList();
    } else {
        alert("Please enter both item name and price.");
        return;
    }
});

// updateList function to update the shopping list
function updateList() {
    shoppingList.innerHTML = "";  // Clear the list before updating the new items

    // Loop through shoppingItems and create list items
    shoppingItems.forEach(function(item, index) {
        // Create the list item (li) element
        let li = document.createElement("li");
        li.textContent = `${item.name} - Ksh${item.price}`;  

    // Add the Mark Purchased button (show checkmark if purchased)
        let markPurchasedButton = document.createElement("button");
        markPurchasedButton.textContent = item.purchased ? "✓ Purchased" : "Mark Purchased"; // Toggle text based on purchased status

        // Mark the item as purchased when the button is clicked
        markPurchasedButton.onclick = function() {
            item.purchased = !item.purchased;  // Toggle the purchased status
            updateList();  // Update the list to see the change
        };

        // Create the delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        
         //Delete the item when the button is clicked
        deleteButton.onclick = function() {
            shoppingItems.splice(index, 1);  // Remove the item from the array
            updateList();  // Update the list after deletion
        };

        // Append the buttons to the list item (li)
        li.appendChild(markPurchasedButton);
        li.appendChild(deleteButton);

        // Append the list item to the shopping list
        shoppingList.appendChild(li);
    });
}


   // Add functionality to "Clear List" button
   clearListButton.addEventListener("click", function() {
    shoppingItems = [];  // Clear the shoppingItems array
    updateList();  // Update the list to show it as empty
});