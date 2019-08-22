import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

import InfoIcon from '@material-ui/icons/Info';

import { fetchItems } from '../actions/actions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
class ItemList extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
  }

  tileFromItems(items) {
    return items ? items.map(item =>
      {
        return {
          id: item.item_id,
          img: 'images/image1.jpg',
          title: item.name,
          itemType: item.item_type,
          cols: 1,
        }}) : [];

  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { filter } = this.props;

    console.log('this', this);
    fetchItems(filter)
  }

  render(props) {
    // const { classes, items} = this.props
    const { classes, items, isFetching, lastUpdated } = this.props

    return (
      <div className={classes.root}>
      <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
        {isFetching && items.length === 0 && <h2>Loading...</h2>}
        {!isFetching && items.length === 0 && <h2>Empty.</h2>}

      <GridList cellHeight={160} className={classes.gridList} cols={3}>
      {this.tileFromItems(items).map(tile => (
        <GridListTile key={tile.id} cols={tile.cols || 1}>
        <img src={tile.img} alt={tile.title} />
        <GridListTileBar
        title={tile.title}
        subtitle={<span>Type: {tile.itemType}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
          <InfoIcon />
          </IconButton>
        }
        />
        </GridListTile>
      ))}
      </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(ItemList)
