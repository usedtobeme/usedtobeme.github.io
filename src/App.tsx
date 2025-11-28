import { Text } from '@ui/components/Text';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Main } from './layout/Main';

const Home = lazy(() =>
  import('./pages/Home').then((m) => ({ default: m.Home })),
);
const Blog = lazy(() =>
  import('./pages/Blog').then((m) => ({ default: m.Blog })),
);
const BlogPost = lazy(() =>
  import('./components/Blog').then((m) => ({ default: m.BlogPost })),
);
const DesignSystems = lazy(() =>
  import('./pages/DesignSystems').then((m) => ({ default: m.DesignSystems })),
);
const StateManagement = lazy(() =>
  import('./pages/StateManagement').then((m) => ({
    default: m.StateManagement,
  })),
);
const ObservabilityD3 = lazy(() =>
  import('./pages/ObservabilityD3').then((m) => ({
    default: m.ObservabilityD3,
  })),
);
const WebGLMedia = lazy(() =>
  import('./pages/WebGLMedia').then((m) => ({ default: m.WebGLMedia })),
);
const Portfolio = lazy(() =>
  import('./pages/Portfolio').then((m) => ({ default: m.Portfolio })),
);

function App() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="design-systems" element={<DesignSystems />} />
          <Route path="state-management" element={<StateManagement />} />
          <Route path="observability-d3" element={<ObservabilityD3 />} />
          <Route path="webgl-media" element={<WebGLMedia />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
