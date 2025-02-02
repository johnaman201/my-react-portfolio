import React from "react";
import "./index.css";
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaCircle
  } from "react-icons/fa";
import { socialprofiles } from "../../util/common-data/social-profile";

const ICON_MAPPING = {
    default: FaCircle,
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
};

export const SocialIcons = () => {
    return (
      <div className="stick_follow_icon">
        <ul>
          {Object.entries(socialprofiles).map(([platform, url]) => {
            const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
            return (
              <li key={platform}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent />
                </a>
              </li>
            );
          })}
        </ul>
        <p>Follow Me</p>
      </div>
    );
  };



