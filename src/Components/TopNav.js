import React, {useState} from 'react';
import MenuBars from '../photos/menu-bars.png'
import ArchLogo from '../photos/arches-logo_108x108.jpg';
import { DropDown1 } from './DropDownBar';
import { Button } from 'react-bootstrap';

function TopNav () {

const [clickState, setClickState] = useState(false)

const clickHandler = () => {
     setClickState (!clickState) 
     console.log('clicked')
}

  return (
        <>
            <header>
                <nav className='navbar'>
                    <ul className="navLeft">
                        <li><img src={ArchLogo} alt="arch-logo.jpg" /></li>
                        <li>
                        <div className="navLeft navMenuDrop">
                        <img className='navPhoto' onClick={clickHandler} src={MenuBars} alt="menu" />
                        {clickState ? <DropDown1 /> : null}
                    </div>
                        </li>
                    </ul>
                    <Button variant="warning" className="navRight">Order Now</Button>

                </nav>

            </header>
        </>
    )
}

export default TopNav;