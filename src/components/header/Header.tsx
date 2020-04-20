import React from 'react'
import './style.css'
import  img1 from './bcs_logo.png'
export const Header = () => {
    return (
        <header>
            <h1>
                <img alt="logo" src={img1}/>
                
            </h1>
        </header>
    )
}
