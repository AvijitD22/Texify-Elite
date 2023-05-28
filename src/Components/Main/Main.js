import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);

  const numberOfWords = () => {
    let data = document.querySelector("textarea").value;
    data = data.trim();
    if (data === "") {
      setWords(0);
    }
    const words = data.split(" ");
    const filteredWords = words.filter((word) => word !== "");
    setWords(filteredWords.length);
  };

  const numberOfCharacters = () => {
    let data = document.querySelector("textarea").value;
    const trimmedStr = data.replace(/\s/g, "");
    setCharacters(trimmedStr.length);
  };

  const toUppercase = () => {
    const uppercaseData = document
      .querySelector("textarea")
      .value.toUpperCase();
    document.querySelector("textarea").value = uppercaseData;
  };

  const toLowercase = () => {
    const lowercaseData = document
      .querySelector("textarea")
      .value.toLowerCase();
    document.querySelector("textarea").value = lowercaseData;
  };

  const toCapitalize = () => {
    const words = document
      .querySelector("textarea")
      .value.toLowerCase()
      .split(" ");

    const capitalizedSentence = words
      .map((word) => {
        const capitalizedFirstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1);
        return capitalizedFirstLetter + restOfWord;
      })
      .join(" ");
    document.querySelector("textarea").value = capitalizedSentence;
  };

  const toReverse = () => {
    const reversedStr = document
      .querySelector("textarea")
      .value.split("")
      .reverse()
      .join("");
    document.querySelector("textarea").value = reversedStr;
  };

  const toEncode = () => {
    const encodedString = btoa(document.querySelector("textarea").value);
    document.querySelector("textarea").value = encodedString;
  };

  const toDecode = () => {
    const decodedString = atob(document.querySelector("textarea").value);
    document.querySelector("textarea").value = decodedString;
  };

  const toCopy = () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("Text copied to clipboard!");
  };
  const toClear = () => {
    document.querySelector("textarea").value = "";
  };
  return (
    <div>
      <div className="textarea-div">
        <textarea
          id="textarea"
          className="textarea"
          placeholder="Enter your text here..."
          onChange={() => {
            numberOfWords();
            numberOfCharacters();
          }}
        />
      </div>
      <div className="button-div">
        <button className="my-button" onClick={toUppercase}>
          UpperCase
        </button>
        <button className="my-button" onClick={toLowercase}>
          LowerCase
        </button>
        <button className="my-button" onClick={toCapitalize}>
          Capitalize
        </button>
        <button className="my-button" onClick={toReverse}>
          Reverse
        </button>
        <button className="my-button" onClick={toEncode}>
          Encode
        </button>
        <button className="my-button" onClick={toDecode}>
          Decode
        </button>
        <button
          className="my-button"
          onClick={toCopy}
          style={{ backgroundColor: "green" }}
        >
          Copy
        </button>
        <button
          className="my-button"
          onClick={() => {
            toClear();
            numberOfWords();
            numberOfCharacters();
          }}
          style={{ backgroundColor: "red" }}
        >
          Clear
        </button>
      </div>
      <div className="textSummary-div">
        <h1 className="heading">Text Summary</h1>
        <p className="textSummary">Number of Characters : {characters}</p>
        <p className="textSummary">Number of Words : {words}</p>
      </div>
    </div>
  );
};

export default Main;
