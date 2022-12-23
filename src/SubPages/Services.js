import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import ServicesHero from '../photos/ServicesPhotos/Services_Hero_1260x560_Desktop.jpg'
import WifiD from '../photos/ServicesPhotos/Wifi_3Col_760x508_Desktop_3-column-desktop.jpg'
import WifiM from '../photos/ServicesPhotos/Wifi_3Col_760x508_Desktop_3-column-mobile.jpg'
import ArchCardD from '../photos/ServicesPhotos/Service-Amenties_3PUB_376x252_3-column-desktop.jpg'
import ArchCardM from '../photos/ServicesPhotos/Service-Amenties_3PUB_376x252_3-column-mobile.jpg'
import PlayPlacesD from '../photos/ServicesPhotos/Playplace_3Col_760x510_Desktop_3-column-desktop.jpg'
import PlayPlacesM from '../photos/ServicesPhotos/Playplace_3Col_760x510_Desktop_3-column-mobile.jpg'
import McDeliveryD from '../photos/ServicesPhotos/3_Pub_McDelivery_376x252_3-column-desktop.jpg'
import McDeliveryM from '../photos/ServicesPhotos/3_Pub_McDelivery_376x252_3-column-mobile.jpg'
import MOPD from '../photos/ServicesPhotos/mop_3col_desktop_3-column-desktop.jpg'
import MOPM from '../photos/ServicesPhotos/mop_3col_desktop_3-column-mobile.jpg'
import DownloadD from '../photos/ServicesPhotos/download_3col_desktop_3-column-desktop.jpg'
import DownloadM from '../photos/ServicesPhotos/download_3col_desktop_3-column-mobile.jpg'



export function Services () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>


        {/* INITIAL SECTION */}
            <div className='mainContainerNoQ'>
                
                <div className='contentContainerNoQ'>
                    <h1 className='h1h1h1NoQ'><strong>
                        Services & Amenities
                    </strong></h1>
                    <img className="imgCenterNoQ" src={ServicesHero} alt=""></img>
                    <div className='mainTextNoQ'>
                        <h1 className='h1h1h1'><strong>
                            Let’s make your meal even better.
                        </strong></h1>
                        <p>
                            At McDonald’s we know what you expect from us. And we work hard every day to ensure convenience, friendly service, cleanliness and delicious food. In order to make your experience even better, we have a few services and amenities at McDonald’s restaurants that we know you’ll love.
                        </p>
                    </div>
                </div>
            </div>

        {/* Next Section */}

{/* FLEXBOX DOWN */}
{/* FLEXBOX DOWN */}
{/*  */}

<div className='threeRowContainer'>
    

        {/* INITIAL SECTION */}
        
        <div className='threeRowItems'>
                <img src={WifiD} alt="Wifi.jpg"></img>
                <div>
                    <h1 className='h1h1h1'><strong>
                    Free Wi-Fi
                    </strong></h1>
                    <p>
                    Stay connected at our restaurants.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                    </div> 
                    </div>
          
        

        {/* Next Section */}

                {/* INITIAL SECTION */}
                
        <div className='threeRowItems'>
           
                <img src={ArchCardD} alt="Arch Card.jpg"></img>
                <div>
                    <h1 className='h1h1h1'><strong>
                    Arch Card®: McDonald’s Gift Card
                    </strong></h1>
                    <p>
                    Get a gift—and you can get one for yourself, too. There’s no judging here.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
                </div>
            
        

        {/* Next Section */}

                {/* INITIAL SECTION */}
                
        <div className='threeRowItems'>
            
                <img src={PlayPlacesD} alt="PlayPlaces.jpg"></img>
                <div>
                    <h1 className='h1h1h1'><strong>
                    PlayPlaces & Parties
                    </strong></h1>
                    <p>
                    There’s no party like a McDonald’s party.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
                </div>
            
        
</div>

        {/* Next Section */}

                {/* INITIAL SECTION */}
                
            <div className='contentContainer'>
                <img className="imgCenter" src={McDeliveryD} alt="McDelivery.jpg"></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    McDelivery®
                    </strong></h1>
                    <p>
                    McDonald’s delivers all of your favorites right to your doorstep, plus a little bit more.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        

        {/* Next Section */}


            {/* INITIAL SECTION */}
            
            <div className='contentContainer'>
                <img className="imgCenter" src={MOPD} alt="MOP.jpg"></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Mobile Order & Pay
                    </strong></h1>
                    <p>
                    Use the McDonald’s app to check out local menu prices & deals and to order your favorites.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        

        {/* Next Section */}
        
                {/* INITIAL SECTION */}
                
            <div className='contentContainer'>
                <img className="imgCenter" src={DownloadD} alt="Download.jpg"></img>
                <div className='mainText'>
                    <h1 className='h1h1h1'><strong>
                    Get the App
                    </strong></h1>
                    <p>
                    Download the app for Mobile Order & Pay, MyMcDonald's Rewards* and exclusive offers.
                    </p>
                    <p className='verySmall'>
                    *Program available only at participating McDonald’s. McD app download and registration required.
                    </p>
                    <Button variant="warning">
                        Learn More
                    </Button>
                </div>
            </div>
        

        {/* Next Section */}
    


<div className='threeRowContainer'>
    <div className='threeRowItems'>
    <img src={WifiD} alt="Wifi.jpg"></img>
        <p>Free Wi-Fi</p>
        <p>Stay connected at our restaurants.</p>
    </div>

    <div className='threeRowItems'>
    <img src={WifiD} alt="Wifi.jpg"></img>
        <p>Free Wi-Fi</p>
        <p>Stay connected at our restaurants.</p>
    </div>
    <div className='threeRowItems'>
    <img src={WifiD} alt="Wifi.jpg"></img>
        <p>Free Wi-Fi</p>
        <p>Stay connected at our restaurants.</p>
    </div>
</div>


<div className='threeRowContainer'>
    <div className='threeRowItems'>
    <img src={WifiD} alt="Wifi.jpg"></img>
        <p>Free Wi-Fi</p>
        <p>Stay connected at our restaurants.</p>
    </div>

    <div className='threeRowItems'>
    <img src={WifiD} alt="Wifi.jpg"></img>
        <p>Free Wi-Fi</p>
        <p>Stay connected at our restaurants.</p>
    </div>
    <div className='threeRowItems'>
    <img src={WifiD} alt="Wifi.jpg"></img>
        <p>Free Wi-Fi</p>
        <p>Stay connected at our restaurants.</p>
    </div>
</div>

        </>
    )
}