import React, { useEffect, useState } from 'react'
import { ResponsiveLine } from '@nivo/line'

interface IProp {
    data: any
}

const LineChart = ({data}: IProp) => {
  return (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        colors={{ scheme: 'set3' }}
        lineWidth={3}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaOpacity={0}
        useMesh={true}
    />
  )
}

export default LineChart