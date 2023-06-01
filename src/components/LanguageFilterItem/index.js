// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {languages, updateActiveItemId, isActive} = props
  const {language, id} = languages

  const onClickItem = () => {
    updateActiveItemId(id)
  }

  const btnClassName = isActive ? 'language-btn active' : 'language-btn'
  return (
    <li className="language-items">
      <button className={btnClassName} type="button" onClick={onClickItem}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
