// app.js
function sendRequest() {
    const name = document.getElementById('name').value; // Get user input

    // Simulate sending a request to the server
    const response = mockServer(name);

    // Display the server's response
    document.getElementById('response').innerText = response;
}

// Mock server function (simulates a server's response)
function mockServer(name) {
    if (name) {
        return `Hello, ${name}! Welcome to our site.`;
    } else {
        return "Please enter your name to continue.";
    }
}
