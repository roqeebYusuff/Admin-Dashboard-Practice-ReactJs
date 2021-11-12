import React from 'react'
import styled from 'styled-components'

import milestoneData from '../milestoneData'

function MileStones() {
    return (
        <MileStonesStyled>
            {
                milestoneData.map( (milestone) => {
                    return (
                        <div className="milestone">
                            <div className="icon">
                                <milestone.icon />
                            </div>
                            <div className="detail">
                                <h4>{milestone.title}</h4>
                                <h2>{milestone.value}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </MileStonesStyled>
    )
}

const MileStonesStyled = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #000;
    padding: 1rem;
    border-radius: 1rem;
    .milestone{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-right: 3px solid #f94144;
        padding-right: 4rem;
        &:last-child{
            border-right: none;
        }
        .icon{
            display: flex;
            padding: 1rem;
            font-size: 1.5rem;
            border-radius: 1rem;
            color: #f94144;
            background-color: #f9414442;
        }
        h2{
            color: #f94144;
        }
    }
    @media screen and (max-width: 991px) {
        width: 100%;
        flex-direction: column;
        gap: 1rem;
        .milestone{
            border: none;
            justify-content: flex-start;
        };
    }
`

export default MileStones