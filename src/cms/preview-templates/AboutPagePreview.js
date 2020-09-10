import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor, widgetsFor }) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
    teamMembersTitle={entry.getIn(["data", "teamMembersTitle"])}
    teamMembers={widgetsFor("teamMembers").map((teamMember) => ({
      name: teamMember.getIn(["data", "name"]),
      role: teamMember.getIn(["data", "role"]),
      image: teamMember.getIn(["data", "image"]),
    }))}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
};

export default AboutPagePreview;
