import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from './Testimonials';
import MainTestimony from './MainTestimony';

const TestimonialsSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.testimonialsData.map((data) => {
          //   return <Testimonials key={data.id} {...data} />;
          return <MainTestimony key={data.id} />;
        })}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
