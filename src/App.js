// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
//  import Login from './components/Login';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//              <li><Link to="login">login</Link></li> 
           
//           </ul>
//         </nav>

//         <Routes> {/* Use Routes wrapper */}
//         {/* <Routes path="/" element={<Login/>}/> */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/Signup";
import Signup2 from "./components/Signup2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signup2" element={<Signup2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
