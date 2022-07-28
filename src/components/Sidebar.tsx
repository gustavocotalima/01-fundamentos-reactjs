import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=1"/>

        <div className={styles.profile}>
            <Avatar src="https://github.com/gustavocotalima.png"/>
            <strong>Gustavo Lima</strong>
            <span>@gustavocotalima</span>
        </div>

        <footer>
            <a href="#"> <PencilLine size={20}/> Editar seu perfil</a>
        </footer>
    </aside>
  )
}