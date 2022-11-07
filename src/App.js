import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routers';

function App() {
  return (
    <div className="App">
      <h1>
      <RouterProvider router={router}></RouterProvider>
      </h1>
    </div>
  );
}

export default App;
