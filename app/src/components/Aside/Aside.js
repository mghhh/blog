import React from 'react'
import './Aside.scss'
import Me from '../../assets/me.jpg'

function ASide(props) {
    return (
        <aside className="my-aside">
            <div className="to-center">
                <header>关于我</header>
                <img src={Me}/>
                <p className="what">来自九线互联网公司的前端工程师, 佛系程序员始祖</p>
            </div>
        </aside>
    )
}

export default ASide