import LightGallery from 'lightgallery/react';

import './Gallery.css';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import SinglePhotoGallery from './SinglePhotoGallery';

function Gallery() {
  const onInit = () => {
    console.log('light gallery has been initialized');
  };

  return (
    // <div className='gallery-light'>
    //   <LightGallery
    //     onInit={onInit}
    //     speed={500}
    //     plugins={[lgThumbnail, lgZoom]}
    //     autoplay={true}
    //   >
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery1.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery1.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery2.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery2.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery3.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery3.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery4.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery4.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery5.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery5.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery6.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery6.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery7.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery7.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery8.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery8.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery9.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery9.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery10.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery10.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery11.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery11.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery12.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery12.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery13.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery13.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery14.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery14.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery15.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery15.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery16.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery16.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery17.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery17.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery18.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery18.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery19.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery19.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     <a href='/images/ProjectsPage/ProjectsGallery/Gallery20.jpg'>
    //       <img
    //         className='photo-galley-img'
    //         src='/images/ProjectsPage/ProjectsGallery/Gallery20.jpg'
    //         alt='images'
    //       />
    //     </a>
    //     {/* <SinglePhotoGallery /> */}
    //     ...
    //   </LightGallery>
    // </div>
    <>
      <SinglePhotoGallery />
    </>
  );
}

export default Gallery;
