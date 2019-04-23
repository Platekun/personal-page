/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        lang
        keywords
        twitterCreator
      }
    }
  }
`;

export function SEO() {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        author,
        lang,
        keywords,
        twitterCreator
      }
    }
  } = useStaticQuery(query);

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
          property: 'og:title',
          content: title
        },
        {
          name: 'author',
          content: author
        },
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: twitterCreator
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        }
      ].concat(
        keywords.length > 0
          ? {
              name: 'keywords',
              content: keywords.join(', ')
            }
          : []
      )}
    />
  );
}
