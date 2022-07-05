# Flash

This project is an online study tool that has FREE pre-generated flashcard-style questions to aid in learning the core concepts of front-end development.

# The Problem

In many traditional programs, there is an emphasis on theory, and general cs knowledge, and a lack of practical knowledge.

## User Profile

This project is curated for university, college, boot-camp students, or self-learners. This project is also an ideal resource for prepping for the non-technical aspect of front-end software development interviews.


# The Design 

The visual flashcard design was used to aid in creating long-term memory storage. Traditional methods of studying typically include reading, writing out, and re-reading information. This method has not been shown to be as effective in generating long-term memory in a shorter duration of time. Active recall has been shown to have the most effective impact on turning short term, and working memory into long-term memory via re-accessing previously encoding information. Active recall works by recalling brief information that has previously been stored in memory. This is done by thinking of the information, which triggers the brain to replay similar patterns of the neural activity that was originally created during the initial event that created the memory. 

# Tech Stack and APIs

Client: JSX, SCSS, Javascript, and React.
Server: Node.js, Express.js

No external APIs were used. All APIs were creating internally with Node.js and Express.js

# Installation for front-end Client side

### `In Visual Studio Code`

Download visual studio code https://code.visualstudio.com/
1. Once opening VScode select Clone Git Repository within the get started tab, or select the Explorer tab within the left hand  corner and then select Clone Repository
2. Within the search bar, select Clone from Github
3. Sign in to GitHub and allow for authentication 
4. Within the search bar, search the repository name, and select the repository (alexiacooze/Capstone-Client-Side)
5. You will then be prompted to select a location for the file to be stored on your computer (best to save it directly to your desktop)
6. The repository will then be cloned to that location. VScode will then ask if you would like to open the cloned repository
7. Select Open

### `In terminal`
*After every terminal command press enter

1. Open the terminal within VScode
You may need to cd into the folder name, or location where the repository was saved. I.e., if it was saved on your desktop, then you will first need to type in the terminal: cd desktop
2. Type into the terminal: npm i
3. Type into the terminal: npm start

The terminal in VScode will return

The Flash application will then open in your browser

# Installation for back-end Server-side

### `Backend`

In order to have the data populate from the server side to the client side, you must clone the sever side repository. 
Go to https://github.com/alexiacooze/Capstone-server-side and follow the installation instructionS found below

### `In Visual Studio Code (VScode)`

Open a new window within Vscode
1. Once opening A NEW window within VScode, follow the same process of cloning the Git Repository within the get started tab, or select the Explorer tab within the left hand  corner and then select Clone Repository
2. Within the search bar, select Clone from Github
4. Within the search bar, search the repository name, and select the repository (alexiacooze/Capstone-Server-Side)
5. You will then be prompted to select a location for the file to be stored on your computer (best to save it directly to your desktop)
6. The repository will then be cloned to that location. VScode will then ask if you would like to open the cloned repository
7. Select Open

### `In terminal`
*After every terminal command press enter

1. Open the terminal within VScode
You may need to cd into the folder name, or location where the repository was saved. I.e., if it was saved on your desktop, then you will first need to type in the terminal: cd desktop
2. Type into the terminal: npm i
3. Type into the terminal: npx nodemon

The terminal will return 

The data will then be linked to the client side. 

You are now ready to start using the FLASH application!
