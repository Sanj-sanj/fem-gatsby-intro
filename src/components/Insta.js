import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/react';
import useInstagram from '../hooks/useInstagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  return (
    <>
      <h2>
        Instagram posts{' '}
        {/* cannot acess insta info publically anymore liek username, imgs ok */}
      </h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 12px 44px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                /* anything inside of this gets that v */
                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <a href={`https://www.instagram.com/sunshinecabinets/`}>
        See more on Insta &rarr;
      </a>
    </>
  );
};
export default Insta;
