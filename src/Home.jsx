import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const id = 5;
  const navigate = useNavigate();

  function gotoAbout() {
    navigate('/about', { state: { id: id } });
  }

  return (
    <>
      <div>
        <h1>This is Home Page</h1>   
      </div>
      <Link to="/about">About</Link><br />
      <Link to="/contact">Contact Us</Link>
      <button onClick={gotoAbout}>About Us</button>
    </>
  );
}

export default Home;
