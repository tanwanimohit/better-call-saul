import React from 'react'
import './style.css'
import img1 from './bcs_logo.png'
import img2 from './bcs_logo_dark.png'

export interface IProps{
    darkMode : boolean;
}

export const Header = (props:IProps) => {
    return (
        <header>
            <h1>
                <img alt="logo" src={props.darkMode ? img2 : img1}/>
            </h1>
        </header>
    )
}
