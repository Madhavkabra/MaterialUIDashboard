import React, { useState } from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Queue from '../../Helper/Queue'

function UserGraph() {
  const data = new Queue();
  const [graphData, setGraphData] = useState([])

  setInterval(() => {
    data.enqueue(Math.ceil(Math.random() * (200 - 100) + 100))
  }, 200)

  setTimeout(() => setInterval(() => {
    data.dequeue()
    setGraphData(data)
  }, 200), 1000)

  let actualData = []

  if (graphData.queue) {
    actualData = graphData.queue.map((data) => [data])
  }


  var config = {
    chartHeight: 300,
    title: {
      text: null
    },
    chart: {
      backgroundColor: 'transparent',
      type: 'column'
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Views: {point.y}'
    },
    plotOptions: {
      series: {
        pointWidth: 10,
        borderRadius: 10,
        borderWidth: 0,
        color: '#8A85FF'
      },
    },
    series: [{
      // data: actualData,
      data: [[120],[110],[140],[170],[160],[100],[170],[160],[100]]


    }]
  }
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={config}
      containerProps={{ style: { height: "200px" } }}
    />
  )
}

export default UserGraph
