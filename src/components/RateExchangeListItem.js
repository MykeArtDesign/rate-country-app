import React, { Component } from 'react'
import ReactChartKick, { AreaChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartKick.addAdapter(Chart)

export default class RateExchangeListItem extends Component {
  render() {
    const { flag, name, rates, currencyCode } = this.props.rateExchange
    console.log(currencyCode)
    return (
      <tr>
        <td>{name}<img src={flag} alt={name} height="60" width="100"/></td>
        <td className="col-md-12">
          <AreaChart 
          data={formatData( rates, currencyCode )} 
          xtitle="Date" 
          ytitle={currencyCode} 
          />
        </td>
      </tr>
    )
  }
}

function formatData(rates,currencyCode) {
  return Object.keys(rates).map( date => {
    return [ date, rates[date][currencyCode] ]
  })
}
