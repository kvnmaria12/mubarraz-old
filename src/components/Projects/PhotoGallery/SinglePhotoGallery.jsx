import { photoGalleryImages } from '../../../utils/photoGalleryImages';
import './PhotoGallery.css';

const SinglePhotoGallery = () => {
  return (
    <div className='single-photo-gallery'>
      <div className='slider-photo-gallery'>
        {photoGalleryImages.map((data) => {
          return (
            <div className='photo-gallery right-to-left' id={data.id}>
              <a href={data.img}>
                <img className='photo-galley-img' src={data.img} alt='images' />
              </a>
              {/* <h2 className='project-name'>{data.name}</h2> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePhotoGallery;
