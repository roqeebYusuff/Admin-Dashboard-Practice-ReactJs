import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import {RiGroupLine} from 'react-icons/ri'
import data from '../StoreVisitsData'
import Title from './Title'
import styled from 'styled-components'

function StoreVisits() {
    return (
        <StoreVisitsStyled>
            <Title title="Store Visits" subtitle="Details about your store visits" />
            <div className="analytics">
                <div className="icon">
                    <RiGroupLine />
                </div>
                <div className="content">
                    <div className="title">
                        <h4>Pro Analytics</h4>
                        <span>$112/mo</span>
                    </div>
                    <BiChevronRight />
                </div>
            </div>
            <div className="progress-bars">
                {
                    data.map( (d) => {
                        return(
                            <div className="progress-bar">
                                <div className="title">
                                    <h5>{d.title}</h5>
                                    <h5>{d.value}</h5>
                                </div>
                                <progress value={d.value} max="100" />
                            </div>
                        )
                    })
                }
            </div>
        </StoreVisitsStyled>
    )
}

const StoreVisitsStyled = styled.div`
    height: 100%;
    background-color: #000;
    border-radius: 1rem;
    padding: 1.4rem 2rem;
    .analytics{
        display: flex;
        align-items: center;
        gap: 1rem;
        .icon{
            padding: 1rem;
            font-size: 1.5rem;
            border-radius: 1rem;
            background-color: #f9414442;
            color: #f94144;
        }
        .content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .title{
                span{
                    color: #f94144;
                    font-weight: 900;
                }
            }
            svg{
                color: #f94144;
                font-size: 2rem;
            }
        }
    }
    .progress-bars{
        margin-top: 2rem;
        .progress-bar{
            margin-bottom: 1rem;
            .title{
                display: flex;
                justify-content: space-between;
            }
            progress{
                width: 100%;
                height: .5rem;
                -webkit-appearance: none;
                &::-webkit-progress-bar{
                    border-radius: 1rem;
                    background-color: #f9414449;
                }
                &::-webkit-progress-value{
                    border-radius: 1rem;
                    background-color: #f94144;
                }
            }
        }
    }
`

export default StoreVisits