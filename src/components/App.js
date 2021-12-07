import { Link, Outlet } from 'react-router-dom'

export default function App() {
    return (
        <div>
          <nav style={{
          borderBottom: "solid 1px", 
          paddingBottom: "1rem"
        }}>
            <Link to="/home">Go to Home Page</Link>
            <Link to="/procedures">See Our Procedures</Link>
            <Link to="/contact">Contact Us!</Link>
          </nav>
          <Outlet />
        </div>
    );
}