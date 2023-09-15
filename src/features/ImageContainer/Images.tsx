import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { fetchImages } from "./imagesApi";
import { Character } from "../../types/character.model";
import { ImageCard } from "./ImageCard";
import { Box, TextField } from "@mui/material";

export const ImagesContainer = (): JSX.Element => {
  const [images, setImages] = useState<Character[]>();
  const [filter, setFilter] = useState<string>("");

  console.log(images);

  useEffect(() => {
    fetchImages().then((el) => {
      setImages(el);
    });
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e?.target.value) setFilter(e?.target.value || "");
    else setFilter("");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextField
        sx={{ width: "50%", backgroundColor: "white" }}
        placeholder="Search characters"
        onChange={handleChange}
      />
      <Box
        display="flex"
        flexWrap="wrap"
        ml={1}
        mr={1}
        sx={{ overflow: "hidden", justifyContent: "center" }}
      >
        {images &&
          images
            .filter((el) =>
              el.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((el, index) => {
              return <ImageCard character={el} index={index} />;
            })}
      </Box>
    </Box>
  );
};
