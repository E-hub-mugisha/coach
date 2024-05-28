import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Brands from './components/Brands';
import BMICalculator from './components/BMICalculator';
import CollapsibleExample from './components/CollapsibleExample';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Blogs = lazy(() => import('./components/Blogs'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
        <CollapsibleExample />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/testimonials" element={<Testimonials/>}/>
              <Route path="/BMICalculator" element={<BMICalculator/>}/>
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
  );
}

export default App;
