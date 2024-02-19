import './SuccessStories.css';
import image1 from '/images/Home/SuccessStoriesProjects/SuccessStoriesProject1.jpg';
import image2 from '/images/Home/SuccessStoriesProjects/SuccessStoriesProject2.jpg';
import image3 from '/images/Home/SuccessStoriesProjects/SuccessStoriesProject3.jpg';
import image4 from '/images/Home/SuccessStoriesProjects/SuccessStoriesProject4.jpg';
import image5 from '/images/Home/SuccessStoriesProjects/SuccessStoriesProject5.jpg';

const SuccessStories = () => {
  return (
    <div className='our-success-stories-home-page'>
      <div className='our-success-stories-img'></div>
      <div className='our-success-stories-container'>
        <div className='our-success-stories-container-left'>
          {/* <h2>Our Success Stories</h2> */}
          <h1>Our Success Story</h1>
          {/* <p>We have listed some of our recent successfull projects here.</p> */}
        </div>
        <div className='our-success-stories-container-right'>
          <div className='our-success-stories-container-scroll'>
            <div className='our-success-stories-container-scroll-right-to-left'>
              <div className='our-success-stories-container-right-part-1 our-success-stories-parts'>
                <img src={image1} alt='oil-transfer-image' />
                {/* <h3>2006 to 2009</h3> */}
                <h1>Technical Support Services of Fabricators(COSTAIN)</h1>
              </div>
              <div className='our-success-stories-container-right-part-2 our-success-stories-parts'>
                <img src={image2} alt='crude-oil' />
                {/* <h3>2008 to 2009</h3> */}
                <h1>
                  Technical Support Services of Fabricators(VALENTINE MARITIME )
                </h1>
              </div>
              <div className='our-success-stories-container-right-part-3 our-success-stories-parts'>
                <img src={image3} alt='oil-tank' />
                {/* <h3>2006 to Till Date</h3> */}
                <h1>Technical Support Services of Tig Welders to ESNAAD</h1>
              </div>
              <div className='our-success-stories-container-right-part-1 our-success-stories-parts'>
                <img src={image4} alt='oil-transfer-image' />
                {/* <h3>2006 to 2009</h3> */}
                <h1>Fabrication of Jackets</h1>
              </div>
              <div className='our-success-stories-container-right-part-1 our-success-stories-parts'>
                <img src={image5} alt='oil-transfer-image' />
                {/* <h3>2006 to 2009</h3> */}
                <h1>Fabrication of Accommodation Module</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='our-success-stories-projects-done'></div>
    </div>
  );
};

export default SuccessStories;
