import { useEffect, useState } from 'react';
import styled, { StyledComponent } from 'styled-components'
import axios from 'axios'
import BarChart from './BarChart'
import PieChart from './PieChart'
import Loading from './Loading'

const StyledDiv = styled.div`
    display: flex;
    position: relative;
    border-top: 1px solid rgba(204, 204, 204, 0.5);
    .covid-case-box {
        width: 50%;
        &:first-child {
            border-right: 1px solid rgba(204, 204, 204, 0.5);
        }
    }
    .title {
        padding-bottom: 0;
        line-height: 52px;
    }
`

interface IProp {
    ChartWrapper: StyledComponent<"div", any, {
        height: number;
    }, never>
}

const AgeGenChart = ({ChartWrapper}: IProp) => {
    const [barChartData, setBarChartData] = useState([])
    const [pieChartData, setPieChartData] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('/api/age_gen_case')
        .then(res => {
            setBarChartData(res.data.ageChartData)
            setPieChartData(res.data.genChartData)
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
            <div className='covid-case-box'>
                <div className="title">일자별 연령대 확진자 수</div>
                <ChartWrapper height={400}> 
                    <BarChart data={barChartData} />
                </ChartWrapper>
            </div>
            <div className='covid-case-box'>
                <div className="title">일자별 성별 확진자 수</div>
                <ChartWrapper height={400}> 
                    <PieChart data={pieChartData} />
                </ChartWrapper>
            </div>
        </StyledDiv>
    )
}

export default AgeGenChart