import React, {useState} from 'react'
import { Button } from 'bootstrap'

// sidebar dropdown mini menu
export function DropDown1() {

let [clickState, setClickState] = useState(false)

let clickHandler = () => {
    setClickState(!clickState)
    console.log("clicked burger")
}

    return (
        <>
        <div className="DropDownSecContainer" >
            <ul className="DropDownSec1">
                <li>Language</li>
                <li>Sign Up for Email</li>
                <li>Careers</li>
            </ul>

            <ul className='DropDownSec2'>
                <li onClick={clickHandler}>Our Menu</li>
                {clickState === true && <OurMenu/>}
                <li>Download App</li>
                <li>MyMcDonald's Rewards</li>
                <li>Exclusive Deals</li>
                <li>About Our Food</li>
                <li>Locate</li>
                <li>Gift Cards</li>
            </ul>

            <ul className='DropDownSec3'>
                <li>Search</li>
                <li><a>Change your Location</a></li>
            </ul>
            </div>
        </>
    )

}

//////////////////////////////////////
export function OurMenu () {
    return(
<>
    
<button className='btn btn-outline-secondary'>View Full Menu</button>

<ul className="dropMenuContainer">
    <li>
        <img src="" alt="mcgriddle" />
        Breakfast
    </li>
    <li>
        <img src="" alt="bigMac" />
        Burgers
    </li>
    <li>
        <img src="" alt="chickenSandwich.png" />
        Chicken & Fish Sandwiches
    </li>
    <li>
        <img src="" alt="sides.png" />
        McNuggets and Meals
    </li>
    <li>
        <img src="" alt="fries and apples.png" />
        Fries & Sides
    </li>
    <li>
        <img src="" alt="Happy Meal.png" />
        Happy Meal
    </li>
    <li>
        <img src="" alt="coffee.png"/>
        McCafe Coffees
    </li>
    <li>
        <img src="" alt="McCafe.png" />
        McCafe Bakery
    </li>
    <li>
        <img src="" alt="Frapuccino.png" />
        Sweets & Treats
    </li>
    <li>
        <img src="" alt="Soft Drinks.png" />
        Beverages
    </li>
    <li>
        <img src="" alt="Dollar Menu sign.png" />
        $1 $2 $3 Dollar Menu
    </li>
</ul>

</>
)
}