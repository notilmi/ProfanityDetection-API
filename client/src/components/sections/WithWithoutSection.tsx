import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import WithoutCard from "../WithoutCard";
import WithCard from "../WithCard";

const WithWithoutSection = () => {
  return (
    <>
      <Stack
        width={"100%"}
        direction={"column"}
        alignItems={"center"}
        height={"45dvh"}
        spacing={3}
      >
        <Typography
          variant="h1"
          fontSize={32}
          textAlign={"center"}
          fontWeight={700}
        >
          With and Without AI Powered Profanity Filter
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <WithoutCard />
          <WithCard />
        </Stack>
      </Stack>
    </>
  );
};

export default WithWithoutSection;
