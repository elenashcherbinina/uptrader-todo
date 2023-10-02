import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import routes from './routes';
import Layout from './components/pages/Layout';
import HomePage from './components/pages/HomePage';
import TasksPage from './components/pages/TasksPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.rootPage} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={`project/:id${routes.tasksPage}`} element={<TasksPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
