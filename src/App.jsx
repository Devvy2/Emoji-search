import "./App.css";
import { EmojisList, Emojis } from "./components/Emoji/EmojisList";

function App() {
  return (
    <div className="App">
      <h1>Emojis Display</h1>
      <EmojisList emojis={Emojis} />
    </div>
  );
}

export default App;
