// HomePage.js

import React from 'react';
import { graphql } from 'gatsby'; // Import graphql from 'gatsby'
import Layout from '../components/siteLayout';
import useSiteMetadata from '../hooks/SiteMetadata';
import HomePosts from '../components/homeposts';
import Seo from "../components/seo"
import { getSrc } from "gatsby-plugin-image"
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      sort: { frontmatter: { date: ASC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            tags
            youtube {
              youtuber
            }
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  quality: 80
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
      }
    }
  }
`;

export const Head = () => (
  <>
    <body className="archivepage utilitypage" />
  </>
)

const HomePage = ({ data }) => {
  const { showNav } = useSiteMetadata();
  const { image } = useSiteMetadata();
  const { titleDefault } = useSiteMetadata();
  const { description } = useSiteMetadata();
  const { siteUrl } = useSiteMetadata();
  
  return (
    <Layout>
  <Seo
        title={titleDefault}
        description={description}
        image={ siteUrl + getSrc(image) }
      />



      {showNav ? (
        <div className='spacer' style={{ height: '70px', border: '0px solid yellow' }}></div>
      ) : (
        <div className="spacer2" style={{ height: "0", border: "0px solid yellow" }}></div>
      )}

      <HomePosts data={data} />
    </Layout>
  );
};

export default HomePage;
