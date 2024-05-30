import React from "react";
import { Button } from "@mui/material";
import { IconBrandGithub } from "@tabler/icons-react";

const CloneItNowButton = () => {
  return (
    <>
      <Button
        href="https://github.com/notilmi/ProfanityDetection-API"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<IconBrandGithub />}
      >
        Clone It Now!
      </Button>
    </>
  );
};

export default CloneItNowButton;
