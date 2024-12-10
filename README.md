# code-challenge-phase-1-week-2
@Code explanation
HTML Elements
itemInput: Input field for the item name.
priceInput: Input field for the item's price.
addItemButton: Button to add an item to the shopping list.
shoppingList: Container where the list of shopping items is displayed.
clearListButton: Button to clear the entire shopping list.
JavaScript Logic
Add Item:

When the "Add Item" button is clicked, the item name and price are retrieved from the input fields. If both fields are not empty, the item is added to the shoppingItems array.
Mark Item as Purchased:

When the "Mark Purchased" button is clicked, the item's purchased status is toggled, and the list is updated.
Delete Item:

When the "Delete" button is clicked, the corresponding item is removed from the shoppingItems array, and the list is updated.
Clear List:

When the "Clear List" button is clicked, all items are removed from the shoppingItems array, and the list is updated to show it as empty.

#Usage
Usage
Add Items:

Enter an item name and price in the input fields and click the "Add Item" button to add it to the list.
Mark Items as Purchased:

Click the "Mark Purchased" button next to an item to mark it as purchased. The button text will toggle to "✓ Purchased."
Delete Items:

Click the "Delete" button next to an item to remove it from the list.
Clear List:

Click the "Clear List" button to remove all items from the list.
