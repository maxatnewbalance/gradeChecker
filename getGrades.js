'use strict';

async function fetchAndParse(url) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(xhr.responseText, "text/html");

            // Find input fields by their IDs
            const uidInput = doc.getElementById("uid");
            const pwdInput = doc.getElementById("pwd");
            const button = doc.getElementById("Button1");

            // Display results
            console.log("UID Input:", uidInput ? uidInput.outerHTML : "Not found");
            console.log("PWD Input:", pwdInput ? pwdInput.outerHTML : "Not found");
            console.log("Button:", button ? button.outerHTML : "Not found");
        }
    };

    xhr.send();
}

// Example usage: Replace with the actual target URL
fetchAndParse('https://gdrsd.schoolbrains.com/comm/Login.aspx');
