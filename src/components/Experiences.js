import React from 'react'

function Experiences({ datas }) {
    return (
        <div className="cursus mb3">
        <h2 className="h2">Expériences Professionelles</h2>
        {datas.map(item => (
            <div className="grid__row" key={item.id}>
              <div className="grid__item">
                <p className="grid__date">{item.date}</p>
                <p className="grid__date">{item.societe}</p>
                <p className="grid__location">{item.location}</p>
              </div>
              <div className="grid__item">
                <h3 className="grid__title">{item.title}</h3>
              
                <ul className="grid__missions" >
                    {item.mission.map( mission => (
                        <li className="grid__mission" key={mission.id}>{mission.title}</li>
                    ))}
                </ul>
              </div>
            </div>      

        ))}
            
    </div>
    )
}

export default Experiences
