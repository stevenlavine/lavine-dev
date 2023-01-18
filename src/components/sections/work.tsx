import React, { useEffect, useRef, useState } from 'react';
import { ProjectInterface, TagInterface, WorkInterface } from '../../types';
import { useInView } from 'framer-motion';
import { useIsMobile } from '../../lib/helpers';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightFromSquare,
  faFolders,
} from '@fortawesome/pro-light-svg-icons';
import moment from 'moment';

const Work = ({ heading, introduction, projects }: WorkInterface) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mobile = useIsMobile();
  const [orderedProjects, setOrderedProjects] = useState<
    ProjectInterface[] | any[]
  >([]);

  useEffect(() => {
    const projectData = projects.data;
    setOrderedProjects(
      projectData.sort((a, b) => {
        if (moment(a.attributes.updatedAt).isBefore(b.attributes.updatedAt)) {
          return 1;
        } else if (
          moment(a.attributes.updatedAt).isAfter(b.attributes.updatedAt)
        ) {
          return -1;
        }
        return 0;
      })
    );
  }, [projects]);
  return (
    <div id="projects" className="section">
      <div className="section-inner" ref={ref}>
        <h2
          className={
            !mobile && isInView ? 'animate__animated animate__fadeInLeft' : ''
          }
        >
          {heading}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: introduction,
          }}
          className={
            !mobile && isInView ? 'animate__animated animate__fadeInUp' : ''
          }
        />
        {orderedProjects.length > 0 && (
          <ul className={'projects-list'}>
            {orderedProjects.map((project, i) => {
              return (
                <li key={i} className={'project-item'}>
                  <FontAwesomeIcon icon={faFolders} className={'icon'} />
                  {project.attributes.url && (
                    <Link
                      href={project.attributes.url}
                      className={'external-link'}
                      target={'_blank'}
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </Link>
                  )}
                  <h4>{project.attributes.name}</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.attributes.description,
                    }}
                    className={'flex-grow'}
                  />
                  {project.attributes.agency && (
                    <h5>
                      Agency:{' '}
                      {project.attributes.agency.url && (
                        <Link
                          href={project.attributes.agency.url}
                          target={'_blank'}
                          className={'underline'}
                        >
                          {project.attributes.agency.name}
                        </Link>
                      )}
                      {!project.attributes.agency.url && (
                        <span>{project.attributes.agency.name}</span>
                      )}
                    </h5>
                  )}
                  {project.attributes.tags && (
                    <ul className={'tag-list'}>
                      {project.attributes.tags.data.map(
                        (tag: { attributes: TagInterface }, j: number) => {
                          return <li key={j}>{tag.attributes.name}</li>;
                        }
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Work;
