import React from 'react';
import './MyWork.css';
import Cards from './Cards';

const MyWork = () => {
  const netflixTech = (
    <p>
      🖥️ Technologies used: <br /> JavaScript, React, React Hooks, Firebase,
      React Router, Styled Components, FuseJS, Normalize.css and lastly the
      design pattern of Compound Components.
    </p>
  );
  const covidTech = (
    <p>
      🖥️ Technologies used: <br /> JavaScript, React, React Hooks, Axios,
      Material UI, Chart JS and React Countup.
    </p>
  );
  const todoTech = (
    <p>
      🖥️ Technologies used: <br /> JavaScript, React, React Hooks, Redux,
      react-redux, react-transition-group and UUID.
    </p>
  );
  const estudioJuridicoTech = (
    <p>
      🖥️ Technologies used: <br /> JavaScript, React, React Hooks, React Router
      and EmailJS.
    </p>
  );

  return (
    <div className='work-container' id='work'>
      <h1 className='work-title'>This is my work</h1>
      <ul className='cards-container'>
        <Cards
          src='./images/netflix-portada.jpg'
          title='Netflix clone'
          text='This application was built using React (Custom Hooks,
            Context), Firebase and Styled Components.
            Features protected Routes with auth listeners. Authentication
            is used in every page and handled by firebase.'
          technologies={netflixTech}
          githubLink='https://github.com/treigenborn/netflix-clone'
          websiteLink='https://treigenborn-netflix-clone.netlify.app'
        />
        <Cards
          src='./images/covid-tracker.jpg'
          title='Covid-19 live Statistics'
          text='App made with React, MaterialUI and axios, using an external
          API to display data about covid-19 of every country in the
          world'
          technologies={covidTech}
          githubLink='https://github.com/treigenborn/new-covid-tracker'
          websiteLink='https://treigenborn-covid-tracker.netlify.app/'
        />
      </ul>
      <ul className='cards-container'>
        <Cards
          src='./images/todoapp.png'
          title='Todo App Redux'
          text='This simple app was made with React and Redux. With it you
          can add a task, delete it, mark it as completed and edit it.'
          technologies={todoTech}
          githubLink='https://github.com/treigenborn/todo-app'
          websiteLink='https://treigenborn-todo-app.netlify.app'
        />
        <Cards
          src='./images/estudio-juridico.png'
          title='Estudio Jurídico'
          text='Full development for a local law firm from the design to
          the deployment. This was my first freelance project
          made completely in ReactJS. (Currently down so I re-uploaded it just for the portfolio)'
          technologies={estudioJuridicoTech}
          githubLink='https://github.com/treigenborn/estudio-juridico-react'
          websiteLink='https://treigenborn-estudio-juridico.netlify.app'
        />
      </ul>
    </div>
  );
};

export default MyWork;
