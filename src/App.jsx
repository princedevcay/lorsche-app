import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import theme from './theme'; // Ensure this path is correct

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes here */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
