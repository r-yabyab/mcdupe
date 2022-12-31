import '../App.css';
import React, { useState } from 'react'
import {DropDown1, OurMenu} from './DropDownBar';
import Button from 'react-bootstrap/Button';
import goldCard from '../photos/1pub_McGoldCard_1168x520.jpg'
import sznSharing from '../photos/1pub_DecemberTentpole_HP_Deals_1168x520.jpg'
import myRewards from '../photos/1pub_McDeliveryintheApp_Launch_1168x520.jpg';
import Dorado from '../photos/1PUB_Spotlight_Dorado_1168x520.jpg'
import Scholarship from '../photos/1PUB_BAPG_Scholars_EDU_1168x520.jpg'
import McDelivery from '../photos/1PUB_McDelivery_v4_1168x520.jpg'
import DealsForDays from '../photos/1PUB_Desktop_Deals-v1_1168x520.jpg'

function HomePage() {

return (
  <>

      {/* 1st section */}
      <div className='mainContainer'>

        {/* <div className='contentContainer'>
          <img className="imgCenter" src={goldCard} alt="gold card.jpg"></img>
          <div className='mainText'>
            <h1 className='h1h1h1'><strong>You Could Win Free McDonald's for Life</strong></h1>
            <p>
              Yes, the McGold Card is real—and you could win one, plus three
              more to share with friends, just by ordering with the app. Enter
              once a day to up your chances. You must be opted in to MyMcDonald's
              Rewards to enter via the app.
            </p>
            <h2><strong>3 Ways to Enter:</strong></h2>
            <ul>
              <li>Mobile Order & Pay using ou rapp for pickup or McDelivery®</li>
              <li>Scan or share your code at the kiosk, counter or Drive Thru</li>
              <li>Redeem a deal or redeem a reward for free food</li>
            </ul>

            <p className='verySmall'>
              *At participating McDonald's for a limited time.
              While supplies last. Excludes delivery. Refer to McDonald's for Life Sweeps
              Rules for no purchase instructions. McDonald's for Life based on 2
              meals/week for 50 yrs. No purchase necessary. 50 US/DC, 16+. Sweepstakes
              ends 12/25 11:59pm. Purchase entry only available using McD app. Must be opted
              into MyMcDonald's Rewards.
            </p>

            <Button variant="warning">Order with the App</Button>
          </div>
        </div> */}
        {/* 2nd section */}

        {/* <div className='contentContainer'>
          <img className="imgCenter" src={sznSharing} alt="szn Sharing.jpg"></img>
          <div className='mainText'>
            <h1 className='h1h1h1'><strong>Unwrap Deals, Merch & Prizes in the App</strong></h1>
            <p>
              Enjoy three weeks of app deals, plus get access to exclusive merch
              and the chance to win the best gift of all... free McDonald’s for life.
              That’s the SZN of Sharing. Join the festivities, only with the app 12/5–12/25.
            </p>
            <p className='verySmall'>
              *At participating McDonald's for a limited time. While supplies last.
              Excludes delivery. Refer to McDonald's for Life Sweeps Rules for no
              purchase instructions. McDonald’s for Life based on 2 meals/week for 50
              yrs. No purchase necessary. 50 US/DC, 16+. Sweepstakes ends 12/25 11:59pm.
              Purchase entry only available using McD app. Must be opted into MyMcDonald’s
              Rewards.
            </p>

            <Button variant="warning">Order with the App</Button>
          </div>
        </div> */}

        {/* 3rd section */}
        <div className='contentContainer'>
          <img className="imgCenter" src={myRewards} alt="my Rewards.jpg"></img>
          <div className='mainText'>
            <h1 className='h1h1h1'><strong>Straight to the Points: McDelivery® in the App</strong></h1>
            <p>
              The McDonald’s app is now the only place you’ll earn MyMcDonald’s Rewards
              points on every McDelivery order. Plus, you can get those free McDonald’s
              rewards you earn delivered, too. Just order, relax and enjoy—we’ll bring
              your faves to you.*
            </p>
            <p className='verySmall'>
              *At participating McDonald's. Only in the app. App registration required.
              Must be opted into MyMcDonald's Rewards.
            </p>

            <Button variant="warning">Earn Points On McDelivery</Button>
          </div>
        </div>

        {/* 3rd section TAILWIND */}
        {/* <div className='flex mb-32'>
          <img className="relative w-[65.6%] h-[100%] box-border ml-[7px] pr-[15px]" src={myRewards} alt="my Rewards.jpg"></img>
          <div className='relative flex-auto w-[34.4%] pr-[15px] pl-[15px]'>
            <h1 className='font-extrabold text-[32px]'>Straight to the Points: McDelivery® in the App</h1>
            <p>
              The McDonald’s app is now the only place you’ll earn MyMcDonald’s Rewards
              points on every McDelivery order. Plus, you can get those free McDonald’s
              rewards you earn delivered, too. Just order, relax and enjoy—we’ll bring
              your faves to you.*
            </p>
            <p className=''>
              *At participating McDonald's. Only in the app. App registration required.
              Must be opted into MyMcDonald's Rewards.
            </p>

            <Button variant="warning">Earn Points On McDelivery</Button>
          </div>
        </div> */}


      {/* 4th Section Latino */}
      <div className='contentContainer'>
          <img className="imgCenter" src={Dorado} alt="my Rewards.jpg"></img>
          <div className='mainText'>
            <h1 className='h1h1h1'><strong>Your Story Deserves a Hollywood Ending</strong></h1>
            <p>
            Latinos have stories to tell, yet they make up less than 1% of the ones told 
            in Hollywood. As a champion of the Hispanic community McDonald’s wants to 
            help change that. With <strong>Spotlight Dorado</strong>, McDonald’s is giving aspiring Latino 
            filmmakers a chance to participate in a short film competition. Aspiring 
            filmmakers will bring their vision to life having their story produced into 
            a short film with invaluable mentorship from renowned industry leaders and a 
            chance to showcase their film in film festivals around the country.
            </p>

            <Button variant="warning">Learn More About Spotlight Dorado</Button>
          </div>
        </div>

      {/* 5th Section */}

      <div className='contentContainer'>
          <img className="imgCenter" src={Scholarship} alt="my Rewards.jpg"></img>
          <div className='mainText'>
            <h1 className='h1h1h1'><strong>McDonald’s Black and Positively Golden Scholarship Program Awards $1,000,000 in Scholarships</strong></h1>
            <p>
            McDonald’s Black and Positively Golden Scholarship Program awards 
            $1,000,000 in scholarships to students attending Historically Black 
            Colleges and Universities (HBCUs) in partnership with the Thurgood 
            Marshall College Fund (TMCF). Apply now through March 27th at TMCF.org.
            </p>

            <Button variant="warning">Apply Now</Button>
          </div>
        </div>

      {/* 5th Section */}

      <div className='contentContainer'>
          <img className="imgCenter" src={McDelivery} alt="my Rewards.jpg"></img>
          <div className='mainText'>
            <h1 className='h1h1h1'><strong>Order McDelivery® Now*</strong></h1>
            <p>
            Get all your McDonald’s favorites delivered right to your doorstep 
            with McDelivery® on Uber Eats, DoorDash or Grubhub.
            </p>

            <p className='verySmall'>
            *At participating McDonald’s. Prices may be higher than at 
            restaurants. Delivery/service fees apply
            </p>

            <Button variant="warning">Order McDelivery Now</Button>
          </div>
        </div>

      {/* Last Section */}

      <div className='contentContainer'>
          <img className="imgCenter" src={DealsForDays} alt="my Rewards.jpg"></img>
          <div className='mainText'>
            <h1 className='h1h1h1'><strong>Deals for Days</strong></h1>
            <p>
            Get exclusive deals on your McDonald’s favorites in the app 
            with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.
            </p>

            <p className='verySmall'>
            *Mobile Order & Pay at participating McDonald’s.
            </p>

            <Button variant="warning">Get App Deals</Button>
          </div>
        </div>

{/* end body */}

</div>

    </>
  );
}

export default HomePage;
