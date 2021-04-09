import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <h1>This is my about me page.</h1>
    <p>Isn't this a cool page, you learned nothing about me.</p>
    <Link to="/">&larr; click to go back holmes</Link>
  </Layout>
);
export default About;
