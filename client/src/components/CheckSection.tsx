import { Stack, Typography } from "@mui/material";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

const CheckSection = () => {
  return (
    <Stack
      direction={"column"}
      spacing={1}
      alignItems={"flex-start"}
      sx={{ mt: "48px" }}
    >
      <Stack direction="row" spacing={0.5} alignItems={"center"}>
        <IconCheck size={16} color="#388e3c" />
        <Typography variant={"body1"}>Quick 3 Minutes Setup</Typography>
      </Stack>
      <Stack direction="row" spacing={0.5} alignItems={"center"}>
        <IconCheck size={16} color="#388e3c" />
        <Typography variant={"body1"}>Make Your App Profanity Free</Typography>
      </Stack>
      <Stack direction="row" spacing={0.5} alignItems={"center"}>
        <IconCheck size={16} color="#388e3c" />
        <Typography variant={"body1"}>100% Free</Typography>
      </Stack>
    </Stack>
  );
};

export default CheckSection;
