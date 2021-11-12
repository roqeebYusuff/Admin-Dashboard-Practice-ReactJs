import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
import data from '../RevenueData'
import Title from './Title'
import styled from 'styled-components'

function Revenue() {
    return (
        <RevenueStyled>
            <Title title="$8,793" subtitle="Revenue this week" />
            <div className="graph">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={500} height={400} data={data} >
                        <defs>
                            <linearGradient id="color" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="30%" stopColor="#ff4d6d" stopOpacity={0.4} />
                                <stop offset="85%" stopColor="#ff4d6d11" stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                        <Tooltip cursor={false} />
                        <Area type="monotone" dataKey="data" stroke="#ee3b3b" fill="url(#color)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </RevenueStyled>
    )
}

const RevenueStyled = styled.div`
    height: 100%;
    background-color: #000;
    border-radius: 1rem;
    padding: 1.5rem;
    .graph{
        height: 80%;
    }
`

export default Revenue