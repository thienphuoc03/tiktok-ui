import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/GlobalStyles/Layouts';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = route.layout
              ? route.layout
              : route.layout === null
              ? Fragment
              : DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
