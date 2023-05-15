This program is a recreation of the chatGPT user interface, complete with chat history and the GPT 3.5 language model accessed by OpenAI's API.

To run, navigate to the folder and enter the following commands:
npm run start:frontend
npm run start:backend

A page should appear in your web browser where you can interact with chatGPT, much like on OpenAI's own website.

### App Component

This component is the main component of the application. It manages the state of the application and renders the UI elements. 

#### State
- `value` - A string that stores the value of the input field where the user types the message.
- `message` - An object that stores the message returned by the OpenAI API.
- `previousChats` - An array of objects that stores the user's previous chats.
- `currentTitle` - A string that stores the title of the current chat.

#### Methods
- `createNewChat()` - A method that clears the input field and the message state and sets the currentTitle state to null.
- `handleClick(uniqueTitle)` - A method that sets the currentTitle state to the `uniqueTitle` parameter and clears the input field and the message state.
- `getMessages()` - An asynchronous method that sends a POST request to the server with the user's message, retrieves a response from the OpenAI API, and sets the message state with the response.
- `useEffect()` - A React hook that is called after every render of the component. It updates the previousChats state with the current chat message if the currentTitle, value, and message states are all truthy.
- `render()` - The main method that renders the UI elements of the application.

#### UI Elements
- A "New Chat" button that clears the input field and the message state and sets the currentTitle state to null.
- A list of unique chat titles, generated from the previousChats state, that can be clicked to switch between different chats.
- A main section that contains the chat feed and the input field.
- A disclaimer that explains the limitations of the OpenAI API.

### Now for the back-end:

### Server
This is the server-side code that receives requests from the front-end, sends them to the OpenAI API, and returns the response to the front-end.

#### Endpoints
- `/completions` - A POST endpoint that receives a message from the front-end, sends it to the OpenAI API, and returns the response to the front-end.

#### Middleware
- `express.json()` - A middleware that parses incoming requests with JSON payloads.
- `cors()` - A middleware that enables Cross-Origin Resource Sharing (CORS) for the server.
- `dotenv.config()` - A middleware that loads environment variables from a `.env` file.

#### Dependencies
- `express` - A fast, unopinionated, minimalist web framework for Node.js.
- `cors` - A package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- `dotenv` - A zero-dependency module that loads environment variables from a `.env` file.
