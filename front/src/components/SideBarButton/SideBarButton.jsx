import React from "react";

const SideBarButton = ({ image }, { iconType }) => {
  return (
    <div className="sideBar__icon">
      <img src={image} alt={iconType} />
    </div>
  );
};

export default SideBarButton;
