import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import ReadLink from '../components/Read-Link';

//this is the template for our posts, it renders the markdown using MDXRenderer which is gotten from the query for the slug which was made available by the declaration in gatsby-node.js.

//export a query to graphql layer
export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;
//that query gets used here... magic?
const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);
export default PostTemplate;
