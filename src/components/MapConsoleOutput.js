import React from "react";
import Prompt from "./Prompt";

const MapConsoleOutput = ({ consoleOutput }) => {
  const scrollRef = React.useRef();

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  return (
    <div className="console-output" ref={scrollRef}>
      {consoleOutput.map((item, index) => (
        <div key={index} className="prompt-line">
          <pre style={{color:item[0]==="$"?"yellow":"white"}}>{item}</pre>
        </div>
      ))}
    </div>
  );
};

export default MapConsoleOutput;