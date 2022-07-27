import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <Post 
        author="John Doe" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <Post author="Joan Bo" content="Another post!" />
    </>
  )
}

export default App
