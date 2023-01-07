import { useEffect, useState } from 'react'
import styled, { StyledComponent } from 'styled-components'
import axios from 'axios'
import LineChart from './LineChart'
import Loading from './Loading'

const StyledDiv = styled.div`
    position: relative;
`

interface IProp {
    ChartWrapper: StyledComponent<"div", any, {
        height: number;
    }, never>
}

const DailyChart = ({ChartWrapper}: IProp) => {
    const [ chartData, setChartData ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('/api/daily_case')
        .then(res => {
            setChartData(res.data.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <StyledDiv>
            {
                loading && <Loading />
            }
            <div className='title'>코로나 일자별 확진자 수</div>
            <ChartWrapper height={400}>
                <LineChart data={chartData} />
            </ChartWrapper>
        </StyledDiv>
    )
}

export default DailyChart