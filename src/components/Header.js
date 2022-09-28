// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div>
    <h2 id='title'> Call a Friend </h2>
    <h3 id='sub-title'>Your friendly contact app</h3>
    </div>
  );
};

export default Header;
