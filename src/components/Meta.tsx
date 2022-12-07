import React from 'react';
import { SeoMetaInterface } from '../types';
import Head from 'next/head';

const Meta = (props: SeoMetaInterface) => {
  return (
    <Head>
      <title>{props.metaTitle}</title>
      {props.metaDescription && (
        <meta name="description" content={props.metaDescription} />
      )}
      {props.keywords && <meta name="keywords" content={props.keywords} />}
      {props.metaSocial &&
        props.metaSocial.map((meta, i) => {
          if (meta.socialNetwork === 'Facebook') {
            return (
              <React.Fragment key={i}>
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                {meta.image && (
                  <>
                    <meta property="og:image" content={`${meta.image.url}`} />
                    <meta
                      property="og:image:alt"
                      content={meta.image.alternativeText}
                    />
                  </>
                )}

              </React.Fragment>
            );
          } else if (meta.socialNetwork === 'Twitter') {
            return (
              <React.Fragment key={i}>
                <meta property="twitter:title" content={meta.title} />
                <meta
                  property="twitter:description"
                  content={meta.description}
                />
                {meta.image && (
                  <>
                    <meta property="twitter:image" content={`${meta.image.url}`} />
                    <meta
                      property="twitter:image:alt"
                      content={meta.image.alternativeText}
                    />
                  </>
                  )}
              </React.Fragment>
            );
          }
        })}
    </Head>
  );
};
export default Meta;
