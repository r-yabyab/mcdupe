import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuBars from '../photos/menu-bars.png'
import ArchLogo from '../photos/arches-logo_108x108.jpg';
import { DropDown1, OurMenu } from './DropDownBar';
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
                <div className='-mb-[24px]'>
                  <ul className="flex float-left mt-[10px] pl-0">
                    {/* navLeft */}
                      <Link to="/"><li className='max-lg:hidden min-w-[108px] min-h-[108px]'><img src={ArchLogo} alt="arch-logo.jpg" /></li></Link>
                      <Link to="/"><li className='lg:hidden max-lg:max-w-[50px] max-lg:max-h-[50px] -mt-[18px]'><img src={ArchLogo} alt="arch-logo.jpg" /></li></Link>
                     
                     
                <div className='relative max-lg:hidden ml-10 mr-28'>
                    <div className='flex'>
                        <ul className='flex [&>li]:pr-10 text-sm pt-2'>
                            <li>Language v</li>
                            <li>Sign Up for Email</li>
                            <li>Careers</li>
                        </ul>


                        {/* <ul className='flex [&>li]:pr-10 ml-20'>
                            <li>O Search</li>
                            <li className='underline'>0 Change your localtion</li>
                            </ul> 
                            */}
                        {/* <Button variant="warning" className="">Order Now</Button> */}

                    </div>

                    <ul className='flex [&>li]:pr-7 pt-[38px] pb-6'>
                        <li>Our Menu v</li>
                        <li>Download App</li>
                        <li>MyMcDonald's Rewards</li>
                        <li>Exclusive Deals</li>
                        <li>About Our Food</li>
                        <li>Locate</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>


                      <li>
                          {/* <div className=""> */}
                              <img 
                              className='max-w-[25px] max-h-[25px] ml-2 -mt-[8px] lg:hidden' 
                              onClick={clickHandler} src={MenuBars} alt="menu" 
                              />
                              {/* navPhoto ^^ */}
                              <div className='lg:hidden'>
                              {clickState ? <DropDown1 /> : null}
                              </div>
                          {/* </div> */}
                      </li>
                  </ul>
                  
                      <div className='absolute lg:right-10 lg:top-4 max-lg:right-2 flex'>
                          <ul className='flex pt-2 [&>li]:pr-10 ml-20 float-left max-lg:hidden text-sm'>
                              <li className=''>O Search</li>
                              <li className='underline text-blue-700'><span className="text-red-500">0</span> Change your location</li>
                          </ul>
                              <Button variant="warning" className="">Order Now</Button>
                      </div>

</div>
              </nav>

            </header>
        </>
    )
}

export default TopNav;