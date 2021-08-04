import React from "react";
import CTALayoutsTypeTwelve from "../layouts/CTALayouts/CTALayoutsTypeTwelve/CTALayoutsTypeTwelve";
import FeaturesLayoutsTypeFourteen from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeFourteen/FeaturesLayoutsTypeFourteen";
import FeaturesLayoutsTypeNinth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeNinth/FeaturesLayoutsTypeNinth";
import FeaturesLayoutsTypeSecond from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeSecond/FeatureLayoutsTypeSecond";
import FeaturesLayoutsTypeSeventeenth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeSeventeenth/FeaturesLayoutsTypeSeventeenth";
import FeaturesLayoutsTypeTenth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeTenth/FeaturesLayoutsTypeTenth";
import FeaturesLayoutsTypeTwelve from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeTwelve/FeaturesLayoutsTypeTwelve";

const Homescreen = () => {
  return (
    <>
      <FeaturesLayoutsTypeSecond dark={false} />
      <FeaturesLayoutsTypeNinth dark={true} />
      <FeaturesLayoutsTypeTwelve dark={false} />
      <FeaturesLayoutsTypeSeventeenth dark={true} />
      <FeaturesLayoutsTypeFourteen />
      <FeaturesLayoutsTypeTenth dark={true} />
      <CTALayoutsTypeTwelve dark={false} />
    </>
  );
};

export default Homescreen;
