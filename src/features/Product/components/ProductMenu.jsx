import DOMPurify from "dompurify";
import React from "react";

ProductMenu.propTypes = {};

function ProductMenu({ product = {} }) {
  const safeDes = DOMPurify.sanitize(product.description);
  return <div dangerouslySetInnerHTML={{ __html: safeDes }} />;
}

export default ProductMenu;
