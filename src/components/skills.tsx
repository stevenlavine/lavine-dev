import React, { useRef } from 'react';
import { SkillInterface } from '../types';

const Skills = ({ skills }: { skills: SkillInterface[] }) => {
  return (
    <>
      {skills && (
        <div className={'skills'}>
          <h3 className="text-blue-100 text-xl mb-2 underline decoration-amber-200 underline-offset-8">
            Some of my key skills:
          </h3>
          <ul>
            {skills.map((item, i) => (
              <li key={i}>{item.skill}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Skills;
