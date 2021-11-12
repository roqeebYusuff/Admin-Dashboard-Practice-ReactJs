import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {BiBell} from 'react-icons/bi'
import {BiCaretDown} from 'react-icons/bi'
import avatar from '../images/avatar.png'

import styled from 'styled-components'

function Navbar() {
    return (
        <NavbarStyled>
            <div className="title">
                <h2>Dashboard</h2>
                <span>Detailed info about your dashboard</span>
            </div>
            <div className="container">
                <div className="search">
                    <BiSearchAlt />
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="profile">
                    <BiBell className="bell" />
                    <div className="image">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="profile_name">
                        <h4>Alex Bell</h4>
                        <h6>Admin</h6>
                    </div>
                    <BiCaretDown />
                </div>
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    .container{
        display: flex;
        justify-content: space-between;
        .search{
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            padding: .5rem 1rem;
            color: #f94144;
            gap: 1rem;
            font-size: 1.5rem;
            input{
                border: none;
                color: #f94144;
                background-color: #000;
                outline: none;
            }
        }
        .profile{
            display: flex;
            margin-left: 1rem;
            gap: .7rem;
            align-items: center;
            .bell{
                font-size: 1.5rem;
            }
            .image{
                img{
                    height: 2rem;
                }
            }
        }
    }

    @media screen and (max-width: 991px) {
        display: none;
    }
    
`

export default Navbar
