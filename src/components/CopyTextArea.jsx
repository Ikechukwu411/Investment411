import React, { useState, useRef } from "react";

const CopyTextArea = () => {
  const [text, setText] = useState("cxgfdtebabuygt6278yhbhbdhgtsftfhb");
  const textAreaRef = useRef(null);

  const handleCopy = () => {
    textAreaRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default CopyTextArea;
