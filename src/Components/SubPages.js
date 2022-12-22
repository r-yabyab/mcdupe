import React from 'react'
import {AboutUsHeroD} from '../photos/SubPhotos/About_Us_Hero_1260x560_Desktop_hero-desktop.jpg'
import {AboutUsHeroM} from '../photos/SubPhotos/About_Us_Hero_1260x560_Desktop_hero-mobile.jpg'
import {FranchiseD} from '../photos/SubPhotos/Franchise_Info_2Col_1110x740_Desktop_2-column-desktop.jpg'
import {FranchiseM} from '../photos/SubPhotos/Franchise_Info_2Col_1110x740_Desktop_2-column-mobile.jpg'
import {InvestorD} from '../photos/SubPhotos/Investor_Relations_2Col_1110x740_Desktop_2-column-desktop.jpg'
import {InvestorM} from '../photos/SubPhotos/Investor_Relations_2Col_1110x740_Desktop_2-column-mobile.jpg'
import {LeadershipD} from '../photos/SubPhotos/Leadership_Team_2Col_1110x740_Desktop_2-column-desktop.jpg'
import {LeadershipM} from '../photos/SubPhotos/Leadership_Team_2Col_1110x740_Desktop_2-column-mobile.jpg'
import {NewsNotificationsD} from '../photos/SubPhotos/News_Notifications_2Col_1110x740_Desktop_2-column-desktop.jpg'
import {NewsNotificationsM} from '../photos/SubPhotos/News_Notifications_2Col_1110x740_Desktop_2-column-mobile.jpg'
import {OurHistoryD} from '../photos/SubPhotos/Our_History_2Col_1110x740_Desktop_2-column-desktop.jpg'
import {OurHistoryM} from '../photos/SubPhotos/Our_History_2Col_1110x740_Desktop_2-column-mobile.jpg'
import {RecallsD} from '../photos/SubPhotos/Recalls_2Col_1110x740_Desktop_2-column-desktop.jpg'
import {RecallsM} from '../photos/SubPhotos/Recalls_2Col_1110x740_Desktop_2-column-mobile.jpg'
import {ValueInActionD} from '../photos/SubPhotos/Value_In_Action_2Col_1110x740_Desktop_2-column-desktop.jpg'
import {ValueInActionM} from '../photos/SubPhotos/Value_In_Action_2Col_1110x740_Desktop_2-column-mobile.jpg'

//TODO
//add Mobile Queried images
export function AboutUs () {
    <>
        {/* INITIAL SECTION */}
        <div className='mainContainer'>
            <div className='contentContainer'>
                <img className="imgCenter" src={AboutUsHeroD} alt=""></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Our story starts with one man.
                    </strong></h1>
                    <p>
                    Back in 1954, a man named Ray Kroc discovered a small burger restaurant in California, and wrote the first page of our history. From humble beginnings as a small restaurant, we're proud to have become one of the world's leading food service brands with more than 36,000 restaurants in more than 100 countries.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        {/* Next Section */}

        <div className='mainContainer'>
            <div className='contentContainer'>
                <img className="imgCenter" src={OurHistoryD} alt=""></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Our History
                    </strong></h1>
                    <p>
                    See how far we’ve come and how we got to now.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        {/* Next Section */}
        <div className='mainContainer'>
            <div className='contentContainer'>
                <img className="imgCenter" src={LeadershipD} alt=""></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Leadership Team
                    </strong></h1>
                    <p>
                    We wouldn’t be here today without our leaders.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        {/* Next Section */}
        <div className='mainContainer'>
            <div className='contentContainer'>
                <img className="imgCenter" src={ValueInActionD} alt=""></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Values in Action
                    </strong></h1>
                    <p>
                    See the steps we take to be a good community leader.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        {/* Next Section */}
        <div className='mainContainer'>
            <div className='contentContainer'>
                <img className="imgCenter" src={InvestorD} alt=""></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Investor Relations
                    </strong></h1>
                    <p>
                    Find out what drives our business and see our reports.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        {/* Next Section */}
        <div className='mainContainer'>
            <div className='contentContainer'>
                <img className="imgCenter" src={NewsNotificationsD} alt=""></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    News & Notifications
                    </strong></h1>
                    <p>
                    Follow us, like us, read about us.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        {/* Next Section */}
        <div className='mainContainer'>
            <div className='contentContainer'>
                <img className="imgCenter" src={FranchiseD} alt=""></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Franchise Info
                    </strong></h1>
                    <p>
                    Learn about Owner/Operator opportunities.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        {/* Next Section */}
        <div className='mainContainer'>
            <div className='contentContainer'>
                <img className="imgCenter" src={RecallsD} alt=""></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Recalls & Alerts
                    </strong></h1>
                    <p>
                    Find urgent consumer alerts and information on recalls here.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>

        {/* Next Section */}
    </>
}