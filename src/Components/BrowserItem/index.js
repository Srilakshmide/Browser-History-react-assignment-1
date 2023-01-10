import './index.css'

const BrowserItem = props => {
  const {history, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="container">
      <div className="browser-item">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="title-url">{domainUrl}</p>
      </div>
      <div>
        <button
          onClick={onDelete}
          data-testid="delete"
          type="button"
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItem
