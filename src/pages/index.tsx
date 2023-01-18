import { GetServerSideProps } from 'next';
import { fetchPage, useIsMobile } from '../lib/helpers';
import { HomeProps } from '../types';
import Meta from '../components/Meta';
import About from '../components/sections/about';
import Work from '../components/sections/work';
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/header';
import AnimatedLogo from '../components/animated-logo';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Contact from '../components/sections/contact';

const Index = ({ data }: HomeProps) => {
  const [loading, setLoading] = useState(true);
  const mobile = useIsMobile();
  const { asPath } = useRouter();
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        if (asPath.includes('/#')) {
          const section = asPath.split('#')[1];
          const sectionBox = document.getElementById(section);
          if (window && sectionBox) {
            window.scroll(0, sectionBox.getBoundingClientRect().top);
          }
        }
      }, 3000);
    }
  }, [loading]);
  return (
    <>
      <Meta {...data.attributes.metaData} />
      {loading ? (
        <div className={'loading'}>
          <AnimatedLogo />
        </div>
      ) : (
        <div className={'page-wrapper'}>
          <Header />
          <main>
            <div className="hero section">
              {data.attributes.heroImage && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${data.attributes.heroImage.data.attributes.url}`}
                  alt={
                    data.attributes.heroImage.data.attributes.alternativeText
                  }
                  width={1918}
                  height={1078}
                  className="hero-background"
                />
              )}
              <div className="hero-inner">
                <h1
                  className={
                    !mobile ? 'animate__animated animate__fadeInLeft' : ''
                  }
                >
                  <span>{data.attributes.pageTitle.smallText}</span>
                  {data.attributes.pageTitle.largeText}
                </h1>
                {data.attributes.pageTitle.subTitle && (
                  <h3
                    className={
                      !mobile ? 'animate__animated animate__fadeInRight' : ''
                    }
                  >
                    {data.attributes.pageTitle.subTitle}
                  </h3>
                )}
                <div
                  className={
                    !mobile
                      ? 'hero-intro animate__animated animate__fadeInUp animate__delay-1s'
                      : ''
                  }
                  dangerouslySetInnerHTML={{
                    __html: data.attributes.introduction,
                  }}
                />
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => {
                  if (window) {
                    const firstSection = document.querySelector(
                      '.section:nth-child(2)'
                    );
                    if (firstSection) {
                      window.scroll(
                        0,
                        firstSection.getBoundingClientRect().top
                      );
                    }
                  }
                }}
              />
            </div>
            <About {...data.attributes.aboutMe} isMobile={mobile} />
            <Work {...data.attributes.work} />
            {/*<div id="blog" className="section">*/}
            {/*  <h2>Blog</h2>*/}
            {/*</div>*/}
            <Contact />
            <footer>
              <div className={''}></div>
            </footer>
          </main>
        </div>
      )}
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.cookies || '',
      ...(await fetchPage({
        path: '/api/homepage',
        locale: 'en',
        token: req.cookies?.jwt || '',
        params: {
          populate:
            'pageTitle,metaData.metaSocial.image,aboutMe.skills,aboutMe.image,work.projects.tags,work.projects.agency,heroImage',
        },
      })),
    },
  };
};
