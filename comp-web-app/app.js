// app.js

// Simulated backend (server-side)
const mockDatabase = ["Item 1", "Item 2", "Item 3", "Item 4"];

function fetchItems() {
    // Simulate a request to the backend
    const items = mockDatabase;

    // Update the UI with items (frontend logic)
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; // Clear existing list
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });
}
