"use client";

import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { IconPlus } from "@tabler/icons-react";
import React from "react";
import SampleTodoChild from "./SampleTodoChild";
import DivPopup from "../DivPopup";
import axios from "axios";
import toast from "react-hot-toast";

const SampleCard = () => {
  const [todo, setTodo] = React.useState([
    {
      task: "This is ****** awesome!!! 🔥🔥🔥",
    },
  ]);
  const [task, setTask] = React.useState("");
  console.log(todo.length);

  const handleAddTodo = async () => {
    if (todo.length > 5) {
      toast.error("You can only add 5 tasks");
      return;
    }
    if (task.trim() !== "") {
      toast("Filtering Text", {
        icon: "⏳",
      });
      const { data } = await axios.post("/api/detect", { message: task });
      const filteredText: string = data.result.censored as string;

      setTodo([...todo, { task: filteredText }]);

      toast.success("Text Filtered");

      setTask("");
    }
  };

  return (
    <div>
      <DivPopup>
        <Card sx={{ width: { xs: "100%", md: "424px" }, p: 2 }}>
          <Stack direction={"column"} spacing={1}>
            <Typography variant={"body1"} fontWeight={600} textAlign={"center"}>
              Your To-Do App 📃
            </Typography>
            <Stack display={"flex"} direction={"row"} spacing={1}>
              <TextField
                label={"Add a new task"}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                size="small"
                sx={{ flex: 0.8 }}
              />
              <Button
                onClick={handleAddTodo}
                variant="contained"
                size="small"
                sx={{ flex: 0.2 }}
                startIcon={<IconPlus size={20} />}
              >
                Add
              </Button>
            </Stack>
            <Card
              sx={{
                backgroundColor: "#f1f1f1",
                width: "100%",
                p: 1,
                maxHeight: "50dvh",
                overflow: "auto", // Added overflow property to make the card scrollable
              }}
            >
              <Stack direction="column" spacing={1}>
                {todo.map((item, index) => (
                  <SampleTodoChild key={index} task={item.task} />
                ))}
              </Stack>
            </Card>
          </Stack>
        </Card>
      </DivPopup>
    </div>
  );
};

export default SampleCard;
