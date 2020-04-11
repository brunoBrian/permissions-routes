import React from 'react';

function ProtectAdmin() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://img.icons8.com/bubbles/2x/admin-settings-male.png'} className="App-logo" alt="logo" />
        <p>
          Page released for Admin and Owner profiles
        </p>
      </header>
    </div>
  );
}

export default ProtectAdmin;
