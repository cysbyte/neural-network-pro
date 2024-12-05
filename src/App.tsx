import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { Suspense } from 'react';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Stake from './pages/Stake';
import Stake2 from './pages/Stake2';
import GlobalStyle from './styles/GlobalStyle';
import { DialogProvider } from './providers/DialogProvider';

function App() {

  return (
    <DialogProvider>
      <GlobalStyle />
      <Router>
        <Suspense>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/stake" element={< Stake />} />zx
            <Route path="/stake2" element={< Stake2 />} />zx
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </DialogProvider>
  )
}

export default App

