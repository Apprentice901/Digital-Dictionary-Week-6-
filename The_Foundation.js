// Phase 1: The Foundation (Fetch & Promises)

// Use the fetch() API to request a specific word (e.g., “hello”) from the Dictionary API.
fetch("https://freedictionaryapi.com/api/v1/entries/en/hello")
    // The first .then() should check if the response is valid (response.ok), then send the json data to the next call
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }
        return response.json();
    })
    // The second .then() should parse the data as JSON and log the entire resulting data object to the console.
    .then(data => {
        console.log(data);
    });

// Phase 1 Error Section: