# AI Chat Interface

A simple and beautiful AI chat interface built with React. This project is designed to be deployed on GitHub Pages.

## Features

- 💬 Clean and modern chat UI
- 🎨 Beautiful gradient design
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- ⌨️ Support for Enter key to send messages
- 💤 Loading indicator with animated dots
- 🤖 Bot and user message differentiation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/egarcia-conga/ai-chat-interface.git
cd ai-chat-interface
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Usage

1. Type your message in the input field
2. Press Enter or click the send button to send a message
3. The AI assistant will respond with simulated messages

**Note:** Currently, the AI responses are simulated. To integrate with a real AI API:
- Replace the `generateBotResponse()` function in `src/App.js` with an API call
- Add your API key and endpoint configuration

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Install gh-pages if not already installed:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

Your app will be live at `https://your-username.github.io/ai-chat-interface`

## Project Structure

```
src/
├── components/
│   ├── ChatWindow.js       # Main chat display area
│   ├── Message.js          # Individual message component
│   ├── LoadingIndicator.js # Loading animation
│   └── InputArea.js        # Input field and send button
├── App.js                  # Main application component
├── App.css                 # Main styles
└── index.js               # React entry point
```

## Customization

### Change Colors

Edit the gradient colors in `src/App.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Avatar

Replace the emoji avatars in components with your own:
- `App.js`: `<div className="avatar">🤖</div>`
- `Message.js`: `<span className="avatar-small">👤</span>`

### Modify Bot Responses

Update the `generateBotResponse()` function in `src/App.js` with your desired responses.

## Technologies Used

- React 18
- CSS3 (Flexbox, Animations, Gradients)
- JavaScript ES6+

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests with improvements!

---

Made with ❤️ for AI enthusiasts
