import {Route, Routes} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Comments from './components/comments/Comments';
import {Navigate} from 'react-router-dom';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/quotes' replace/>}
        />

        <Route
          path="/quotes"
          element={<AllQuotes/>}
        />

        <Route
          path="/quotes/:quoteId/*"
          element={<QuoteDetail/>}
        />

        <Route
          path="/new-quotes"
          element={<NewQuote/>}
        /> 
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
