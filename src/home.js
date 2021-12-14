import React from 'react';
import data from './data.js'
import { Link } from 'react-router-dom';

const Home = () => {
  const issues = data.issues
  const last3 = issues.slice(-3)

  return (
    <div id='home'>
      <img src='https://user-images.githubusercontent.com/96118138/145988148-196b0fc4-852a-4fb4-b96d-18fec9784e62.png' id='home-logo'/> <br />
      <div class='redirect'>
        <Link to='/issues'>View All Issues</Link>
      </div>
      <br/><br/><br/>
      <h2>Last 3 Issues - </h2>
      <div className='container'>
        <div className='row'>
        {
          last3.map((issue) => {
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

export default Home;