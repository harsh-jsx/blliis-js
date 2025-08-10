import React from "react";
import MediaHero from "../components/media/MediaHero";
import MediaLogos from "../components/media/MediaLogos";
import MediaFeatured from "../components/media/MediaFeatured";
import MediaHighlight from "../components/media/MediaHighlight";
import MediaGallary from "../components/media/MediaGallary";

const Media = () => {
  return (
    <div>
      <MediaHero />
      <MediaLogos />
      <MediaFeatured />
      <MediaHighlight />
      <MediaGallary />
    </div>
  );
};

export default Media;
