import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./movie.css"
function Movie() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
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
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <p className="continue">Continue Watching</p>
      <Slider {...settings}>
        <div className="slide">
         <img src="https://m.media-amazon.com/images/S/pv-target-images/cbc33afa995e97760c6705ba2be997b5757035b0c63d9ef1f2c565074110ce25.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
          <div className="unique">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/432b667ddfe08ef3a18e8d19df9fdf97a0b8de8772388b0836fedb5c9dfece93.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/4524df59b8e408fc35106fce1ddbc496fad69e47ac2f5110d4d61508c753c29e.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/34a4f438d1262d6ce20d5a6cb7e8f48ab4c7ba77ddd899f08d0d3f921919bc8b.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/ed992aefe0250737fd49d3c421ea8f38063db7c49d52855fb72473b63660100b.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/7c580f375c80de22b3ac3a01289011244a98c9df39e11a8cb98ddf8ea990fdcc.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
      </Slider>
      <p className="continue">Trending Top 10</p>
      <Slider {...settings}>
        <div className="slide">
         <img src="https://m.media-amazon.com/images/S/pv-target-images/658d9afdc1290c28bff83f52808aa71d94dae5e91cb5cb7fa57c1984082e71e7.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
          <div className="unique">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/88c781269f296e0204f6addcd1a06835c27ffaf2a48c0aa2a669566f4c572f78.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/a8833bceafa0e8a2d768b8a8ebdb7cc4448a122f4455420ea603fff7962b9f1c.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/f646c772d990632b27ec798aff4dd5269c0079cd60bbfbeeb227b80978605f38.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/38cc7640ce4aaf72feac970c166a535bcf623757d2d2dc792f6012d697356045.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/e3149bbb29ceccfa3efa54c470f21614178537eabed99bfe0b49db3fdcfad668.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/f132928d0da721ff494387c3e6c1d1b3d8d9650de74a4a5c0cf68c28e4b793ab.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/da25ba0ec2b8dc77fc69fcb1749ed645e54f952ca45bf2d1fd465b33fb190fca.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/0cb2ec000de9947c2524a61af3b106014fda52cace8c366894c31e819fde6fe5.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
      </Slider>
      <p className="continue">Popular Web Serise</p>
      <Slider {...settings}>
        <div className="slide">
         <img src="https://m.media-amazon.com/images/S/pv-target-images/cd1f8230da0c64aec030831d5607ff3e4ebc045b6cd016ed210ba99203d987ce.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
          <div className="unique">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/af194e48364584628ca896fab0f56397c8fc589593eb340372fedc86f62a0eb1.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/7f80d52741de8c288db96b5d3c9006c3e852a507b5c8050e333528f41f435209.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/e53413205640e9dcca6ab7024817e9f99743147f3791c830bbe5c41a31a9ee1b.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/5ec9437589f39697946a2dae1494ded6799f3e025048ff716c3866c356eb0ac7.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/4d1a2a5a246c8f11f811d4566f81efc013ef3ed2abeff4bc844c13b57b5b45f2.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/9a34e4f2d2dbaa94d104f204321cd01de380e19b964fa74067838784eee60d92.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/469e4c0a1f21514d3979b21aa22bc6f794e4726ba6b13bf5044de7b5c328db9b.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
        <div className="slide">
        <img src="https://m.media-amazon.com/images/S/pv-target-images/aadaff3f4b09dc57e0d31baa48662e5d1b9a7f6f9fb4a2e0ea33249abf5605f8.__SX420__SY236.25__QL60__._TTW_.jpg"/>
        </div>
      </Slider>
    </div>
  );
}

export default Movie;

