import React from 'react'

function Links({links}) {
    return (
        <ul>
            {
                links.map((link) => {
                    return (
                        <li className={link.active ? "active": ""}>
                            <a href="#">
                                <link.icon />
                                {link.text}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Links