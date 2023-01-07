import { useEffect, useState } from 'react';
import styled, { StyledComponent } from 'styled-components'
import BarChart from '../component/BarChart'
import PieChart from '../component/PieChart'
import axios from 'axios';
import { NextResType } from '../pages/api/age_gen_case';

const StyledDiv = styled.div`
    display: flex;
    border-top: 1px solid rgba(204, 204, 204, 0.5);
    >div {
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
    useEffect(() => {
        axios.get('/api/age_gen_case')
        .then(res => {
            setBarChartData(res.data.ageChartData)
            setPieChartData(res.data.genChartData)
        })
        .catch(err => {
            console.log(err); 
        })
    }, [])
    

    return (
        <StyledDiv>
            <div>
                <div className="title">일자별 연령대 확진자 수</div>
                <ChartWrapper height={400}> 
                    <BarChart data={barChartData} />
                </ChartWrapper>
            </div>
            <div>
                <div className="title">일자별 성별 확진자 수</div>
                <ChartWrapper height={400}> 
                    <PieChart data={pieChartData} />
                </ChartWrapper>
            </div>
        </StyledDiv>
    )
}

export default AgeGenChart