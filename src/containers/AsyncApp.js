import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux';

import './AsyncApp.css';
import TopNav from '../components/TopNav'
import ItemList from '../components/ItemList'
import { fetchItems } from '../actions/actions';


class AsyncApp extends Component {

  componentDidMount() {
    const { dispatch, filter } = this.props
    dispatch(fetchItems(filter));
  }

  render() {
    return (
      <Container fixed>
      <TopNav />
      <ItemList items={this.props.items}/>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const { filter, itemsByFilter } = state;
  const { isFetching, lastUpdated, items } = itemsByFilter[filter] || {
    isFetching: true,
    items: []
  }

  return {
    filter,
    items,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp)

