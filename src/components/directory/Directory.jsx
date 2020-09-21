import React from "react";
import MenuItem from "../menu-item/Menu-item";
import "./Directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "./../../redux/directory/directory.selectors";

const Directory = ({ categories }) => {
  const allCards = categories.map((card) => (
    <MenuItem {...card} key={card.id} />
  ));
  return <div className="directory-menu">{allCards}</div>;
};

const mapStateToProps = createStructuredSelector({
  categories: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
