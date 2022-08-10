import Button from './button';

const Buttons = ({windowTitle}) => {
    return (
    <div className="terminal-buttons">
        <Button symbol={"—"}/>
        <Button symbol={"❐"}/>
        <Button symbol={"×"}/>
    </div>
  )
}

export default Buttons