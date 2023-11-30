// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = item

  console.log('hi')
  return (
    <li className="listEachItemBg">
      <div className="coinTypeBg">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currencyBg">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
