import React, { useEffect, useState } from 'react'
import LineChart from './LineChart'
import { StyledComponent } from 'styled-components'
import axios from 'axios'

interface IProp {
    ChartWrapper: StyledComponent<"div", any, {
        height: number;
    }, never>
}

const DailyChart = ({ChartWrapper}: IProp) => {
    const [ chartData, setChartData ] = useState([]);

    useEffect(() => {
        axios.get('/api/daily_case')
        .then(res => {
            setChartData(res.data.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <div className='title'>코로나 일자별 확진자 수</div>
            <ChartWrapper height={400}>
                <LineChart data={chartData} />
            </ChartWrapper>
        </>
    )
}

export default DailyChart