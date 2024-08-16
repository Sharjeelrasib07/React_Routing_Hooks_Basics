import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();
  console.log(location.state); // This should log the state object, including id

  return (
    <div>
      <h1>This is the about page and my id is {location.state.id}</h1>  
    </div>
  );
}

export default About;
