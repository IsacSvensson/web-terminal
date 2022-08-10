import React from "react";
import Commands from "./Commands";
import parseCommand from "./ParseCommand";


const UseOnEnter = () => {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);
  const [history, updateHistory] = React.useState([]);

  const onEnter = (value, key) => 
{
    if (key === "Enter") 
    {
        var parsedCommand = parseCommand(value)
        updateHistory(history.concat(value));
        if (Commands.is_valid(parsedCommand[0]))
        {
            const newConsoleLine = Commands[parsedCommand[0]](parsedCommand);
            return updateConsoleOutput(
                consoleOutput =>
                {
                    var temp = consoleOutput.concat("$ " + value);
                    return temp.concat(newConsoleLine);
                }
            );
        } 
        else 
        {
            const newConsoleLine = "Invalid Command";
            return updateConsoleOutput(
                consoleOutput =>
                {
                    if (value ==="clear")
                    {
                        return new Array()
                    }
                    var temp = consoleOutput.concat("$ " + value);
                    return temp.concat(newConsoleLine);
                }
            );
        }}
  };

  return [consoleOutput, onEnter];
};

export default UseOnEnter;