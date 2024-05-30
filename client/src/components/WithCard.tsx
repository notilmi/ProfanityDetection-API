import React from "react";
import { Card, Stack, Typography } from "@mui/material";
import { IconCheck } from "@tabler/icons-react";

const WithCard = () => {
  return (
    <div>
      <Card
        sx={{
          p: 3,
          backgroundColor: "#e8f5e9",
          width: { xs: "90%", md: "424px" },
          mr: "auto",
          ml: "auto",
        }}
        variant={"elevation"}
        elevation={0}
      >
        <Typography
          variant="h6"
          fontSize={22}
          fontWeight={600}
          color={"#1b5e20"}
          sx={{ mb: 1 }}
        >
          With NoProfanity
        </Typography>
        <Stack direction={"row"} spacing={0.5}>
          <IconCheck color="#1b5e20" size={24} />
          <Typography variant={"body1"} color="#1b5e20">
            Quick Setup 🤩
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={0.5}>
          <IconCheck color="#1b5e20" size={24} />
          <Typography variant={"body1"} color="#1b5e20">
            No More Machine Learning Thingy 🤓☝
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={0.5}>
          <IconCheck color="#1b5e20" size={24} />
          <Typography variant={"body1"} color="#1b5e20">
            Supports Wide Range Of Languages 🌎❌
          </Typography>
        </Stack>
      </Card>
    </div>
  );
};

export default WithCard;
