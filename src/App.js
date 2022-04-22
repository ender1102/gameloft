import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import ContactForm from './screens/ContactForm';
import FixedNavbar from './screens/FixedNavbar';
import HotspotBanner from './screens/HotspotBanner';
import Footer from './screens/Footer'
import Community from './screens/Community';
import Event from './screens/Event'
import ExclusiveContent from './screens/ExclusiveContent'
import ReactFullpage from '@fullpage/react-fullpage';

function App() {

  return (
    <BrowserRouter>
      <Helmet>
        <title>Gameloft</title>
      </Helmet>
      <div className="main">
        <FixedNavbar />
        {/* <ReactFullpage scrollingSpeed={1000} licenseKey = {'YOUR_KEY_HERE'} render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper> */}
              <HotspotBanner />
              <ContactForm />
              <Community/>
              <Event />
              <ExclusiveContent />
              <Footer />
            {/* </ReactFullpage.Wrapper>
          )
          }}
            /> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
