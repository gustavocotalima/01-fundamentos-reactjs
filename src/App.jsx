import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="John Doe" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          <Post author="Joan Bo" content="Another post!" />
        </main>

      </div>
    </>
  )
}

export default App
