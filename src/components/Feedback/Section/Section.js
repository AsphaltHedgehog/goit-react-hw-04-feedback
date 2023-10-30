import React from "react";

import PropTypes from 'prop-types';

import css from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className="">
      <p className={css.title}>
        {title}
      </p>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


export default Section;