import React from "react";
import PropTypes from "prop-types";

export const Section = (props) => {
  return (
    <section>
      <h2>{props.sectionsTitle}</h2>
      <ol>
        <li>{props.data[0].title}</li>
        <li>{props.data[1].title}</li>
        <li>{props.data[2].title}</li>
      </ol>
    </section>
  );
};
