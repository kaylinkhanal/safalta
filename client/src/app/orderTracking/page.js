'use client';
import Image from 'next/image';
import logoImage from '../Image/logo.png';
import ctaImage from '../Image/tracking.jpg'
import {useSelector} from 'react-redux'
import Nav from '../components/Nav/page'
import '../styles/styles.css';
const OrderTracking = () => {

  return (
    <>

      <section className="py-lg-10 my-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-12">
              <div className="text-center">
                <Image
                  src={ctaImage}
                  alt="learning"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="track-form col-xl-6 col-md-6 col-12">
              <div className="heading2 mt-5">
                <i className="fa fa-ship" /> <span>WITH SAFALTA</span>{" "}
                <h3>SHIPMENT VISIBILITY</h3>{" "}
              </div>
              <form>
                <label>
                  <i className="fab fa-stumbleupon" />
                  <input
                    name="trakingno"
                    id="trakingno"
                    type="text"
                    placeholder="Enter Tracking code for tracking a shipment :"
                    className='order_tracking_form'
                  />
                </label>
              </form>
              <button type="button" className="btn order_track_btn mt-4" >PROCEED NOW</button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default OrderTracking;




