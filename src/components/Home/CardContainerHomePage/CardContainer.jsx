import './CardContainer.css';
import { MdOutlineOilBarrel } from 'react-icons/md';
import { GiSpanner } from 'react-icons/gi';
import { BsFillPeopleFill } from 'react-icons/bs';
import image from '/images/Home/HomePageServices/HomePageServices.jpg';

const CardContainer = () => {
  return (
    // <div className='card-container-home-page'>
    //   <div
    //     data-aos='fade-up'
    //     data-os-delay='1000'
    //     data-aos-duration='900'
    //     className='card-container-home-page-content-1 card-home-page '
    //   >
    //     <div className='card-container-image-main-1'>
    //       {/* <div className='card-container-image-1'></div> */}
    //       {/* Flip Main Container */}
    //       <div className='card-container-image-content-1 card-container-flip-main'>
    //         {/* Flip Card */}
    //         <div className='the-card'>
    //           <div className='the-front-card'>
    //             <span className='card-container-icon'>
    //               <MdOutlineOilBarrel className='card-container-icon-svg' />
    //             </span>
    //             <h1>Intergrity</h1>
    //           </div>
    //           <div className='the-back-card'>
    //             <span className='card-container-icon'>
    //               <MdOutlineOilBarrel className='card-container-icon-svg' />
    //             </span>
    //             <h1>Intergrity</h1>
    //             <p>
    //               To build trust through excellence in every field of
    //               organizational growth. To contribute to strengthening economic
    //               development. The sparkling achievements of MOI are the result
    //               of our vision focused on quality and excellence.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     data-aos='fade-up'
    //     data-os-delay='3000'
    //     data-aos-duration='1400'
    //     className='card-container-home-page-content-2 card-home-page'
    //   >
    //     <div className='card-container-image-main-2 card-container-flip-main'>
    //       {/* <div className='card-container-image-2'></div> */}
    //       <div className='card-container-image-content-2'>
    //         <div className='the-card'>
    //           <div className='the-front-card'>
    //             <span className='card-container-icon'>
    //               <GiSpanner className='card-container-icon-svg' />
    //             </span>
    //             <h1>Reliability</h1>
    //           </div>
    //           <div className='the-back-card'>
    //             <span className='card-container-icon'>
    //               <MdOutlineOilBarrel className='card-container-icon-svg' />
    //             </span>
    //             <h1>Intergrity</h1>
    //             <p>
    //               To build trust through excellence in every field of
    //               organizational growth. To contribute to strengthening economic
    //               development. The sparkling achievements of MOI are the result
    //               of our vision focused on quality and excellence.
    //             </p>
    //           </div>
    //         </div>

    //         <p>
    //           To be a responsive institution committed to building lasting
    //           customer relationships.To be a global group trusted for quality
    //           and assurance is the foundation of every business. We provide
    //           highest level of safety and reliability.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     data-aos='fade-up'
    //     data-os-delay='5000'
    //     data-aos-duration='1800'
    //     className='card-container-home-page-content-3 card-home-page'
    //   >
    //     <div className='card-container-image-main-3'>
    //       {/* <div className='card-container-image-3'></div> */}
    //       <div className='card-container-image-content-3'>
    //         <span className='card-container-icon'>
    //           <BsFillPeopleFill className='card-container-icon-svg' />
    //         </span>
    //         <h1>We value our people</h1>
    //         <p>
    //           To ensure every possible means of prosperity for each member of
    //           MOI. Ensure the success, growth and happiness of our most
    //           important resource, our employees. We value our each and every
    //           employees.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      data-aos='fade-up'
      data-os-delay='1000'
      data-aos-duration='900'
      className='card-container-home-page-image'
    >
      <img src={image} alt='home-page-services-image' />
    </div>
  );
};

export default CardContainer;
