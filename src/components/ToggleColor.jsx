import { useState } from "react";
import '../style.css'

function ToggleColor () {
    const[backgroundColor,setBaclgroundColor] = useState("white");
    const[textColor,setTextColor] = useState("#1b1b1b");
    const[buttonStyle,setButtonStyle] = useState("white");

    function  handleclick () {
        setBaclgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white')
        setTextColor(textColor === '#1b1b1b' ? "#ffa31a" : '#1b1b1b');
        setButtonStyle(buttonStyle === 'white' ? '#1b1b1b' : 'white');

    }

    return (
        <section style={{backgroundColor,color:textColor}}>
            <button onClick={handleclick} style={{buttonStyle,color:textColor, border:`2px solid ${textColor}`}}>
                {backgroundColor == "#1b1b1b" ? "Black Theme": "White Theme"}
            </button>
            <section>
                <h1>Welcome To A <br /> Real World..</h1>
            </section>
        </section>
    )

}

export default ToggleColor;