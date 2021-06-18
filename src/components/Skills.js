import React from 'react'
import './Skills.css'
// import Skill from './Skill'
import Interests from './Interests'

function Skills() {
    return (
        <>
            <div className="skills">
                <h2 className="h2">Compétences</h2> {/*  compétence -skills */}
                <div className="skills-imgs">
                    <img src="./images/html.png" alt="" />
                    <img src="./images/css.png" alt="" />
                    <img src="./images/js.png" alt="" />
                    <img src="./images/react.png" alt="" />
                    <img src="./images/nodejs.png" alt="" />
                    <img src="./images/mysql.png" alt="" />
                    <img src="./images/mongo.png" alt="" />
                </div>
                {/* <Skill title="HTML/CSS" rating="5" />            
                <Skill title="JAVASCRIT" rating="4" />
                <Skill title="REACT" rating="3" />
                <Skill title="NODE.JS" rating="3" />
                <Skill title="MYSQL" rating="3" /> */}
            </div>
            <div className="skills">
                <h2 className="h2">Langues</h2>  {/*  langues -skills*/}
                <div className="skills-langues">
                    <img src="./images/francaise.png" alt="" />
                    <img src="./images/chinois.png" alt="" />
                    <img src="./images/english.png" alt="" />
                    <img src="./images/cantonais.png" alt="" />
                </div>
                {/* <Skill title="Francaise" rating="3" />
                <Skill title="Anglais" rating="3" />
                <Skill title="Chinois" rating="5" />
                <Skill title="Cantonais" rating="5" /> */}
            </div>
            <Interests />     {/*  centres d'intérets - interests*/}
            
           
       
        </>
    )
}

export default Skills
