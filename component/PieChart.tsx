import { ResponsivePie } from '@nivo/pie'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    position: relative;

    select {
        position: absolute;
        right: 20px;
        top: 10px;
        z-index: 10;
        border: none;
        padding-right: 5px;
        background: #F8F8F8;
        outline: none;
    }
`

interface IProp {
    data: any
}

const PieChart = ({data}: IProp) => {
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        setSelectedDate(Object.keys(data)[0])
    }, [data])

    const changeHadler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedDate(e.target.value)
    }, [])

    return (
        <>
            <StyledDiv>
                <select onChange={changeHadler}>
                    {
                        Object.keys(data).map(item => (
                            <option value={item} key={item}>{item}</option>
                        ))
                    }
                </select>
            </StyledDiv>
            <ResponsivePie
                data={data[selectedDate] || []}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 40,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                    }
                ]}
            />
        </>
    )
}

export default PieChart