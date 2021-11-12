import React from 'react'
import {BiRocket} from 'react-icons/bi'
import link1 from '../link1'
import link2 from '../link2'
import Links from './Links'
import styled from 'styled-components'

function Sidebar() {
    return (
        <SidebarStyled>
            <div className="brand">ShopStore</div>
            <div className="links">
                <Links links={link1} />
                <Links links={link2} />
            </div>
            <div className="pro">
                <div className="image">
                    <BiRocket />
                </div>
                <h3>ShopStop Pro</h3>
                <h5>Get access to all features on ShopStop</h5>
                <button>Get Pro</button>
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.aside`
    position: fixed;
    width: 15rem;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .brand{
        color: #f94144;
        font-size: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
        font-weight: 900;
    }
    .links{
        ul{
            margin-bottom: 3rem;
            .active{
                border-right: 0.3rem solid #f94144;
                a{
                    color: #f94144;
                }
            }
            li{
                border-right: .3rem solid transparent;
                margin: 1rem 0;
                list-style: none;
                a{
                    margin: 0 3rem;
                    text-decoration: none;
                    color: rgb(93, 93, 145);
                    font-size: 1.1rem;
                    display: flex;
                    gap: 1rem;
                }
                transition: 0.3s ease-in-out;
                &:hover{
                    border-right-color: #f94144;
                    a{
                        color: #f94144;
                    }
                }
            }
        }
    }
    .pro{
        background-color: #f94144;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: .6rem;
        margin: 0 2rem;
        border-radius: 2rem;
        padding: 1rem;
        .image{
            svg{
                font-size: 2rem;
            }
        }
        button{
            color: #f94144;
            font-weight: 900;
            padding: .5rem 1rem;
            border: none;
            border-radius: 2rem;
        }
    }

    @media screen and (max-width: 991px) {
        position: initial;
        width: 100%;
        .pro, .links{
            display: none;
        }
    }
`

export default Sidebar