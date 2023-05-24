'use client';
import Image from 'next/image';
import logoImage from './Image/logo.png';
import ctaImage from './Image/tracking.jpg'
import { useRouter } from 'next/navigation';
import Avatar from '../Avatar';
import './styles/styles.css';
// 



// 

const Home = () => {
  const router = useRouter();
  const handleRouting = (action) => {
    router.push(action);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image src={logoImage} alt="Logo" width={160} height={85} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">

                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button type="button" className="btn login_btn" onClick={() => handleRouting('/login')}>LogIn</button>
              <button type="button" className="btn signin_btn" onClick={() => handleRouting('/register')}>SignUp</button>
            </form>
          </div>
        </div>
      </nav>
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

export default Home;




