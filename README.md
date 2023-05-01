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

# Packaging Procedure

To package the code into a Chrome app, you'll need to create a manifest file and package the HTML, JavaScript, and CSS files into a .zip file. Here are the steps to do this:

Create a new file named "manifest.json" in the same directory. This file will contain the metadata for your app, such as the name, version, and permissions. 

    Zip the entire directory containing the HTML, JavaScript, CSS, and manifest files. The .zip file should contain the directory itself, not just the files within it.

    Rename the .zip file to have a .crx extension (e.g. "app.crx").

    To install the app, follow the steps for installing a Chrome app in developer mode, and select the .crx file instead of a directory.

That's it! You now have a packaged Chrome app that can be installed and run in Google Chrome. You can submit this app to the Chrome Web Store for review and distribution, or share it with others by providing them with the .crx file.

# Publish to Chrome Store

Here are the steps to turn the code into a Chrome app:

1. Open Google Chrome and go to the [Chrome Web Store](https://chrome.google.com/webstore/devconsole/).

2. Click on the "Developer Dashboard" button.

3. Sign in with your Google account. Click on the "Add New Item" button.

4. Fill out the form with the basic information about your app, such as the name, description, and screenshots.

5. In the "Extension" section, select "Packaged App".

6. Click on the "Upload .zip file" button and select the .zip file containing your app's code.

7. Click on the "Publish Item" button to submit your app for review.

Once your app is approved, it will be available for download in the Chrome Web Store.

To install your app, go to the Chrome Web Store, find your app, and click on the "Add to Chrome" button.

Your app will now be installed and available to use from the Chrome App Launcher.

That's it! Your users can now download and install your app from the Chrome Web Store and use it just like any other Chrome app.

Update the App in the Chrome Web Store

1. Update the manifest to have a later version.  Save.  Zip.

2. Open Google Chrome and go to the [Chrome Web Store](https://chrome.google.com/webstore/devconsole/).  

3. Select your app.  Then Click on "Package" on the left hand side.

