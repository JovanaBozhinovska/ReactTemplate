import React from "react";
import { Character } from "../../types/character.model";
import { Box, Typography, styled } from "@mui/material";

const OuterBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "300px",
  flexBasis: "50%",
  [theme.breakpoints.up("sm")]: {
    flexBasis: "33%",
    width: "250px",
    height: "250px",
  },
  minWidth: "200px",
  minHeight: "300px",
  overflow: "hidden",
}));

const InnerBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "index",
  name: "BoxProps",
})<{ index: number }>(({ index }) => ({
  backgroundColor: "grey",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  marginTop: "10px",
  border: index % 2 === 0 ? "1px solid red" : "none",
}));

export interface ImageCardProps {
  character: Character;
  index: number;
}

export const ImageCard = ({
  character,
  index,
}: ImageCardProps): JSX.Element => {
  console.log("here");
  return (
    <OuterBox>
      <InnerBox m={2} index={index}>
        <Typography color="white" p={2}>
          {character.name}
        </Typography>
        <img src={`${character.image.url}`} />
      </InnerBox>
    </OuterBox>
  );
};
