import React from "react";
import style from './Country.module.css'

// export const Country = ({ country }) => {

//     let a = 10
//     let b = 15
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//     return (
//         <div>
//             <h2>Country: {country.name}</h2>
//             <h2>Population: {country.population}</h2>
//             <h3>Number 1: {26 + 26} </h3>
//             <h3>Number 2: {Math.round(Math.random() * 100)}</h3>


//         </div>
//     )
// }

export const Card = (props) =>{

    return(
        <div className={style.container}>
            <h2>Name: {props.name} </h2>
            <h3>Color: {props.color} </h3>
        </div>
    )
}