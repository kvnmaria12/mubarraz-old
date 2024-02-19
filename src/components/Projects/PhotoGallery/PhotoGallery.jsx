import './PhotoGallery.css';
import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import photos from '../../../utils/photos';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';

import { photoGalleryImages } from '../../../utils/photoGalleryImages';
import SinglePhotoGallery from './SinglePhotoGallery';
import Gallery from './Gallery';

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);
  // return (
  //   <>
  //     <div className='projects-page-photo-gallery-main'>
  //       <div className='project-page-photo-gallery-header'>
  //         <h3>Gallery</h3>
  //         <h1>Some of our latest Project Gallery</h1>
  //         <p>Some of our recent projects photo gallery</p>
  //       </div>
  //       <div className='projects-page-photo-gallery'>
  //         <PhotoAlbum
  //           photos={photos}
  //           layout='columns'
  //           targetRowHeight={150}
  //           onClick={({ index }) => setIndex(index)}
  //         />
  //         <Lightbox
  //           slides={slides}
  //           open={index >= 0}
  //           index={index}
  //           close={() => setIndex(-1)}
  //           // enable optional lightbox plugins
  //         />
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <div className='project-gallery'>
      <div className='project-page-photo-gallery-header'>
        <h1>Gallery</h1>
      </div>
      {/* <SinglePhotoGallery /> */}
      <Gallery />
    </div>
  );
};

export default PhotoGallery;

// const slides = photos.map(({ src, width, height, images }) => ({
//   src,
//   width,
//   height,
//   srcSet: images.map((image) => ({
//     src: image.src,
//     width: image.width,
//     height: image.height,
//   })),
// }));

{
  /* <div className='project-photo-gallery'>
  <div className='project-page-photo-gallery-header'>
    <h3>Gallery</h3>
    <h1>Some of our latest Project Gallery</h1>
    <p>Some of our recent projects photo gallery</p>
  </div>
  <div className='photo-gallery-zoom'>
    <Zoom scale={1.4} indicators={false} duration={1000} arrows={false}>
      {photoGalleryImages.map((img, index) => (
        <div key={index} style={{ width: '100%' }}>
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '90vh',
              filter: 'brightness(50%)',
            }}
            alt='Slide Image'
            loading='lazy'
            src={img}
          />
        </div>
      ))}
    </Zoom>
  </div>
</div>; */
}
