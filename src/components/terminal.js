import Header from './header';
import Console from './Console';

const Terminal = () => {
    var terminalOnClick = () => {
        document.getElementById('input-field').focus()
    }

    return (
    <div className="terminal-container" onClick={terminalOnClick}>
        <Header windowTitle={"PuzzleConsole22"}/>
        <Console/>
    </div>
  )
}

export default Terminal