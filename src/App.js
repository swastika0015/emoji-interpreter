import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDic = {
    "❤️": "Red Heart",
    "✨": "Sparkles",
    "🔥": "Fire",
    "😊": "Smiling Face with Smiling Eyes",
    "😂": "Face with Tears of Joy",
    "✔️": "Check Mark",
    "🥺": "Pleading Face",
    "👍": "Thumbs Up",
    "🥰": "Smiling Face with Hearts",
    "🌻": "Sunflower"
  };
  const knownEmoji = Object.keys(emojiDic);
  console.log(knownEmoji);
  const [meaning, setmeaning] = useState("");

  function emojiHandler() {
    const userInput = event.target.value;

    let meaning = emojiDic[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in out Database";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(item) {
    let meaning = emojiDic[item];

    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>The Most Popular Emojis</h1>
      <input onChange={emojiHandler} />
      <h4>Emojis List</h4>
      {knownEmoji.map(function (item) {
        return (
          <span onClick={() => emojiClickHandler(item)} key={item}>
            {item}
          </span>
        );
      })}
      <h4>{meaning}</h4>
    </div>
  );
}
