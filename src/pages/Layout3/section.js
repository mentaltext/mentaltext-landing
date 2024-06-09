import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


// import images
import home1 from "../../assets/images/home/home1-1.png"

AOS.init({
  duration: 1800,
});

const section = () => {

  return (
    <div className="section home-3" id="home">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={7}>
            <div className="home-heading">
              <h3 className="text-uppercase">Mentaltext</h3>
              <h4 className="home-title">Connect, Unite and Message</h4>
              <ul className="list-unstyled mb-0 mt-3 social-icon">
                <li className="list-inline-item">
                  <div className="aos-init aos-animate" data-aos="fade-up" >
                    <div className="icon-text">
                      <div className="icon android">
                        <a style={{
                          color: "white"
                        }} href='https://expo.dev/artifacts/eas/v2nm1sE6zA4n3QSVwXK1U1.apk'> <i className="uil uil-android"> </i></a>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li className="list-inline-item">
                  <div className="aos-init aos-animate" data-aos="fade-up">
                    <div className="icon-text">
                      <div className="icon apple">
                        <span> <i className="uil uil-apple"> </i></span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="aos-init aos-animate" data-aos="fade-up" >
                    <div className="icon-text">
                      <div className="icon instagram">
                        <span> <i className="uil uil-windows"> </i></span>
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </Col>
          <div className="col-md-5">
            <img src={home1} alt="" className="img-fluid" />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default section;
