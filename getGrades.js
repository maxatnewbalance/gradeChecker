'use strict';

async function fetchAndParse(url) {
    try {
        const response = await fetch(url, { mode: "cors" }));
        if (!response.ok) {
            throw new Error(`Failed to fetch page: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        // Find input fields by their IDs
        const uidInput = doc.getElementById("uid");
        const pwdInput = doc.getElementById("pwd");
        const button = doc.getElementById("Button1");

        // Display results
        console.log("UID Input:", uidInput ? uidInput.outerHTML : "Not found");
        console.log("PWD Input:", pwdInput ? pwdInput.outerHTML : "Not found");
        console.log("Button:", button ? button.outerHTML : "Not found");
    } catch (error) {
        console.error("Error fetching or parsing the page:", error);
    }
}

// Example usage: Replace with the actual target URL
fetchAndParse('https://gdrsd.schoolbrains.com/comm/Login.aspx');
