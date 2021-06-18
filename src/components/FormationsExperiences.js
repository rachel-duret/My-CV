import React from 'react'
import './FormationsExperiences.css'
import dataFormations from '../datas/Formations'
import dataExperiences from '../datas/Experiences'
import Formations from './Formations'
import Experiences from './Experiences'


function FormationsExperiences() {
    return (
        <>
         <Experiences datas={dataExperiences} />
        <Formations datas={dataFormations} />
       


            
        </>
    )
}

export default FormationsExperiences
