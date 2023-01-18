import React, { useEffect, useRef } from 'react';
import { AboutMeInterface } from '../../types';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import Skills from '../skills';
import { useIsMobile } from '../../lib/helpers';

const About = ({ heading, biography, skills, image }: AboutMeInterface) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mobile = useIsMobile();
  return (
    <div id="about" className={'section'}>
      <div className="section-inner" ref={ref}>
        <div className="flex flex-wrap lg:flex-nowrap flex-row justify-between items-start">
          <div
            className={
              isInView && !mobile
                ? 'lg:w-2/3 lg:mr-4 box-border animate__animated animate__fadeInLeft animate__delay-1s'
                : 'lg:w-2/3 lg:mr-4 box-border'
            }
          >
            <h2>{heading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: biography,
              }}
            />
            <Skills skills={skills} />
          </div>
          {image && image.data && (
            <div
              className={
                isInView && !mobile
                  ? 'lg:w-1/3 flex-grow border-2 border-amber-400 overflow-hidden animate__animated animate__fadeInUp animate__delay-1s'
                  : 'lg:w-1/3 flex-grow border-2 border-amber-400 overflow-hidden'
              }
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${image.data.attributes.url}`}
                alt={image.data.attributes.alternativeText}
                placeholder="blur"
                blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}${image.data.attributes.formats.thumbnail.url}`}
                width={800}
                height={580}
                className={
                  'hover:scale-110 scale-100 transition-all duration-500 hover:invert'
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
About.displayName = 'About';
export default About;
