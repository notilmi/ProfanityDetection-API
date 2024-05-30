import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import Gemini from "@/assets/Gemini.png";
import React from "react";
import Image from "next/image";
import CheckSection from "../CheckSection";
import { IconBrandGithub, IconPointer } from "@tabler/icons-react";
import SampleCard from "../ui/SampleCard";
import DivPopup from "../DivPopup";
import CloneItNowButton from "../CloneItNowButton";

const MainSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Stack
          width={"100%"}
          height={"95dvh"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
            <Typography variant="body2">Powered By</Typography>
            <Image
              src={Gemini}
              alt={"Gemini"}
              width={50}
              style={{ marginBottom: 8 }}
            />
          </Stack>
          <Typography
            variant="h1"
            fontSize={48}
            textAlign={"center"}
            fontWeight={700}
          >
            Eliminate Profanity <br /> from Your App Now! 😡💢
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            Eliminate profanities from ****ing with your app with our AI Powered
            profanity filter
          </Typography>
          <CheckSection />
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            spacing={2}
          >
            <Card sx={{ p: 1, backgroundColor: "#f1f1f1" }}>
              ~ git clone notilmi/ProfanityDetection-API
            </Card>
            <CloneItNowButton />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack
          width={"100%"}
          height={{ xs: "auto", md: "95dvh" }}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ mb: { xs: "20vh", md: 0 } }}
        >
          <SampleCard />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MainSection;
