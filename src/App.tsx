import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';
import AGB from './pages/AGB';
import AVV from './pages/AVV';
import CookiePolicy from './pages/CookiePolicy';
import CookieBanner from './components/CookieBanner';
import CookieSettingsModal from './components/CookieSettingsModal';
import ScrollToTop from './components/ScrollToTop';
import { useCookieConsent } from './hooks/useCookieConsent';

function AppContent() {
  const {
    consent,
    showBanner,
    showModal,
    setShowModal,
    acceptAll,
    rejectAll,
    saveCustom,
    categories
  } = useCookieConsent();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/avv" element={<AVV />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>

      {/* Cookie Banner */}
      {showBanner && (
        <CookieBanner
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onCustomize={() => setShowModal(true)}
        />
      )}

      {/* Cookie Settings Modal */}
      <CookieSettingsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={saveCustom}
        onAcceptAll={acceptAll}
        onRejectAll={rejectAll}
        currentConsent={consent?.accepted || null}
        allCategories={categories}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
