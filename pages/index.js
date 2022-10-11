import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container, Typography, Grid, Item } from "@mui/material";
import BlogLink from "../components/BlogLink";

const Blogs = ({ allFiles }) => {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" fontSize="3rem" gutterBottom marginTop="10rem">
          {/* SuzanRana --blogs */}
        </Typography>
        <Grid container>
          {allFiles.map((file) => (
            <BlogLink file={file} key={file.slug} />
          ))}
        </Grid>
      </Container>
    </> 
  );
};

export default Blogs;

const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("blogs"));
  const allFiles = files.map((fileName) => {
    const markDownWithMeta = fs.readFileSync(path.join("blogs", fileName));
    const { data: frontMatter } = matter(markDownWithMeta);
    return {
      frontMatter,
      slug: fileName.split(".")[0],
    };
  });
  console.log(allFiles);
  return {
    props: {
      allFiles,
    },
  };
};
export { getStaticProps };
