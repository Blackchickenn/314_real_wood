import Aboutus from "./components/Aboutus";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Ourwork from "./components/Ourwork";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div>
      <CssBaseline/>
      <Navbar />
      <Hero />
      <Ourwork />
    </div>
  );
}

export default App;
