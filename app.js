
// Import the Express.js framework.
// Express helps us build a web server and handle HTTP requests.
const express = require("express");

// Create an Express application.
// The app object will be used to define routes and start the server.
const app = express();

// Define the port number where the application will run.
// process.env.PORT allows hosting platforms (such as cloud services)
// to provide their own port.
// If no port is provided, the application uses port 3000.
const port = process.env.PORT || 3000;


// ========================================
// ROUTE 1: HOME PAGE
// ========================================

// app.get() defines a route that responds to HTTP GET requests.
// "/" represents the home page of our website.
//
// req = request sent by the client (browser).
// res = response sent back by our server.
app.get("/", (req, res) => {

  // Send HTTP status code 200 (OK).
  // Then send HTML content back to the browser.
  res.status(200).send(`
    <h1>My Web DevOps Task 3</h1>
    <p>The Node.js and Express application is running successfully.</p>
  `);
});


// ========================================
// ROUTE 2: HEALTH CHECK
// ========================================

// This route is used to check whether our application is running.
//
// It is especially useful in DevOps because monitoring tools,
// Docker, and deployment platforms can check this endpoint.
app.get("/health", (req, res) => {

  // Return HTTP status code 200 (OK).
  // json() sends a JSON response instead of HTML.
  res.status(200).json({

    // Indicates that the application is healthy.
    status: "healthy",

    // Identifies the name of our application.
    service: "my-web-devops-task3"

  });
});


// ========================================
// START THE SERVER
// ========================================

// require.main === module checks whether this file
// is being executed directly using Node.js.
//
// If the file is imported by another file (for example,
// a testing file), the server will not start automatically.
if (require.main === module) {

  // Start the Express server and listen on the specified port.
  app.listen(port, () => {

    // Display a message in the terminal when the server starts.
    console.log(`Application running at http://localhost:${port}`);

  });
}


// ========================================
// EXPORT THE APPLICATION
// ========================================

// Export the Express app so other files can import it.
//
// This is useful for automated testing with tools such as Jest
// or Supertest without starting a separate server.
module.exports = app;
