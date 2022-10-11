import React from "react";
import {
  Grid,
  Typography,
  Stack,
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";
// import Image from "next/image";
import Link from "next/link"; 

const BlogLink = ({ file }) => {
  return (
    <Grid item xs={12} key={file.slug} marginBottom="1rem">
      <Stack direction="row" alignItems="flex-start" paddingTop='0px' >
        <CardContent sx={{pt:'0px'}}>
          <Typography
            gutterBottom
            variant="h1"
            fontSize="2rem"
            fontWeight="400"
            component="div"
          >
            {file.frontMatter.title}
          </Typography>
          <Typography variant="p" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolorem iste placeat ipsam fuga at accusamus fugiat, praesentium
            quibusdam ipsum.
          </Typography>
          <CardActions sx={{pl:'0px'}} >
            <Link href={file.slug}>Read more</Link>
          </CardActions>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={file.frontMatter.thumbnailUrl}
          alt="green iguana"
        />
      </Stack>
    </Grid>
  );
};

export default BlogLink;


