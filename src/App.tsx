import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

interface Post { 
    id: number;
    author: {
        avatarUrl: string;
        name: string;
        username: string;
    };
    content: {
        type: 'paragraph' | 'link';
        content: string;
    }[];
    publishedAt: Date;
}

type Posts = Post[];

const posts : Posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustavocotalima.png',
      name: 'Gustavo Lima',
      username: 'gustavocotalima',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'} ,
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-27 16:34:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/github.png',
      name: 'Github',
      username: 'github',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'} ,
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-07 16:34:00')
  }
]


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => { 
              return (<Post key={post.id} post={post} />)
            }
          )}
        </main>

      </div>
    </>
  )
}

export default App
