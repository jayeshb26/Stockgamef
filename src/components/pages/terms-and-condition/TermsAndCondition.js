import React from "react";
import "./TermsAndCondtion.css";
import termsAndConditionsData from "./terms-and-condition.json";
import PageFooter from "../page-footer/PageFooter";
import TopSection from "../TopSection/TopSection";

const TermsAndCondition = () => {
  const sectionObj = {
    title: "Terms and Conditions",
    gotoLink: {
      link: "/",
      text: "Home",
    },
    activeLink: {
      text: "Terms and Conditions",
    },
  };
  return (
    <>
    <TopSection sectionObj={sectionObj}/>
      <main>
        <div className="terms-and-conditions">
          {/* <h1>Terms and Conditions</h1> */}
          {termsAndConditionsData.sections.map((section, index) => (
            <section className="section" key={index}>
              <h2>{section.title}</h2>
              <ul>
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <PageFooter />
    </>
  );
};

export default TermsAndCondition;
