import React, { PropTypes } from 'react';

export default class Tags {
  render() {
    const tags = this.props.list.map(tag => <div style={style.item}>{tag}</div>);

    return <div style={style.list}>{tags}</div>;
  }

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired
  }
}

const style = {
  item: {
    fontSize: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    color: '#606060',
    height: 20,
    marginLeft: 5,
    marginTop: 5,
    padding: '5px 10px 0 10px',
    textTransform: 'uppercase'
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '5px 10px 5px 5px'
  }
}
