import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
export default class SimpleSlider extends Component {

  

  render() {
    console.log(this.props)
    console.log(this.props.id[0])
    console.log(this.props.id[1])
    console.log(this.props.id[2])



    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> </h2>
        <Slider {...settings}>
          
          <div>
            <img style={{margin :"0 auto"}} src ={this.props.id[0]}></img>
          </div>
          <div>
          <img  style={{margin :"0 auto"}} src ={this.props.id[1]}></img>
          </div>
          <div>
          <img  style={{margin :"0 auto"}} src ={this.props.id[2]}></img>
          </div>
   
        </Slider>
      </div>
    );
  }
}