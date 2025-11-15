import { Route, Routes } from 'react-router';
import { Main } from './layout/Main';
import { DesignSystems } from './pages/DesignSystems';
import { Home } from './pages/Home';
import { Leadership } from './pages/Leadership';
import { ObservabilityD3 } from './pages/ObservabilityD3';
import { StateManagement } from './pages/StateManagement';
import { WebGLMedia } from './pages/WebGLMedia';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="design-systems" element={<DesignSystems />} />
        <Route path="state-management" element={<StateManagement />} />
        <Route path="observability-d3" element={<ObservabilityD3 />} />
        <Route path="webgl-media" element={<WebGLMedia />} />
        <Route path="leadership" element={<Leadership />} />
      </Route>
    </Routes>
  );
}

export default App;
