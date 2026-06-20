import Nav from './components/nav';
import Hero from './sections/hero';
import Features from './sections/features';
import Works from './sections/works';
import Popular from './sections/popular';
import Reviews from './sections/reviews';
import Footer from './sections/footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <Works />
      <Popular />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;