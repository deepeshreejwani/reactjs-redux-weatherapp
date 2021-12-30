import React from 'react';
import SearchLocation from './SearchLocation';

const Header = () => {
  return (<>
    <header className="mt-5 d-flex justify-content-center align-items-center">
        <h2>Weather App</h2>
    </header>
    <div className="mt-2 d-flex justify-content-center align-items-center">
      <SearchLocation />
    </div>
  </>
  );
};


export default Header;
