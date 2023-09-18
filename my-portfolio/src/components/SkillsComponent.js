import React from 'react';
import { Skills } from '../data';
import { HiChip, HiBadgeCheck } from 'react-icons/hi';

export const SkillsComponent = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <HiChip className="w-10 inline-block w-16 h-16 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
           I'm a passionate web developer with a strong foundation in web technologies such as HTML, CSS, JavaScript, and React. I've also earned certificates in web development and SQL from MIMO, showcasing my dedication to continuous learning. Whether it's building responsive websites, managing projects with tools like ASANA, or leveraging databases with SQL, I'm well-equipped to tackle a wide range of challenges. You can verify my certificates here:
  <a class="text-green-400 hover:text-green-600" href="https://drive.google.com/file/d/1K3-eceStCTCWS9RhYHRkqkE5rFkk8F54/view" target='_blank' rel="noopener noreferrer"> Web Development Certificate</a> and
  <a class="text-green-400 hover:text-green-600" href="https://drive.google.com/file/d/1Wj4aK-0dTr_9slOr2WcLtiP3tX8KRjLb/view" target='_blank' rel="noopener noreferrer"> SQL Certificate</a>..
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {Skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <HiBadgeCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
