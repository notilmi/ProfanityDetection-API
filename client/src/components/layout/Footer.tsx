import { Paper, Stack, Typography } from "@mui/material";
import AppLogo from "@/assets/AppLogo.svg";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: "20dvh",
          borderRadius: 0,
          backgroundColor: "#f1f1f1",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            height: "100%",
            maxWidth: "1280px",
            mr: "auto",
            ml: "auto",
            pl: 1,
            pr: 1,
          }}
        >
          <Stack direction="column" spacing={1}>
            <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
              <Image src={AppLogo} alt={"App Logo"} width={32} height={32} />
              <Typography variant="h6" fontWeight={700} fontSize={22}>
                NoProfanity
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontWeight={400}
              fontSize={14}
              maxWidth={"568px"}
            >
              NoProfanity is a simple and easy to use profanity detection <br />{" "}
              Copyright © {new Date().getFullYear()} - All Rights Reserved
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default Footer;
