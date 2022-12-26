import React, { useEffect } from 'react'
import HistoryHeroD from '../photos/OurHistory/history_hero_desktop_1260x560_hero-desktop.jpg'
import HistoryHeroM from '../photos/OurHistory/history_hero_desktop_1260x560_hero-mobile.jpg'
import { Button } from 'react-bootstrap'

function OurHistory () {

// useEffect(() => {
//     window.scrollTo(0,0)
// }, [])

    return (
<>
    <div className='mainContainer'>
        <div className='contentContainer'>
            <img className="imgCenter" src={HistoryHeroD} alt=""></img>
            <div className='mainText'>
                <h1 className='h1h1h1'><strong>
                    test
                </strong></h1>
                <p>
                    1q
                </p>
                <Button variant="warning">
                    Learn More
                </Button>
            </div>
        </div>
    </div>

    {/* TAILWIND sec */}
    <div className='pl-3 pr-3 flex py-20'>
        <div className='flex-col mx-auto'>
            <h1 className='text-5xl pb-7 text-center font-extrabold'>
            Our History
            </h1>
            <img className="" src={HistoryHeroD} alt=""></img>
            <div className='pt-28'>
                <h1 className='text-base pr-48 pl-1'>
                From drive-thru restaurants to Chicken McNuggets to college credits from Hamburger U, we’ve had quite a journey. And we’re still going. But to take a look into our past, we need to share the story of one man.
                </h1>
                <p>
 
                </p>

            </div>
        </div>
    </div>

</>
)
}

export default OurHistory