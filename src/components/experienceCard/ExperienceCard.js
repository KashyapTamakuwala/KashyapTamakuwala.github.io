import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience["logo_path"]}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
                {experience["company"]}
              
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {experience["description"][0]}<br></br>
          {experience["description"][1]}<br></br>
          {experience["description"][2]}<br></br>
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
