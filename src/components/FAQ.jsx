import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./FAQ.css"

const FAQ = () => {
    const getKnowArray = [
      {
        specs: "Do i need to sign a contract?",
        icon: <MdOutlineKeyboardArrowDown />,
        para: "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
      },
      {
        specs: "How do we ensure quality of deliverables?",
        icon: <MdOutlineKeyboardArrowDown />,
        para: "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
      },
      {
        specs: "How do i begin collaboration?",
        icon: <MdOutlineKeyboardArrowDown />,
        para: "Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs.",
      },
      {
        specs: "What services do we offer?",
        icon: <MdOutlineKeyboardArrowDown />,
        para: "We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.",
      },
      {
        specs: "How do you ensure user privacy?",
        icon: <MdOutlineKeyboardArrowDown />,
        para: "We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.",
      },
      {
        specs: "How can i pay for the services?",
        icon: <MdOutlineKeyboardArrowDown />,
        para: "We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.",
      },
    ];

    const [showPara, setShowPara] = useState(false);
    const [selectedPara, setSelectedPara] = useState("");

    const leftContent = getKnowArray.slice(0, 3);
    const rightContent = getKnowArray.slice(3);

    const handleClick = (para) => {
      setSelectedPara(para);
      setShowPara(!showPara);
    };
  return (
    <div className="getKnow-Container">
      <div className="get_heading">
        <h2>GET TO KNOW US</h2>
        <div className="get_underline"></div>
      </div>
      <p className="get_subHeading">Frequently Asked Questions</p>
      <div className="getKnow-content">
        <div className="leftContent">
          {leftContent.map((item, index) => (
            <div key={index} className="box">
              <div onClick={() => handleClick(item.para)}>
                <span>{item.specs}</span>
                <span>{item.icon}</span>
              </div>
              {showPara && selectedPara === item.para && (
                <p className="showPara">{selectedPara}</p>
              )}
            </div>
          ))}
        </div>
        <div className="rightContent">
          {rightContent.map((item, index) => (
            <div key={index} className="box">
              <div onClick={() => handleClick(item.para)}>
                <span>{item.specs}</span>
                <span>{item.icon}</span>
              </div>
              {showPara && selectedPara === item.para && (
                <p className="showPara">{selectedPara}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ