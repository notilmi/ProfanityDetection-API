import { Card, Stack, Typography } from "@mui/material";
import { IconX } from "@tabler/icons-react";
import React from "react";

const WithoutCard = () => {
  return (
    <div>
      <Card
        sx={{
          p: 3,
          backgroundColor: "#ffebee",
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
          color={"#b71c1c"}
          sx={{ mb: 1 }}
        >
          Without NoProfanity
        </Typography>
        <Stack direction={"row"} spacing={0.5}>
          <IconX color="#b71c1c" size={24} />
          <Typography variant={"body1"} color="#b71c1c">
            Manually Write List Of Profanity 🤮
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={0.5}>
          <IconX color="#b71c1c" size={24} />
          <Typography variant={"body1"} color="#b71c1c">
            Doing All Of Those Machine Learning Thing 🤓☝
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={0.5}>
          <IconX color="#b71c1c" size={24} />
          <Typography variant={"body1"} color="#b71c1c">
            Only Supports Few Languages 🌎❌
          </Typography>
        </Stack>
      </Card>
    </div>
  );
};

export default WithoutCard;
