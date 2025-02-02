import React from "react";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Info from "../../util/common-data/content-info.json";
import { projectsdata } from "../../util/common-data/project-data";

export const Projects = () => {
  return (
    <HelmetProvider>
      <section id="projects" className="projects">
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title> {Info.meta.title}</title>
          <meta name="description" content={Info.meta.description} />
        </Helmet>
        <Row className="mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{Info.page.project_label}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 project_container">
          {projectsdata.map((data, i) => {
            return (
              <div key={i} className="project_items">
                <img src={data.img} alt="Projects"/>
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">{Info.page.view_project_label}</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      </section>
    </HelmetProvider>
  );
};
