import { Button, Card, Typography } from "@mui/material";
import { IconTrash } from "@tabler/icons-react";
import React from "react";
import DivPopup from "../DivPopup";

const SampleTodoChild = ({ task }: { task: string }) => {
  return (
    <>
      <DivPopup>
        <Card sx={{ p: 1, display: "flex" }}>
          <Typography
            variant="body1"
            sx={{
              flex: 0.95,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {task}
          </Typography>
        </Card>
      </DivPopup>
    </>
  );
};

export default SampleTodoChild;
