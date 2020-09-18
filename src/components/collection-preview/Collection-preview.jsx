import React from "react";
import "./Collection-preview.scss";
import CollectionItem from "../collection-item/Collection-item";

const CollectionPreview = ({ title, items }) => {
  const itemsData = items
    .filter((item, index) => index < 4)
    .map(item => <CollectionItem key={item.id} item={item}></CollectionItem>);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{itemsData}</div>
    </div>
  );
};

export default CollectionPreview;
