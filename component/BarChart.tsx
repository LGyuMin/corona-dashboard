import { ResponsiveBar } from '@nivo/bar'

interface IProp {
    data: any
}

const BarChart = ({data}: IProp) => {
    return (
        <ResponsiveBar
            data={data}
            keys={[
                '0-9',
                '10-19',
                '20-29',
                '30-39',
                '40-49',
                '50-59',
                '60-69',
                '70-79',
                '80 이상',
            ]}
            indexBy="stateDt"
            margin={{ top: 10, right: 60, bottom: 150, left: 60 }}
            padding={0.3}
            layout="horizontal"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'paired' }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 60,
                    itemsSpacing: 1,
                    itemWidth: 60,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
        />
    )
}

export default BarChart