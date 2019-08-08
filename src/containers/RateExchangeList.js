import React, { Component } from 'react'
import RateExchangeListItem from '../components/RateExchangeListItem';
import { connect } from 'react-redux';

class RateExchangeList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Pays</th>
            <th className="col-md-6">Valeur de la Monnaie par rapport au dollar</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.RateExchangeList.map( (r,index) => {
              return <RateExchangeListItem key={r.code + index} rateExchange={r} />
            })
          }
        </tbody>  
      </table>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    RateExchangeList: state.rateExchangeReducer.rateExchangeList
  }
}

export default connect(mapStateToProps, undefined)(RateExchangeList)