import React from 'react'

const Cards = ({ actor }) => {
    return (
        <>
            <li>
                <div className="card">
                    <img src={actor.image} alt={actor.name} />
                    <h3>{actor.name}</h3>
                    <p>{actor.birth_year}</p>
                    <p>{actor.nationality}</p>
                    <p>{actor.biography}</p>
                    <h3>Awards:</h3>
                    <ul>
                        {actor.awards.map((award, index) => (
                            <li key={index}>{award}</li>
                        ))}
                    </ul>
                </div>
            </li>
        </>
    )
}

export default Cards