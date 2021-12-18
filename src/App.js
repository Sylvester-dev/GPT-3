import {Blog, Footer, Features, Header, Possibility, WhatGPT3} from './containers';
import {Article, Brand, Cta, Feature, Navbar} from './components';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
    <div>
      <Navbar />
      <Header />
    </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
