import { Paper, Stack, Typography } from "@mui/material";
import AppLogo from "@/assets/AppLogo.svg";
import React from "react";
import Image from "next/image";
import CloneItNowButton from "../CloneItNowButton";

const Header = () => {
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: "48px",
          borderRadius: 0,
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
          <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
            <Image src={AppLogo} alt={"App Logo"} width={32} height={32} />
            <Typography variant="h6" fontWeight={700} fontSize={22}>
              NoProfanity
            </Typography>
          </Stack>
          <CloneItNowButton />
        </Stack>
      </Paper>
    </>
  );
};

export default Header;
