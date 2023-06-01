import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
const apiUrl = 'https://assets.ccbp.in/popular-repos'

class GithubPopularRepos extends Component {
  state = {
    activeItemId: languageFiltersData[0].id,
    repositoriesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getRepository()
  }

  getRepository = async () => {
    const response = await fetch(`${apiUrl}`)
    const data = await response.json()

    const updatedData = data.popular_repos.map(each => ({
      id: each.id,
      name: each.name,
      avatarUrl: each.avatar_url,
      starsCount: each.stars_count,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
    }))
    this.setState({repositoriesData: updatedData, isLoading: false})
  }

  renderRepositoriesList = () => {
    const {repositoriesData} = this.state
    return (
      <ul className="repository-container">
        {repositoriesData.map(eachData => (
          <RepositoryItem key={eachData.id} repositoryItems={eachData} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  updateActiveItemId = id => {
    this.setState({activeItemId: id})
  }

  renderFilterLanguages = () => {
    const {activeItemId} = this.state
    return (
      <ul className="languages-container">
        {languageFiltersData.map(each => (
          <LanguageFilterItem
            key={each.id}
            languages={each}
            updateActiveItemId={this.updateActiveItemId}
            isActive={each.id === activeItemId}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Popular</h1>
        {this.renderFilterLanguages()}
        {isLoading ? this.renderLoader() : this.renderRepositoriesList()}
      </div>
    )
  }
}

export default GithubPopularRepos
