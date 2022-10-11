import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import  SyntaxHighlighter from 'react-syntax-highlighter'
import { Container } from '@mui/material'
const components = { SyntaxHighlighter }
const BlogDetail = ({ frontMatter, mdxSource}) => {
  return (
    <Container maxWidth="md">
       <MDXRemote {...mdxSource} components={components}/>
    </Container>
  )
}

export default BlogDetail;

const getStaticPaths = async () => {
      const files = fs.readdirSync(path.join('blogs'))
      const paths = files.map( fileName => {
        return{
          params: {
            slug: fileName.split('.')[0]
          }
        }
      })
      return {
        paths,
        fallback: false,
      }
}
const getStaticProps = async ({ params: { slug }}) => {
    const markDownWithMeta = fs.readFileSync(path.join('blogs', `${slug}.mdx`), 'utf-8')
    const { data: frontMatter, content} = matter(markDownWithMeta)
    const mdxSource = await serialize(content)

    return{
      props: {
        frontMatter,
        slug,
        mdxSource

      }
    }
 

}

export { getStaticPaths, getStaticProps}  