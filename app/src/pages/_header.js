import React from 'react'
import HeaderBase from '../components/Header/Header.js'

function Header(props) {
    const list = ['Vue', 'React', 'Angularjs']
    return (
        <div>
            <HeaderBase list = {list}/>
        </div>
    )
}

export default Header