import { connect } from 'redux/react';
import { listForCity } from '../../videos/getters';
import { Panel } from 'panels-ui';
import cityShape from '../cities/shape';
import List from './list';
import React, { PropTypes } from 'react';
import videoShape from './shape';

@connect((state, {cityId}) => ({
  city: state.cities[cityId],
  videos: listForCity(state.videos, {cityId})
}))
export default class Videos {
  render() {
    const { city, videos, width } = this.props;

    return (
      <Panel style={style.panel} width={width}>
        <h1 style={style.title}>{city.name}</h1>
        <List videos={videos} />
      </Panel>
    );
  }

  static propTypes = {
    city: cityShape.isRequired,
    cityId: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(videoShape).isRequired,
    width: PropTypes.number
  }
}

const style = {
  panel: {
    //backgroundColor: 'rgb(255,255,255)',
    backgroundColor: 'rgba(255,255,255, 0.85)',
    paddingBottom: 100
  }
};
