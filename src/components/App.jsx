import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div>
      <div>qaz</div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />} />
        </Route>
      </Routes>
    </div>
  );
};
