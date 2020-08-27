import React, { Component } from 'react'
import { CircularProgress, Card, CardTitle, CardText } from 'react-md'

import { connect } from '../store'

class Repos extends Component {
  componentDidMount() {
    const { updateRepos, lastSuccessfulReposFetch } = this.props

    const now = new Date()
    if (!lastSuccessfulReposFetch) {
      updateRepos()
    } else if ((now - lastSuccessfulReposFetch) / 1000 > 300) {
      updateRepos()
    }
  }

  render() {
    const {
      isFetchingRepos,
      repos
    } = this.props
    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : <Card style={{ marginTop: '90px' }}>
            <CardTitle>Repository List</CardTitle>
            <CardText>
              Here we should display a list of repositories, the user has {repos.length} repos.
            </CardText>
          </Card>
    )
  }
}

export default connect(Repos)
