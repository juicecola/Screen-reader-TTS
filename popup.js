// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const startScreenReaderButton = document.getElementById('start-screen-reader');

    startScreenReaderButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];

            // Check if there's an active tab
            if (activeTab) {
                // Use chrome.scripting.executeScript to inject a content script
                chrome.scripting.executeScript({
                    target: { tabId: activeTab.id },
                    function: readPageContent
                });
            }
        });
    });
});

// Function to extract and return the text content of the page
function readPageContent() {
    const textContent = document.body.textContent;
    chrome.runtime.sendMessage({ action: 'readContent', text: textContent });
}

