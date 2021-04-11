import React from 'react'
import './Outline.scss'
import { Link, Route } from 'react-router-dom'

function Outline(props) {
    // console.log('prp', props)
    return (
        <article className="outline-card">
            <header>
                <Link to={props.to}>
                    <h3>{props.info.head}</h3>
                </Link>
            </header>
            <div className="solid-line"></div>
            <p>
                {props.info.describe}
            </p>
            <div className="more-info">
                <span className="time">
                    {props.info.time}
                </span>
                <span className="read-more">
                    <Link to={props.to}>READ MORE</Link>
                </span>
            </div>
            {/* <ul>
                <li>{props.info.bOrgin ? '原创':'转载'}</li>
                <li>Author: {props.info.author}</li>
                <li>Time: {props.info.time}</li>
                <li>Viewed: {props.info.viewed}</li>
                <li>categories: 
                {
                    props.info.categories.map((text, index) =>
                        <span key={index}> {text} </span>
                )}
                </li>
            </ul> */}
            {/* <p>{props.info.describe}</p> */}
        </article>
    )
    // return(
    //     <Route
    //         path={to}

    //     />
    // )
}

export default Outline