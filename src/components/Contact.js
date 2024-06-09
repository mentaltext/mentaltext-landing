import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';


const Contact = () => {

  return (
    <React.Fragment>
      <section className="contact overflow-hidden" id="contact">
        <Container >
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Contact Us!</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg={8}>
              <div className="contact-box">
                <div className="custom-form mt-4">
                  <form method="post" name="myForm">
                    <p id="error-msg" style={{ opacity: 1 }}> </p>
                    <div id="simple-msg"></div>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <input name="name" id="name" type="text"
                            className="form-control contact-form" placeholder= "Your name"/>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="form-group">
                          <input name="email" id="email" type="email"
                            className="form-control contact-form" placeholder="Your email" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <input type="text" className="form-control contact-form" id="subject"
                            placeholder="Your Subject.." />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <textarea name="comments" id="comments" rows="6"
                            className="form-control contact-form h-auto"
                            placeholder="Your message..."></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <div className="col-lg-6">
                        <div className="text-center">
                          <input type="submit" id="submit" name="send"
                            className="submitBnt btn btn-rounded bg-gradiant" value="Send Message"/>
                        </div>
                      </div>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="my-5 py-4 justify-content-center text-center">
            <Col md={4}>
              <div>
                <i className="mdi mdi-google-maps f-50 text-primary"></i>
                <h5 className="mb-1">Location</h5>
                <p className="f-14 mb-0 text-muted">2276 Lynn Ogden Lane Beaumont</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-4 mt-lg-0">
                <i className="mdi mdi-email f-50 text-primary"></i>
                <h5 className="mb-1">Email</h5>
                <p className="f-14 mb-0 text-muted">Email: Example@gmail.com</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-4 mt-lg-0">
                <i className="mdi mdi-phone f-50 text-primary"></i>
                <h5 className="mb-1">Phone</h5>
                <p className="f-14 mb-0 text-muted">+ 124 236 0693</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="position-relative">
          <div className="contact-map">
            <iframe className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963590.6735126767!2d-117.71712342097838!3d36.07023032891268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1649323982108!5m2!1sen!2sin"
              width="100%" height="450" title="myFrame" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact;