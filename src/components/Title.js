import React from 'react'
import {BiBrightness} from 'react-icons/bi'
import styled from 'styled-components'

function Title({title, subtitle}) {
    return (
        <TitleStyled>
            <div className="title">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
            </div>
            <div className="icon">
                <BiBrightness />
            </div>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    .icon{
        color: #ff0659;
        font-size: 1.5rem;
        svg{
            transition: transform 0.5s ease-in-out;
            &:hover{
                transform: rotate(90deg) scale(1.2);
            }
        }
    }
`

export default Title