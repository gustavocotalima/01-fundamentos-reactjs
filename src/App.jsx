import { Post } from './Post';

function App() {
  return (
    <>
      <Post 
        author="John Doe" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <Post author="Joan Bo" content="Another post!" />
    </>
  )
}

export default App
