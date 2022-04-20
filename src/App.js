import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import ContactForm from './components/ContactForm';
import FixedNavbar from './components/FixedNavbar';
import HotspotBanner from './components/HotspotBanner';
import Footer from './components/Footer'
import Event from './components/Event'
import ExclusiveContent from './components/ExclusiveContent'
import ReactFullpage from '@fullpage/react-fullpage';

function App() {

  return (
    <BrowserRouter>
      <Helmet>
        <title>Gameloft</title>
      </Helmet>
      <div className="main">
        <FixedNavbar />
        <ReactFullpage scrollingSpeed={1000} licenseKey = {'YOUR_KEY_HERE'} render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <HotspotBanner />
              <ContactForm />
              <Event />
              <ExclusiveContent />
              <Footer />
            </ReactFullpage.Wrapper>
          )
          }}
            />

      </div>
    </BrowserRouter>
  );
}

export default App;
