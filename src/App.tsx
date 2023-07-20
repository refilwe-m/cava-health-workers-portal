import { BrowserRouter, NavLink } from "react-router-dom";
import { Dashboard } from "./components";
import { Logo } from "./assets";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="w-full h-12 flex flex-col-reverse hover:text-[#e7e170] justify-center bg-primary">
          <NavLink className="" to="/">
            {({ isActive }) => (
              <div>
                <img src={Logo} width={60} />
                <div className={(isActive && "is-active") || ""} />
              </div>
            )}
          </NavLink>
        </nav>
        <div className="px-12">
          <Dashboard />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
