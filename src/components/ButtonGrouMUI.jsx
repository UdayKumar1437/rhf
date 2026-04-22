import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";

const ButtonGrouMUI = () => {
  return (
    <div>
      <ButtonGroup
        sx={{
          "& .MuiButton-root": {
            color: "black",
            borderColor: "black",
          },
        }}
        orientation="vertical"
        variant="outlined"
        size="small"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGrouMUI;
