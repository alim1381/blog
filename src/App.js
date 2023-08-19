import Header from './components/layout/Header';
import { gql , useQuery } from "@apollo/client"

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`

function App() {
  const { loading , data } = useQuery(QUERY)
  console.log(data);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
