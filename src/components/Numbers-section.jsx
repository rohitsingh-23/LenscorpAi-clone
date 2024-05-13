import React from "react";
import "./Numbers-section.css";

const NewFigures = () => {
  const contentArray = [
    {
      digit: 10,
      cont: "Solutions for Global crises",
    },
    {
      digit: 15,
      cont: "University Collaborations",
    },
    {
      digit: 25,
      cont: "Employees Worldwide",
    },
  ];

  return (
    <div className="new-figures-container">
      <div className="heading-fig">By the numbers</div>
      <div className="new-figures-content">
        {contentArray.map((item, index) => (
          <React.Fragment key={index}>
            <div className="new-figures-box">
              <div className="new-figures-small">
                <span className="digit">{item.digit}</span>
                <span className="plus">+</span>
              </div>
              <div className="new-fig-spe">{item.cont}</div>
            </div>
            {index < contentArray.length - 1 && <div className="line"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default NewFigures;
