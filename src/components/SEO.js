import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description }) => {
  const { pathname } = useLocation();
  const rootUrl = window.location.origin;
  const path = pathname === "/" ? "" : pathname;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={`${rootUrl}${path}`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://clothing-store-lovat.vercel.app/km.png"
      />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
