import { Outlet, Link } from "react-router-dom"

const Home = () => {
  return <div>
      <Link to ='/register'>crear cuenta</Link>

      <Outlet />
    </div>


  
}

export default Home;