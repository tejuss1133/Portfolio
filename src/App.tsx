/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] font-sans selection:bg-[#00D1FF] selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
