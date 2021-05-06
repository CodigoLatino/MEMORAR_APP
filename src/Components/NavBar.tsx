import { Link } from "wouter";
export const NavBar = () => {
  
  return (
    <>
      {
        <nav className="flex w-full justify-center space-x-3 sticky top-0">
          <Link to="/">Home</Link>
        </nav>
      }
    </>
  );
};


