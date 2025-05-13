import React from 'react'

const Cards = ({ actor }) => {
    return (
        <>
            <li>
                <div className="card">
                    <div className="card-img">
                        <img src={actor.image} alt={actor.name} />
                    </div>
                    <div className="card-info">
                        <h3>{actor.name}</h3>
                        <p>{actor.birth_year}</p>
                        <p>{actor.nationality}</p>
                        <p>{actor.biography}</p>
                    </div>
                    <div className="card-award">
                        <h3>Awards:</h3>
                        {actor.awards.map((award, index) => (
                            <p key={index}>{award}</p>
                        ))}
                    </div>

                </div>
            </li>
        </>
    )
}

export default Cards