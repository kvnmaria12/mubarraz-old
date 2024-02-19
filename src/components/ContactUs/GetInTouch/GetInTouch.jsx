import './GetInTouch.css';
// import {
//   useJsApiLoader,
//   GoogleMap,
//   MarkerF,
//   InfoWindowF,
// } from '@react-google-maps/api';

import { useState } from 'react';
import qrCodeImage from '/images/ContactUs/QRCodeImage/QRCode.png';

import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneInbound } from 'react-icons/bs';
import { RiLuggageDepositLine } from 'react-icons/ri';

const GetInTouch = () => {
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: import.meta.env.VITE_MUBARRAZ_GOOGLE_MAPS_API_KEY,
  //   libraries: ['places'],
  //   region: 'ae',
  // });

  // const center = { lat: 25.2664, lng: 55.3338 };
  // const [map, setMap] = useState(null);

  // const [isMarkerSelected, setIsMarkerSelected] = useState(false);
  return (
    <div className='get-in-touch'>
      <div className='get-in-touch-container-map-left'>
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='contact-us-left-map-container'
        >
          <img
            className='qr-code-image'
            src={qrCodeImage}
            alt='qr-code-image'
          />
        </div>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='contact-us-right-content'
        >
          <h1 className='contact-us-right-content-h1'>Get in touch with us</h1>

          <div className='get-in-touch-with-us-main-content'>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
              className='get-in-touch-with-us-address '
            >
              <div className='get-in-touch-with-us-address-content flex-content '>
                <div className='get-in-touch-with-us-address-icon'>
                  <GoLocation className='get-in-touch-icon' />
                </div>
                <div className='get-in-touch-with-us-address-content-items '>
                  <h1>Headquarter</h1>
                  <p>
                    MUBARRAZ Oilfield Installation LLC P.O. Box : 9847, Abu
                    Dhabi United Arab Emirates.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos='fade-up'
              data-aos-duration='1200'
              className='get-in-touch-with-us-email flex-content'
            >
              <div className='get-in-touch-with-us-email-icon'>
                <AiOutlineMail className='get-in-touch-icon' />
              </div>
              <div className='get-in-touch-with-us-email-content-items'>
                <h1>Email Us</h1>
                <p>info@muboins.ae</p>
              </div>
            </div>
            <div
              data-aos='fade-up'
              data-aos-duration='1400'
              className='get-in-touch-with-us-callus flex-content'
            >
              <div className='get-in-touch-with-us-callus-icon'>
                <BsTelephoneInbound className='get-in-touch-icon' />
              </div>
              <div className='get-in-touch-with-us-callus-content-items'>
                <h1>Call Us</h1>
                <p>+971 25504004</p>
                <p></p>
              </div>
            </div>
            <div
              data-aos='fade-up'
              data-aos-duration='1600'
              className='get-in-touch-with-us-office flex-content'
            >
              <div className='get-in-touch-with-us-office-icon'>
                <RiLuggageDepositLine className='get-in-touch-icon' />
              </div>
              <div className='get-in-touch-with-us-office-content-items'>
                <h1>Office Hour</h1>
                <p>Mon-Sat : 8am-6pm</p>
                <p>Sunday : Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

/* {isLoaded && (
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{
                width: '525px',
                height: '525px',
              }}
              options={{
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              <MarkerF
                position={center}
                onClick={() => setIsMarkerSelected(!isMarkerSelected)}
              />
              {isMarkerSelected && (
                <InfoWindowF
                  position={center}
                  onCloseClick={() => setIsMarkerSelected(!isMarkerSelected)}
                >
                  <div className='info-window'>
                    <h1 style={{ color: 'black' }}>MUBOINS</h1>
                    <h2 style={{ color: 'black' }}>
                      MUSSAFAH ICAD 3 - Abu Dhabi - United Arab Emirates
                    </h2>
                    <h3> +97125504004</h3>
                  </div>
                </InfoWindowF>
              )}
            </GoogleMap>
          )} */
