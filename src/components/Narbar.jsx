import { appleImg, searchImg, bagImg } from "../utils";
import {navLists} from '../constants'
const Narbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div className="px-5 text-gray cursor-pointer text-sm hover:text-white transition ease-in-out" key={nav}>{nav}</div>
          ))}
        </div>
        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Narbar;
