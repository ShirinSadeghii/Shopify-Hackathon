import { useState } from "react";
import './clickscomponent.scss';

function ClicksComponent() {

const [showClicked, setShowClicked] = useState({});

const handleClick = (buttonName) => {
    setShowClicked(prevState => ({
        ...prevState, [buttonName]: !prevState[buttonName]
    }));
}

    return (
        <>
        <div>
            <div className="">
                <button className={showClicked['Accounting'] ? "active" : ""} 
                    onClick={() => handleClick('Accounting')}>Accounting</button>
                <button className={showClicked['Legal']  ? "active" : ""} 
                    onClick={() => handleClick('Legal')}>Legal</button>
                <button className={showClicked['Marketing'] ? "active" : ""} 
                    onClick={() => handleClick('Marketing')}>Marketing</button>
            </div>
            <div>
                <button className={showClicked['Shipping'] ? "active" : ""} 
                    onClick={() => handleClick('Shipping')}>Shipping</button>
                <button className={showClicked['Development'] ? "active" : ""} 
                    onClick={() => handleClick('Development')}>Development</button>
                <button className={showClicked['Logistics'] ? "active" : ""} 
                    onClick={() => handleClick('Logistics')}>Logistics</button>
            </div>
        </div>
        <p>Any specific tools you'd like help with?</p>
        <div>
            <div>
                <button className={showClicked['Themes'] ? "active" : ""} 
                    onClick={() => handleClick('Themes')}>Themes</button>
                <button className={showClicked['Shipping2'] ? "active" : ""} 
                    onClick={() => handleClick('Shipping2')}>Shipping</button>
                <button className={showClicked['Marketing2'] ? "active" : ""} 
                    onClick={() => handleClick('Marketing2')}>Marketing</button>
            </div>
            <div>
                <button className={showClicked['Theme Design'] ? "active" : ""} 
                    onClick={() => handleClick('Theme Design')}>Theme Design</button>
                <button className={showClicked['Development2'] ? "active" : ""} 
                    onClick={() => handleClick('Development2')}>Development</button>
                <button className={showClicked['Logistics2'] ? "active" : ""} 
                    onClick={() => handleClick('Logistics2')}>Logistics</button>
            </div>
        </div>
        <p>What Language are you comfortable with?</p>
        <div>
            <button className={showClicked['English'] ? "active" : ""} 
                    onClick={() => handleClick('English')}>English</button>
            <button className={showClicked['Spanish'] ? "active" : ""} 
                    onClick={() => handleClick('Spanish')}>Spanish</button>
            <button className={showClicked['French'] ? "active" : ""} 
                    onClick={() => handleClick('French')}>French</button>
        </div>
        </>
    )
    
       
}

export default ClicksComponent