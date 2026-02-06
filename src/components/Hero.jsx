import React from 'react'

const Hero = (props) => { 
  // props are how we pass data from one component to another, we can pass any data we want as props, in this case we are passing title and subtitle as props to the Hero component, and we can access them using props.title and props.subtitle
  return (
    
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {props.title}
            </h1>
            <p className="my-4 text-xl text-white">
              {props.subtitle}
            </p>
          </div>
        </div>
      </section>
  )
}

export default Hero