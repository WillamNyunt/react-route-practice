import React from 'react'
import { NavLink } from 'react-router-dom'

export default function (props) {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={({isActive}) => isActive}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/events'>Events</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
