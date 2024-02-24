import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  return (
    <div>
      <h1>Kwesi</h1>
      <p>
        <Link to="/ccc" className="link">CCC</Link>
        <br />
        <br />
        <Link to="/dev" className="link">Dev</Link>
      </p>
    </div>
  );
};

const CccPage = () => {
  return <div><h1>Example from CCC</h1></div>
  //return <h1>CCC</h1>;
};

const DevPage = () => {
  return <div><h1>Example from Dev</h1></div>
  //return <h1>Dev</h1>;
};

function App() {
  return (
    <div className="center"> 
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ccc" element={<CccPage />} />
          <Route path="/dev" element={<DevPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const HomePage = () => {
  return <h1>Welcome to Kwesi's Home Page</h1>;
}

const KwesiPage = () => {
  return (
    <div>
      <h1>Kwesi</h1>
      <p>
        <Link to="/kwesi/khari">Khari</Link>
        <br />
        <Link to="/kwesi/batchelor">Batchelor</Link>
      </p>
    </div>
  );
};

const KhariPage = () => {
  return <h1>Khari</h1>;
};

const BatchelorPage = () => {
  return <h1>Batchelor</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kwesi" element={<KwesiPage />} />
        <Route path="/kwesi/khari" element={<KhariPage />} />
        <Route path="/kwesi/batchelor" element={<BatchelorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
*/