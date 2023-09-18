import React from 'react';
import { HiOutlineCode } from "react-icons/hi";
import { Data } from '../data';


export const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiOutlineCode className="mx-auto inline-block w-16 h-16 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These projects are based on front-end code. I will be adding backend
            functionality soon after learning. In these projects, various
            concepts have been used, such as JSX syntax, props, mapping,
            useState, and event listeners.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {Data.map((item) => (
            <a href={item.link}
            key={item.image}
            className="sm:w-1/2 w-100 p-4" target='_blank' rel="noopener noreferrer">
              <div className='flex relative'>
              <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require(`../images/${item.image}`)}
                />
                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </a>
          )
          )}
        </div>
      </div>
    </section>
  );
}
