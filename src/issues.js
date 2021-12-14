import React from 'react';
import data from './data.js'

const Issues = () => {
  const issues = data.issues

  return (
    <div id='home'>
      <h1>Issues</h1>
      <div className='container'>
        <div className='row'>
        {
          issues.map((issue) => {
            const {name, link, img} = issue

            return (
              <div className='col-md-4 col-sm-6 col-xs-12'>
                <h3>{name}</h3>
                <a href={link} target="_blank">
                  <img src={img} className='img-responsive'/>
                </a>
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  );
};

export default Issues;