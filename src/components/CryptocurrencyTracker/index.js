// Write your code here

import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList/index'

class CryptocurrencyTracker extends Component {
  state = {cryptoCurrenyTrackerDetails: [], isLoading: true}

  componentDidMount() {
    this.getcryptoCurrenyTrackerData()
  }

  getcryptoCurrenyTrackerData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
    }))

    this.setState({cryptoCurrenyTrackerDetails: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {cryptoCurrenyTrackerDetails, isLoading} = this.state
    console.log(cryptoCurrenyTrackerDetails)
    return (
      <div className="bgContainer">
        {isLoading ? (
          this.renderLoader()
        ) : (
          <div>
            <CryptocurrenciesList itemList={cryptoCurrenyTrackerDetails} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
