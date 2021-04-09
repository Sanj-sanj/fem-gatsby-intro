import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  /* background-image: url('./images/matt-wang-mn.jpg'); */
  background-position: top 20% center;
  /* background-size: cover; */
  height: 50vh;

  /* this selector means whatever element is before, apply to that*/
  * + * {
    margin-top: 0;
  }

  /* this selector means whatever the next element is, apply to that*/
  + * {
    margin-top: 0;
  }
`;
const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ffcca9de, 8rem, #27003900);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "matt-wang-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn={true}>
        <TextBox>
          <h1>Frontend Masters + Gatsby &hearts;</h1>
          <p>
            Hello British Columbia{' '}
            <Link to="/about/">Learn about me &rarr;</Link>
          </p>
        </TextBox>
      </ImageBackground>
    </>
  );
};

export default Hero;
