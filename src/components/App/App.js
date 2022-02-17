
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SomeComponent from '../SomeComponent/SomeComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
         <SomeComponent />
      </ErrorBoundary>
     
    </div>
  );
}

export default App;
