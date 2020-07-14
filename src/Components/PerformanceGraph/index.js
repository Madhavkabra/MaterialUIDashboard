import React from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function PerformanceGraph() {
  var config = {
    chart: {
      type: 'areaspline',
      backgroundColor: 'transparent',
    },
    title: {
      text: null
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        "Aug",
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
    },
    yAxis: {
      title: {
        text: null
      },
    },
    tooltip: {
      shared: true,
      pointFormat: 'Income: {point.y}'
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
      },
      series: {
        color: '#8A85FF',
        fillColor: {
          linearGradient: [0, 0, 100, 500],
          stops: [
            [0, '#8A85FF'],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        }
      }
    },
    series: [{
      lineWidth: 3,

      name: null,
      data: [3000, 4000, 3000, 5000, 4000, 6000, 10000, 12000, 9000, 7000, 5000, 2000]
    }],
  }
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={config}
      containerProps={{ style: { height: "420px" } }}
    />
  )
}

export default PerformanceGraph
