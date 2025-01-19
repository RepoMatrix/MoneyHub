import "./overview.css"

export const Overview = () => {
  return (
    <>
      <h1 className="overview-title">Overview</h1>
      <div className="overview-info-container">
        <div>
          <h4>Current Balance</h4>
          <p>$4,836.00</p>
        </div>
        <div>
          <h4>Income</h4>
          <p>$3,814,25</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p>$1,700.50</p>
        </div>
      </div>
    </>
  )
}