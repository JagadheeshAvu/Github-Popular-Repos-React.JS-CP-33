// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repositoryItems} = props
  const {avatarUrl, name, issuesCount, starsCount, forksCount} = repositoryItems
  return (
    <li className="repository-list">
      <div className="items-container">
        <img src={avatarUrl} alt={name} className="avatar" />
        <h1 className="name">{name}</h1>
        <div className="items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon"
          />
          <p className="count">{starsCount}</p>
        </div>
        <div className="items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon"
          />
          <p className="count">{forksCount}</p>
        </div>
        <div className="items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon"
          />
          <p className="count">{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}
export default RepositoryItem
