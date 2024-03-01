import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <React.Fragment>
      <section className="section">
        <div className="tabs is-centered">
          <ul>
            <li className={activeTab === "tab1" ? "is-active" : ""}>
              <a onClick={() => handleTabClick("tab1")}>Our Mission</a>
            </li>
            <li className={activeTab === "tab2" ? "is-active" : ""}>
              <a onClick={() => handleTabClick("tab2")}>Our Goal</a>
            </li>
            <li className={activeTab === "tab3" ? "is-active" : ""}>
              <a onClick={() => handleTabClick("tab3")}>Our Vision</a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div>
              <p className="is-size-4">
                Our mission is to develop and deliver cutting-edge technology
                solutions that enhance sustainability, improve efficiency, and
                empower individuals and businesses to thrive in a rapidly
                evolving world. We are committed to creating value for our
                stakeholders while prioritizing environmental stewardship,
                social responsibility, and ethical business practices.
              </p>
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <p className="is-size-4">
                Our overarching goal is to realize our vision of becoming a
                global leader in sustainable technology solutions by diligently
                pursuing a set of strategic objectives. These objectives include
                developing groundbreaking products and services that address
                pressing environmental and social challenges, expanding our
                market presence worldwide, fostering a culture of innovation and
                collaboration within our organization, and ensuring the
                long-term viability and sustainability of our business
                operations. Additionally, we aim to forge strategic partnerships
                with like-minded organizations and stakeholders to amplify our
                impact and drive meaningful change. By achieving these goals, we
                aspire to create lasting value for our stakeholders, while
                simultaneously contributing to the greater good by advancing
                sustainability, promoting social equity, and fostering
                innovation.
              </p>
            </div>
          )}
          {activeTab === "tab3" && (
            <div>
              <p className="is-size-4">
                Our vision is to emerge as a preeminent global leader in
                sustainable technology solutions, leveraging innovation and
                expertise to pioneer transformative change and cultivate a more
                equitable, prosperous, and environmentally resilient world. At
                the core of our vision is a steadfast commitment to addressing
                pressing societal and environmental challenges through the power
                of technology. We envision a future where our innovative
                solutions play a pivotal role in shaping a more sustainable and
                inclusive society, where economic prosperity goes hand in hand
                with social equity and environmental stewardship.
              </p>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default TabComponent;
