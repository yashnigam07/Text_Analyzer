import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text to convert to Uppercase!", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase!", "success");
    }
  };

  const handleLoClick = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text to convert to Lowercase!", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!", "success");
    }
  };

  const handleClearClick = () => {
    if (text.trim() === "") {
      props.showAlert("Text box is already empty!", "info");
    } else {
      setText("");
      props.showAlert("Text Cleared!", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    if (text.trim() === "") {
      props.showAlert("Nothing to copy. Please enter some text!", "info");
    } else {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied to Clipboard!", "success");
    }
  };

  const handleTitleCaseClick = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text to convert to Title Case!", "warning");
    } else {
      let newText = text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setText(newText);
      props.showAlert("Converted to Title Case!", "success");
    }
  };

  const handleReverseClick = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text to reverse!", "warning");
    } else {
      let newText = text.split('').reverse().join('');
      setText(newText);
      props.showAlert("Text Reversed!", "success");
    }
  };

  const handleRemoveSpacesClick = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text to remove extra spaces!", "warning");
    } else {
      let newText = text.split(/[ ]+/).join(' ');
      setText(newText);
      props.showAlert("Extra Spaces Removed!", "success");
    }
  };

  const [text, setText] = useState('');

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characterCount = text.length;

  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">{props.heading}</h1>
        <div className="mb-6">
          <textarea 
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-700 transition-shadow duration-300"
            value={text} 
            onChange={handleOnChange} 
            id="myBox" 
            rows="8" 
            placeholder="Type or paste your text here...">
          </textarea>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <button className="btn-action" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="btn-action" onClick={handleLoClick}>
            Lowercase
          </button>
          <button className="btn-action" onClick={handleTitleCaseClick}>
            Title Case
          </button>
          <button className="btn-action" onClick={handleReverseClick}>
            Reverse Text
          </button>
          <button className="btn-action" onClick={handleRemoveSpacesClick}>
            Remove Spaces
          </button>
          <button className="btn-action" onClick={handleCopy}>
            Copy
          </button>
          <button className="btn-clear" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </div>
      <div className="max-w-xl mx-auto my-6 p-6 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-xl font-medium text-gray-800">Text Summary</h2>
        <p className="text-gray-600">{wordCount} words and {characterCount} characters</p>
        <p className="text-gray-500">{(0.008 * wordCount).toFixed(2)} minutes to read</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Preview</h3>
        <p className="text-gray-600">{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}


