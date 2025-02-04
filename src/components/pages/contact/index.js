import React from "react";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Info from "../../util/common-data/content-info.json";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <section id="contact" className="contact">
        <Container>
          <Helmet>
            <meta charSet="utf-8" />
            <title> {Info.meta.title}</title>
            <meta name="description" content={Info.meta.description} />
          </Helmet>
          <Row className="mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">{Info.page.contact_label}</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="7" className="d-flex align-items-center">
              <form
                action="https://getform.io/f/f22fdb63-0dce-4f52-84a1-509d629a9a0e"
                method="POST"
                className="contact__form w-100"
              >
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="form-control"
                      autocomplete="off"
                      required
                    />
                  </Col>
                  <Col lg="6" className="form-group rounded-0">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      className="form-control"
                      autocomplete="off"
                      required
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  placeholder="Enter your message"
                  name="message"
                  rows="10"
                  required
                ></textarea>
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit">
                      Lets talk
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};
