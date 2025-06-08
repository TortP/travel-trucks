import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
};

export default App;
