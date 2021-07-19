import React, {useState} from 'react';
import './scss/controlsContainer.scss';
import Button from '../components/button';
import ButtonList from '../components/buttonList';
import logo from '../assets/images/convoblocks_logo.png';

const modes = {
    CLOSED: "Open Menu",
    OPEN: "Close Menu"
};

const ControlsContainer = ({buttons}) => {
    const [menuState, setMenuState] = useState(modes.CLOSED);

    const alternateMenu = () => {
        if (menuState === modes.CLOSED) {
            setMenuState(modes.OPEN);
        } else {
            setMenuState(modes.CLOSED);
        }
    }

    return (
        <React.Fragment>
            <div className="container container-controls">
                <img src={logo} alt="Convoblocks logo" className="container-controls--logo"/>
                <div className="container-controls--menu container-controls--menu-desktop">
                    { buttons && <ButtonList buttons={buttons} /> }
                </div>
                <div className="container-controls--menu container-controls--menu-mobile">
                    <Button icon="menu" iconOnly onClick={() => alternateMenu()} text={menuState} />
                </div>
            </div>
            <div className="container-controls--menu-mobile">
                {menuState === modes.OPEN && <ButtonList buttons={buttons} vertical />}
            </div>
        </React.Fragment>
    );
}

export default ControlsContainer