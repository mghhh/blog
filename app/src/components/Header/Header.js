import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import justgopng from '../../assets/just-go.png'
// class Header extends Component {
//     render() {
//         return (
//             <header>

//             </header>
//         )
//     }
// }
function Header(props) {
    const list = ['Vue', 'React', 'Angularjs']    
    return (
    <div className="header-parent">
        <header className="header container">
            <img src={justgopng}/>
            <ul className="">
                {list.map((text, index) =>
                    <li key={index}>
                        <Link to={`/zhuanlan/${index}`}>{text}</Link>
                    </li>
                )}
            </ul>
        </header>
    </div>
    )
}

export default Header