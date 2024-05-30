import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FAQ from "../FAQ";
import FAQData from "@/data/faq.json";

const FAQSection = () => {
  return (
    <>
      <Box sx={{ mt: { xs: "60dvh", md: 6 } }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={700} color={"#b71c1c"}>
              FAQ
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              Frequently Asked Question
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 4, md: 0 } }}>
            <Stack direction="column" spacing={2}>
              {FAQData.map((item, index) => (
                <FAQ
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FAQSection;
