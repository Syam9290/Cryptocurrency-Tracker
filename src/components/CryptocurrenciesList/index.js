// Write your JS code here

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem/index'

const CryptocurrenciesList = props => {
  const {itemList} = props
  return (
    <div className="cryptoCurrencyBg">
      <h1 className="title">CryptoCurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptoImg"
      />
      <div className="listItemBg">
        <div className="headerBg">
          <p>Coin Type</p>
          <div className="currencyBg">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        <ul className="lisContainer">
          {itemList.map(eachItem => (
            <CryptocurrencyItem item={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
