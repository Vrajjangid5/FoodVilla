import React, { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 m-4 bg-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <h3 className="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{title}</h3>
      {isVisible && <p className="text-gray-700 mb-4">{description}</p>}
      <button
        onClick={toggleVisibility}
        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-md hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleVisibilityChange = (sectionName) => {
    setVisibleSection(visibleSection === sectionName ? null : sectionName);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center p-4 m-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-green-400">
        Insta Mart
      </h1>
      <Section
        title={"About Us"}
        isVisible={visibleSection === "about"}
        toggleVisibility={() => handleVisibilityChange("about")}
        description={
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus metus et leo eget metus sapien cras? Mus consectetur gravida arcu leo velit. Litora est duis hac montes finibus tempor dolor ridiculus. Arcu imperdiet maximus cras vehicula consectetur scelerisque blandit euismod. Molestie maximus egestas massa pellentesque vel. Curae sed primis donec vitae per molestie. Eu elementum eros maecenas fermentum ipsum libero. Ultrices mattis vel turpis ut ligula maximus. Leo commodo ut rhoncus auctor nostra diam. Maximus mollis himenaeos etiam dis mauris placerat eget mattis molestie. Semper nisi tempor elit nunc quam. Quis dictumst dolor facilisi at; nostra sagittis justo magna. Non volutpat mauris cras parturient suscipit fusce aliquet? Metus vitae lacinia accumsan phasellus ultricies. Tincidunt pretium tincidunt urna natoque est sed facilisis. Conubia scelerisque diam accumsan dignissim commodo in eros tempus."
        }
      />
      <Section
        title={"Team Instamart"}
        isVisible={visibleSection === "team"}
        toggleVisibility={() => handleVisibilityChange("team")}
        description={
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus metus et leo eget metus sapien cras? Mus consectetur gravida arcu leo velit. Litora est duis hac montes finibus tempor dolor ridiculus. Arcu imperdiet maximus cras vehicula consectetur scelerisque blandit euismod. Molestie maximus egestas massa pellentesque vel. Curae sed primis donec vitae per molestie. Eu elementum eros maecenas fermentum ipsum libero. Ultrices mattis vel turpis ut ligula maximus. Leo commodo ut rhoncus auctor nostra diam. Maximus mollis himenaeos etiam dis mauris placerat eget mattis molestie. Semper nisi tempor elit nunc quam. Quis dictumst dolor facilisi at; nostra sagittis justo magna. Non volutpat mauris cras parturient suscipit fusce aliquet? Metus vitae lacinia accumsan phasellus ultricies. Tincidunt pretium tincidunt urna natoque est sed facilisis. Conubia scelerisque diam accumsan dignissim commodo in eros tempus."
        }
      />
      <Section
        title={"Careers"}
        isVisible={visibleSection === "careers"}
        toggleVisibility={() => handleVisibilityChange("careers")}
        description={
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus metus et leo eget metus sapien cras? Mus consectetur gravida arcu leo velit. Litora est duis hac montes finibus tempor dolor ridiculus. Arcu imperdiet maximus cras vehicula consectetur scelerisque blandit euismod. Molestie maximus egestas massa pellentesque vel. Curae sed primis donec vitae per molestie. Eu elementum eros maecenas fermentum ipsum libero. Ultrices mattis vel turpis ut ligula maximus. Leo commodo ut rhoncus auctor nostra diam. Maximus mollis himenaeos etiam dis mauris placerat eget mattis molestie. Semper nisi tempor elit nunc quam. Quis dictumst dolor facilisi at; nostra sagittis justo magna. Non volutpat mauris cras parturient suscipit fusce aliquet? Metus vitae lacinia accumsan phasellus ultricies. Tincidunt pretium tincidunt urna natoque est sed facilisis. Conubia scelerisque diam accumsan dignissim commodo in eros tempus."
        }
      />
    </div>
  );
};

export default InstaMart;
