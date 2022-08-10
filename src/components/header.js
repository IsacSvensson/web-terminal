import Buttons from './buttons';
import Icon from './icon';

const Header = ({windowTitle}) => {
    return (
        <div className="terminal-header">
            <Icon/>
            <p className="terminal-title">{windowTitle}</p>
            <Buttons/>
        </div>
  )
}

export default Header