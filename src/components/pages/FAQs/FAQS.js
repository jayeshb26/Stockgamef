import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Collapse from "react-bootstrap/Collapse";
import FAQSData from "./faq.json";
import "./Faqs.css";
import { Accordion } from "react-bootstrap";
import PageFooter from "../page-footer/PageFooter";
import TopSection from "../TopSection/TopSection";

const FAQS = () => {
  const sectionObj = {
    title: "FAQS",
    gotoLink: {
      link: "/",
      text: "Home",
    },
    activeLink: {
      text: "FAQs",
    },
  };

  return (
    <>
      <TopSection sectionObj={sectionObj} />
      <main className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <Accordion className="faq_button" variant="link">
              {FAQSData.faqs.length > 0 &&
                FAQSData.faqs.map((faq, index) => {
                  return (
                    <Accordion.Item eventKey={index} data-aos="fade-up">
                      <Accordion.Header>{faq.title}</Accordion.Header>
                      <Accordion.Body>{faq.detail}</Accordion.Body>
                    </Accordion.Item>
                  );
                })}
            </Accordion>
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
};

export default FAQS;
