import React from 'react';
import data from './data.js'

const About = () => {
  const abouts = data.about

  return (
    <div id='home'>
      <h1>About</h1>
      <div className='container'>
        <div className='row'>
        {
          abouts.map((about) => {
            const {name, role, img} = about

            return (
              <div className='col-md-4 col-sm-6 col-xs-12'>
                <h3>{name}</h3>
                <img src={img} className='img-responsive'/>
                <h5>{role}</h5>
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  );
};

export default About;