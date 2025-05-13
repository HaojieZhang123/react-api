import React from 'react'

// function to print awards for actors.
// array to map for actors, string to split for actresses
const printAwards = (awards) => {
    if (Array.isArray(awards)) {
        return awards.map((award, index) => (
            <p key={index}>{award}</p>
        ))
    } else {
        return awards.split(',').map((award, index) => (
            <p key={index}>{award}</p>
        ))
    }
}

// same function but with typeof to check if string or array
const printAwards2 = (awards) => {
    if (typeof awards === 'string') {
        return awards.split(',').map((award, index) => (
            <p key={index}>{award}</p>
        ))
    } else {
        return awards.map((award, index) => (
            <p key={index}>{award}</p>
        ))
    }
}

const Cards = ({ element }) => {
    return (
        <>
            <li>
                <div className="card">
                    <div className="card-img">
                        <img src={element.image} alt={element.name} />
                    </div>
                    <div className="card-info">
                        <h3>{element.name}</h3>
                        <p>{element.birth_year}</p>
                        <p>{element.nationality}</p>
                        <p>{element.biography}</p>
                    </div>
                    {/* Actor and actresses have different awards. Array for actors, string for actresses. Can't use map for actresses.
                    
                    <div className="card-award">
                        <h3>Awards:</h3>
                        {element.awards.map((award, index) => (
                            <p key={index}>{award}</p>
                        ))}
                    </div> */}
                    <div className="card-award">
                        <h3>Awards:</h3>
                        {printAwards2(element.awards)}
                    </div>

                </div>
            </li>
        </>
    )
}

export default Cards