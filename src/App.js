import { Helmet } from 'react-helmet-async';
//import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import 'animate.css';
import ContactForm from './screens/ContactForm';
import FixedNavbar from './screens/FixedNavbar';
import HotspotBanner from './screens/HotspotBanner';
import Footer from './screens/Footer'
import Community from './screens/Community';
import Event from './screens/Event'
import ExclusiveContent from './screens/ExclusiveContent'
//import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

/* 
███████╗███╗   ██╗██████╗ ███████╗██████╗ 
██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗
█████╗  ██╔██╗ ██║██║  ██║█████╗  ██████╔╝
██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗
███████╗██║ ╚████║██████╔╝███████╗██║  ██║
╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝ 
*/

function App() {
  /* const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
   const [control, setControl] = useState('')

  useEffect(() => {
    if (isMobile){
      setControl('normal')
    }else{
      setControl('full-page')
    }
  }, [isMobile]); */

  return (
    <>
      <Helmet>
        <title>Gameloft</title>
      </Helmet>
      <div className="main">
        <FixedNavbar />
            <HotspotBanner />
            <ContactForm />
            <Community />
            <Event />
            <ExclusiveContent />
            <Footer />
      </div>
    </>
  );
}

export default App;
