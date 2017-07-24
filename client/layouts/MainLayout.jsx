import React from 'react';
import AccountUI from '../../imports/ui/AccountUI.jsx';

 export const MainLayout=({content}) =>(
  <div className="main-layout">
    <header>
      <h2>My Resolutions</h2>
        <nav>
          <a href="/">Resolutions</a>
          <a href="/student">Students</a>
          <a href='/about'>About</a>
          <AccountUI />
        </nav>
    </header>
    <main>
      {content}
    </main>
  </div>
)
