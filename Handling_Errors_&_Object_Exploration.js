// Phase 2: Handling Errors & Object Exploration

// Use the fetch() API to request a specific word (e.g., "hello") from the Dictionary API

// Update your fetch logic to include a .catch() block that logs a clear error message 
// (e.g., "Error: Could not connect to the dictionary service") if the network request fails.
fetch("https://freedictionaryapi.com/api/v1/entries/en/hello")
    // The first .then() should check if the response is valid (response.ok), 
    // then send the json data to the next call.
    .then(response => {
        // Add a check inside your first .then() to throw an Error if response.ok is false 
        // (this happens if the network request encounters an HTTP error, like a mistyped URL 
        // or server issue), and then send the json data to the next then call.
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status); // Throws an error if the response is not ok
        }
        return response.json(); // Send the JSON data to the next .then() call
    })
    // The second .then() should parse the data as JSON and log the entire resulting data object to the console.
    // Check if any entries were returned (data.entries.length === 0). If no entries are found, print “Word not found”.
    // If entries are found, log the word and the first definition string found in the JSON structure to the console.
    .then(data => {
        if (data.entries.length === 0) { // Check if any entries were returned
            console.log("Word not found");
        } else {
            console.log("Word:", data.entries[0].word); // Log the word
            console.log("Definition:", data.entries[0].meanings[0].definitions[0].definition); // Log the first definition string found in the JSON structure
        }
    })
    .catch(error => { // Added a .catch() block to handle any errors that occur during the fetch() process
        console.error("Error: Could not connect to the dictionary service", error); // Log a clear error message if the network request fails
    });





// Phase 2 Error Section: