import DailyChart from '../component/DailyChart'
import AgeGenChart from '../component/AgeGenChart'
import styled from 'styled-components'

const ChartWrapper = styled.div<{ height: number }>`
    width: auto;
    height: ${prop => prop.height || 400}px;
    margin: 0 auto;
`

const dashboard = () => {
    return (
        <>
            <DailyChart ChartWrapper={ChartWrapper} />
            <AgeGenChart ChartWrapper={ChartWrapper} />
        </>
    )
  }
  
  export default dashboard