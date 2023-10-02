Screen Reader & Text-to-Speech (TTS) Extension
Extension Icon

This browser extension provides screen reading and text-to-speech (TTS) capabilities for web pages. It allows you to extract and read the text content of a webpage, making online content more accessible to individuals with visual impairments or those who prefer an auditory experience.

Features
Extracts text content from various HTML elements on a webpage.
Offers a simple and user-friendly interface.
Provides the ability to read the extracted text aloud using text-to-speech (TTS) technology.
Installation
Download or clone this repository to your local machine.

Open your web browser (compatible with the extension's manifest.json permissions) and go to the extensions or addons page.

Enable developer mode.

Click on "Load unpacked" or "Load extension" and select the folder where you cloned or downloaded the repository.

The extension should now be installed and ready to use.

Usage
Once the extension is installed, you can use it to read the text content of a webpage:

Open a webpage you want to read.

Click on the extension icon in your browser's toolbar to open the extension popup.

In the popup, click the "Start Screen Reader" button.

The extension will extract the text content from the webpage and read it aloud using text-to-speech technology.

Extension Components
content.js: This script extracts text content from various HTML elements on the webpage. You can customize the list of elements to be considered for text extraction.

manifest.json: The manifest file defines the extension's metadata, including its name, version, description, icons, permissions, and content script settings.

popup.js: This script handles the extension's popup functionality. It queries the active tab, injects the content.js script to extract text content, and sends the content to the background script for text-to-speech conversion.

popup.css: The CSS file provides styling for the extension's popup.

Permissions
activeTab: Allows the extension to access the currently active tab for reading its content.

scripting: Permits the extension to execute content scripts on web pages to extract text content.

Compatibility
This extension is designed to work with modern web browsers that support the latest manifest version (v3) for browser extensions.

