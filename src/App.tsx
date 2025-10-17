import './App.css';

import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

function App() {
  console.log('test 1234');

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
