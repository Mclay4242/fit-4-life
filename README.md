HEYO! Thanks for taking a look. This will be a great since I havent really had anyone look at my code.
Ignore the signupbackend folder. That is for whenever I can figure out this front end.

Okay, I will just make a list of questions/concerns about the page:

1. Is it normal to have a .jsx file that references a bunch of .js files like I have it?
2. Is part of the problem the fact that I have two index.js files? One is for logic and other is for rendering the app.
3. Does this file organization look normalish or correct? I'm just guessing out here haha

MAJOR ISSUES:

1. For some reason, the Login.js and Register.js files are making it so that all pages are unable to scroll. If you comment out both of them it will work just fine, but I really need those pages to create and have user accounts (the main thing I was working on with this project).
2. The index.js inside of the JS folder is where my logic for pages exists. Everytime I try and import it the page goes blank. If I comment it out (as it is), load the page, and then uncomment it works (including the logic), but it will not innitially load the page with the file imported.
