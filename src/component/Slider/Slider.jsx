import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {RandomNum} from '../../math';
import {PUBLIC_IMAGE_FOLDER} from '../../config/constant'

class Slider extends Component{
    renderBannerImage(image){
        return(
            <div className="slide-items">
        <img src={`${PUBLIC_IMAGE_FOLDER} ${image}`} alt={altText} height={height} duration={duration}  />
    </div>
        )
    }
render(){
    const { altText , banners , duration ,height} = this.props;
    console.log("number" + RandomNum(10));
    return(
        this.renderBannerImage()
    );
}

}
export default Slider;

Slider.propTypes={
    banners:PropTypes.string.isRequired,
    altText:PropTypes.string
}
Slider.defaultProps={
    banners: "images/default-img.png",
    altText:"default-image"
}
