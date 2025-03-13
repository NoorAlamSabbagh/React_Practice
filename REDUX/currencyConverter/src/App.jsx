const App = () => {
  return (
    <section className="currency-convertor">
      <div className="currency-div">
        <h1>Currency Convertor</h1>
        <div>
          <label htmlFor="currency_amount">Amount:
            <input type="number" id="currency_amount" />
          </label>
        </div>
        <div className="currency-selector">
          <div>
            <label>
              From:
              <select name="" id="">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;