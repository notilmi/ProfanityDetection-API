"use client";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React from "react";
import DivPopup from "./DivPopup";

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">{question}</Typography>
            {open ? <IconMinus /> : <IconPlus />}
          </Stack>
          {open ? (
            <DivPopup>
              <Box>
                <Typography variant="body1">{answer}</Typography>
              </Box>
            </DivPopup>
          ) : null}
        </Stack>
      </div>
      <Divider />
    </>
  );
};

export default FAQ;
