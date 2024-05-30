import FAQSection from "@/components/sections/FAQSection";
import MainSection from "@/components/sections/MainSection";
import WithWithoutSection from "@/components/sections/WithWithoutSection";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <MainSection />
      <WithWithoutSection />
      <FAQSection />
    </div>
  );
};

export default LandingPage;
