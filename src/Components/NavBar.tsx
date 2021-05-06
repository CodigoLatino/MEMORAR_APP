import { createPublicKey } from "node:crypto";
import { Link } from "wouter";
export const NavBar = () => {
  
  const menu = document.querySelector('#menu');
  const hamburger=()=>{
  if (menu) { 
      menu.classList.toggle('hidden');
    }
    };
  
  return (
    <>
      {
        <nav className="flex items-center justify-between flex-wrap sticky top-0 bg-nav p-6 lg:p-0">
          <div className="flex items-center flex-shrink-0 text-typo mr-6" >
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" />
            <span className="font-semibold text-4xl tracking-tight">Memorar App</span>
          </div>
          <div className="block lg:hidden">
            <button id="hamburger" onClick={hamburger} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-typo-dark hover:border-typo-dark">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div id="menu" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right hidden">
            <div className="text-sm lg:flex-grow">
              <div>
                <Link to="/" className="block font-semibold text-xl px-4 py-2 lg:pt-6 lg:pb-4 mt-4 lg:inline-block lg:mt-0 text-typo hover:text-typo-dark  hover:bg-hovernav mr-4">
                  Inicio
                </Link>
              </div>
            </div>
          </div>
        </nav>
      }
    </>
  );
};


