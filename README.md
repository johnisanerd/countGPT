# Chrome Extension:  Count Words

# Purpose

I found myself pasting too much text into [ChatGPT](https://chat.openai.com/) especially when I wanted to analyze a full document; I'd write a nice prompt, paste the document into ChatGPT, and then get annoying errors that I was over the word count.  Then I'd spend a lot of time slowly pairing down the input, hoping and guessing it was below the token threshold.   While there are some plugins built to do this, I was skeptical of where the data was going.

So I wrote a quick chrome plugin to count the tokens (or estimate them) and to reduce the size of the text, remove whitespace, and easily copy text between windows. It saves nothing, it requires no password or key.

You can [install the plugin from the Chrome Store here](https://chrome.google.com/webstore/detail/token-counter/piokpegenmfhmijblebapnpdkpkjapfk).

It's a work in progress, and it's open-source; I would genuinely appreciate any help in making it more useful! MIT License to make it as permissible as possible. This is my first chrome plugin, and I used ChatGPT to help me write it.

# Features

1. Count tokens.
2. Protect your privacy.
3. Remove whitespace from a prompt.  

# Procedure

To package the code into a Chrome app, you'll need to create a manifest file and package the HTML, JavaScript, and CSS files into a .zip file. Here are the steps to do this:

Create a new file named "manifest.json" in the same directory. This file will contain the metadata for your app, such as the name, version, and permissions. 

    Zip the entire directory containing the HTML, JavaScript, CSS, and manifest files. The .zip file should contain the directory itself, not just the files within it.

    Rename the .zip file to have a .crx extension (e.g. "app.crx").

    To install the app, follow the steps for installing a Chrome app in developer mode, and select the .crx file instead of a directory.

That's it! You now have a packaged Chrome app that can be installed and run in Google Chrome. You can submit this app to the Chrome Web Store for review and distribution, or share it with others by providing them with the .crx file.
