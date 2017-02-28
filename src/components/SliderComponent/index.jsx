import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel';

const styles = {
  SliderStyle:{
    margin: '0 auto',
    paddng: '40px',
    background:'red'
  }
}
export default class SliderComponent extends React.Component {
  render() {
    return (
    	<div>
      	<Slider style={styles.SliderStyle}>
        	<div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>
    );
  }
};
