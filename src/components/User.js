import React from 'react'
import './Users.css'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
/* import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange'; */
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function User() {
    return (
        <div className="user">
            <img src="./images/Photo.jpg" alt="" className="user__img"/>
            <h1 className="user__name">Chun Cheung DURET</h1>
            <p className="user__profession">Développeur Web</p>
            <div className="user__infos">   {/*  détails personnels -User */}
                <p className="user__info">
                    <PhoneAndroidIcon /><a href="tel:+33751697562">+33 751697562</a>
                </p>
                <p className="user__info"><HomeIcon />14 rue claude bernard sartrouville 78500</p>
                <p className="user__info">
                    <MailOutlineIcon /><a href="mailto:chuncheung.ku@gmail.com">chuncheung.ku@gmail.com</a>
                </p>
                {/* <p className="user__info"><DateRangeIcon />Date naissance: 19 Octobre 1984</p> */}
                {/* <p className="user__info"><LocationOnIcon />Lieu de naissance: Chine</p> */}
                <p className="user__info"><GitHubIcon />
                   <a href="https://github.com/rachel-duret">https://github.com/rachel-duret</a>
                </p>
                <p className="user__info"><LinkedInIcon />
                    <a href="https://www.linkedin.com/in/rachelduret/">https://www.linkedin.com/in/rachelduret</a>
                </p>
            </div>
            
        </div>
    )
}

export default User
