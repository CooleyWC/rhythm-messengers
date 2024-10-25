import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, meta }) => {
  return (
    <Helmet>
      {/* remove title */}
      <title>{title}</title>
      {meta.length > 0 &&
        meta.map(({ name, content }) => {
          return <meta key={name} name={name} content={content}></meta>;
        })}
    </Helmet>
  );
};

export default SEO;
