import React from 'react'
import styled from 'styled-components'
import MileStones from './MileStones'
import Navbar from './Navbar'
import Revenue from './Revenue'
import StoreVisits from './StoreVisits'

function Dashboard() {
    return (
        <DashboardStyled>
            <Navbar />
            <div className="grid">
                <div className="one">
                    <MileStones />
                </div>
                <div className="two">
                    <Revenue />
                    <StoreVisits />
                </div>
            </div>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    margin-left: 15rem;
    padding: 2rem;
    height: 100%;
    color: #fff;
    .grid{
        margin-top: 3rem;
        height: 100%;
        .one{
            margin: 2rem 0;
        }
        .two{
            height: 70%;
            display: grid;
            grid-template-columns: .6fr 1fr;
            gap: 1rem;
        }
    }

    @media screen and (max-width: 991px) {
        margin: 0;
        padding: 0;
        .grid{
            margin: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .one{
                margin: 0;
                padding: 0;
            }
            .two{
                grid-template-columns: 1fr;
            }
        }
    }
`

export default Dashboard