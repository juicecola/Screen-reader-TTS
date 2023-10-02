// content.js

// Function to extract text content from the web page
function extractTextContent() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span, div, td'); // Add more elements as needed
    let extractedText = '';

    textElements.forEach((element) => {
        extractedText += element.textContent + ' ';
    });

    return extractedText.trim();
}

console.log(extractTextContent()); // Log the extracted text to the console for testing

