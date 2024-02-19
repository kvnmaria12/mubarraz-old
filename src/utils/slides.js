const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project1.jpg',
    width: 1080,
    height: 780,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project2.jpg',
    width: 1080,
    height: 1620,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project3.jpg',
    width: 1080,
    height: 720,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project4.jpg',
    width: 1080,
    height: 721,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project5.jpg',
    width: 1080,
    height: 1620,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project6.jpg',
    width: 1080,
    height: 607,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project7.jpg',
    width: 1080,
    height: 608,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project8.jpg',
    width: 1080,
    height: 720,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project9.jpg',
    width: 1080,
    height: 1549,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project10.jpg',
    width: 1080,
    height: 720,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project11.jpg',
    width: 1080,
    height: 694,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project12.jpg',
    width: 1080,
    height: 1620,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project13.jpg',
    width: 1080,
    height: 720,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project14.jpg',
    width: 1080,
    height: 1440,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project15.jpg',
    width: 1080,
    height: 1620,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project16.jpg',
    width: 1080,
    height: 810,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project17.jpg',
    width: 1080,
    height: 610,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project18.jpg',
    width: 1080,
    height: 160,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project19.jpg',
    width: 1080,
    height: 810,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project20.jpg',
    width: 1080,
    height: 720,
  },
  {
    img: '/images/ProjectsPage/ProjectsGallery/Project21.jpg',
    width: 1080,
    height: 1440,
  },
];

export const slides = unsplashPhotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: photo.img,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: photo.img,
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

console.log(slides);

export default slides;
