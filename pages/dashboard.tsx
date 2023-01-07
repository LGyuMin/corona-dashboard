import LineChart from '../component/LineChart'
import styled from 'styled-components'

const ChartWrapper = styled.div<{ height: number }>`
    width: auto;
    height: ${prop => prop.height || 400}px;
    margin: 0 auto;
`

const dashboard = () => {
    return (
      <>
        <div className='title'>코로나 일자별 확진자 수</div>
        <ChartWrapper height={400}>
            <LineChart />
        </ChartWrapper>
      </>
    )
  }
  
  export default dashboard