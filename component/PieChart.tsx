import { ResponsivePie } from '@nivo/pie'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

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
            <div>
                <select onChange={changeHadler}>
                    {
                        Object.keys(data).map(item => (
                            <option value={item} key={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <ResponsivePie
                data={data[selectedDate] || []}
                margin={{ top: 0, right: 80, bottom: 80, left: 80 }}
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
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
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