// app.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate sending a request to the server
    const serverResponse = mockServer(username, password);

    // Display server's response
    document.getElementById('response').innerText = serverResponse;
}

// Mock server function
function mockServer(username, password) {
    // Hardcoded "server" data
    const validUser = { username: "user123", password: "pass123" };

    if (username === validUser.username && password === validUser.password) {
        return "Login Successful! Welcome, " + username;
    } else {
        return "Login Failed. Please check your credentials.";
    }
}
