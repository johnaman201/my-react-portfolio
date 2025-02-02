import React from "react";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Info from "../../util/common-data/content-info.json";
import { experiencedata } from "../../util/common-data/exprience-data";

export const Experience = () => {
  return (
    <HelmetProvider>
      <section id="experience" className="experience">
        <Container>
          <Helmet>
            <meta charSet="utf-8" />
            <title> {Info.meta.title}</title>
            <meta name="description" content={Info.meta.description} />
          </Helmet>
          <Row className="mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">{Info.page.experience_label}</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <div className="experience-container">
            {experiencedata.map((data, i) => (
              <div
                key={i}
                className="experience-card"
                style={{
                  boxShadow: `0 4px 6px -1px ${data.style}, 0 2px 4px -2px ${data.style}`,
                }}
              >
                <img src={data.img} alt="Icons" className="experience-icon" />
                <p className="experience-title">{data.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </HelmetProvider>
  );
};
