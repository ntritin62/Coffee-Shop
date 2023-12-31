import React from 'react';
import { useLoaderData, NavLink } from 'react-router-dom';
const data = ['cold coffee', 'hot coffee', 'hot tea', 'cold tea'];
const Sidebar = () => {
  // const NavData = useLoaderData();
  return (
    <div className="max-w-[230px] w-full md:max-w-full ">
      <h2 className="text-4xl font-bold sm:text-3xl sm:font-medium">
        Categories
      </h2>
      <nav className="flex flex-col gap-[16px] mt-[20px] md:flex-row md:overflow-x-auto">
        {data.map((item) => (
          <NavLink
            to={`./${item}`}
            className={({ isActive }) =>
              isActive
                ? 'flex items-center rounded-[10px] justify-between pl-[20px] font-bold h-[60px] flex-shrink-0 bg-active-sidebar dark:text-text text-dark-text w-full md:w-[148px] md:h-[38px] md:text-2xl md:font-medium'
                : 'flex items-center rounded-[10px] justify-between pl-[20px] font-bold h-[60px] flex-shrink-0 dark:bg-dark-sidebar bg-sidebar w-full md:w-[148px] md:h-[38px] md:text-2xl md:font-medium'
            }
          >
            {item}
            <img
              src="/image/sidebar-img.png"
              alt=""
              className="w-[70px] h-[50px] object-cover md:w-[44px] md:h-[30px]"
            />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
