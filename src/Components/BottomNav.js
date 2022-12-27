//NavBottom, NavUpperBottom

import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import faceBook from '../photos/facebook.png'
import twitter from '../photos/twitter.png'
import youtube from '../photos/youtube.png'
import instagram from '../photos/instagram.png'
import tumblr from '../photos/tumblr.png'
import spotify from '../photos/spotify.png'
import appleBadge from '../photos/app_store_badge.png'
import googleBadge from '../photos/google_play_badge.png'

//When smallMediaQueried vvvvvvvvvvvvvvvv
const Headings = [
    {
        id: 1,
        sec: <div className='NUBminiSection'>
            <div className='NUBminiLeft'>About Us</div>
            <div className='NUBminiRight'>+</div>
        </div>,
        sub: <>
            <Link to="/about-us" className='no-underline'><div>About Us</div></Link>
            <Link to="/our-history"><div>Our History</div></Link>
            <div>Leadership Team</div>
            <div>Values In Action</div>
            <div>Franchise Info</div>
            <div>Recalls & Alerts</div>
            <div>Real Estate</div>
            <div>Accessibility</div>
            <div>Investor Relations</div>
            <div>News & Notifications</div>
        </>,
    },
    {
        id: 2,
        sec: <div className='NUBminiSection' >
            <div className='NUBminiLeft'>Services</div>
            <div className='NUBminiRight'>+</div>
        </div>,
        sub:
            <>
                <Link to="/services"><li>Services Overview</li></Link>
                <li>Wi-Fi</li>
                <li>PlayPlaces & Parties</li>
                <li>McDelivery®</li>
                <li>Mobile Order & Pay</li>
                <li>Trending Now</li>
                <li>McDonald's Merchandise</li>
                <li>Family Fun Hub</li>
                <li>MyMcDonald's Rewards</li>
                <li>McCafé®</li>
            </>,

    },
    {
        id: 3,
        sec: <div className='NUBminiSection'>
            <div className='NUBminiLeft'>Community</div>
            <div className='NUBminiRight'>+</div>
        </div>,
        sub:
            <>
                <li>Community</li>
                <li>HACER® Scholarships for Hispanic Students</li>
                <li>Ronald McDonald House Charities</li>
                <li>McDonald's Asian Pacific American</li>
                <li>McDonald's International</li>
                <li>Black and Positively Golden</li>
                <li>McDonald's LGBTQ+</li>
            </>
    },
    {
        id: 4,
        sec: <div className='NUBminiSection'>
            <div className='NUBminiLeft'>Contact Us</div>
            <div className='NUBminiRight'>+</div>
        </div>,
        sub:
            <>
                <li>Contact Us</li>
                <li>Gift Card FAQs</li>
                <li>Donations</li>
                <li>Employment</li>
                <li>Customer Feedback</li>
                <li>Frequently Asked Questions</li>
            </>
    }
]


export function NavUpperBottomMini() {

    const [clickState, setClickState] = useState(false)

//vvvvvvvv from codesandbox
const clickHandler = (index) => {
console.log('clicked')

    if (clickState === index) {
        setClickState(false);
    } else {
        setClickState(index);
    }
}


// const listById = Headings.filter (x => x.id ===x)

//for returning things that === 'place4' on Headings array
// const subItems = Headings.filter(x => x.place ==='place4');
// const subReturn = subItems.map(x => <>{x.place}</>)


    return (
        <>
            <div className='NUBminiContainer'>

                {Headings.map((x, index) =>
                (
                    <ul>
                        <div onClick={() => clickHandler(index)}>
                            {x.sec}
                   <div className={clickState === index ? 'content show' : 'content'}>
                        {x.sub}
                   </div>
                            {/* {
                                index === clickState ?
                                    (
                                        Headings.map((x, index) => 
                                        (
                                            <ul>
                                                <div>
                                                    {x.sub}
                                                </div>
                                            </ul>
                                        )))
                                    : null
                            } */}
                        </div>
                    </ul>
                )

                )}


                {/* <div onClick={clickHandler} className='NUBminiSection'>
                    <div className='NUBminiLeft'>About Us</div>
                    <div className='NUBminiRight'>+</div>
                    {clickState ? 'penis' : null}
                </div>

                <div onClick={clickHandler} className='NUBminiSection' >
                    <div className='NUBminiLeft'>Services</div>
                    <div className='NUBminiRight'>+</div>
                </div>

                <div onClick={clickHandler} className='NUBminiSection'>
                    <div className='NUBminiLeft'>Community</div>
                    <div className='NUBminiRight'>+</div>
                </div>

                <div onClick={clickHandler} className='NUBminiSection'>
                    <div className='NUBminiLeft'>Contact Us</div>
                    <div className='NUBminiRight'>+</div>
                </div> */}

            </div>
        </>
    )

}


// shown largeMediaQueried vvvvvvvvvvvvvvvvvv
export function NavUpperBottom() {
    return (
<>
    <div className='NavUpperBottomContainer'>

                <div className='NavUpperBottomSection'>
                <ul>
                  <li className="NavUpperBottomStart"><strong>About Us</strong></li>
                  <Link to="/about-us"><li>About Us</li></Link>
                  <Link to="/our-history"><li>Our History</li></Link>
                    <li>Leadership Team</li>
                    <li>Values In Action</li>
                    <li>Franchise Info</li>
                    <li>Recalls & Alerts</li>
                    <li>Real Estate</li>
                    <li>Accessibility</li>
                    <li>Investor Relations</li>
                    <li>News & Notifications</li>
                </ul>

                </div>
                <div className='NavUpperBottomSection'>
                    <ul>
                    <li className="NavUpperBottomStart"><strong>Services</strong></li>
                    <Link to="/services"><li>Services Overview</li></Link>
                    <li>Wi-Fi</li>
                    <li>PlayPlaces & Parties</li>
                    <li>McDelivery®</li>
                    <li>Mobile Order & Pay</li>
                    <li>Trending Now</li>
                    <li>McDonald's Merchandise</li>
                    <li>Family Fun Hub</li>
                    <li>MyMcDonald's Rewards</li>
                    <li>McCafé®</li>
                    </ul>

                </div>
                <div className='NavUpperBottomSection'>
                    <ul>
                    <li className="NavUpperBottomStart"><strong>Community</strong></li>
                    <li>Community</li>
                    <li>HACER® Scholarships for Hispanic Students</li>
                    <li>Ronald McDonald House Charities</li>
                    <li>McDonald's Asian Pacific American</li>
                    <li>McDonald's International</li>
                    <li>Black and Positively Golden</li>
                    <li>McDonald's LGBTQ+</li>
                    </ul>

                </div>
                <div className='NavUpperBottomSection'>
                    <ul>
                    <li className="NavUpperBottomStart"><strong>Contact Us</strong></li>
                        <li>Contact Us</li>
                        <li>Gift Card FAQs</li>
                        <li>Donations</li>
                        <li>Employment</li>
                        <li>Customer Feedback</li>
                        <li>Frequently Asked Questions</li>
                    </ul>

                </div>
    </div>

<div className='NavUpperBottomIcons'>
<ul className='NUBleft'>
    <li><img src={faceBook} alt='facebook.png'/></li>
    <li><img src={twitter} alt='twitter.png'/></li>
    <li><img src={youtube} alt='youtube.png'/></li>
    <li><img src={instagram} alt='instagram.png'/></li>
    <li><img src={tumblr} alt='tumblr.png'/></li>
    <li><img src={spotify} alt='spotify.png'/></li>
</ul>
    
<ul className='NUBright'>
<li><img src={appleBadge} alt='appleBadge.png'/></li>
<li><img src={googleBadge} alt='googleBadge.png'/></li>
</ul>


</div>


    
</>

    )

}



export function NavBottom() {
    return (
<>
    <nav className='navbarBottom'>
        <div className='navbarBottomCenter verySmall'>Privacy (updated)</div>
        <ul className='navList verySmall'>
            <li>California Privacy Notice</li>
            <li>Terms & Conditions</li>
            <li>Accessibility</li>
            <li>Do Not Sell or Share My Personal Information</li>
            <li>Cookie Settings</li>
        </ul>
    </nav>
</>
    )
}


