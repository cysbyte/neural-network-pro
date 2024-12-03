import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { Suspense } from 'react';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App

