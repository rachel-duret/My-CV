import React from 'react'
import './Skills.css'


function Interests() {
    return (
        <div className="skill-interests">
            <h2 className="h2">Centres d'intéréts</h2>
            <div className="interests">
            <img src="./images/img-web.png" alt="" />
            <img src="./images/img-couture.png" alt="" />
            <img src="./images/img-tricoter.png" alt="" />
            <img src="./images/img-jardinage.png" alt="" />
            <img src="./images/img-bricolage.png" alt="" />

            </div>
            
            
           {/*  <ul>
                <li>Informatique</li>
                <li>Création</li>
                <li>Couture</li>
                <li>Jardinage</li>
                <li>Bricolage</li>
            </ul>
             */}
        </div>
    )
}

export default Interests
