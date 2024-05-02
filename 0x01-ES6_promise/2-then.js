export default function handleResponseFromAPI(promise) {
    // Append handlers to the promise
    return promise
        .then((response) => {
            // Log success message to the console
            console.log("Got a response from the API");
            // Return an object with status 200 and body "success"
            return {
                status: 200,
                body: "success"
            };
        })
        .catch((error) => {
            // Log error message to the console
            console.error("Error:", error);
            // Return an empty Error object
            return new Error();
        });
}
