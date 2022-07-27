import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/gustavocotalima.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Lima</strong>
                            <time title="27 de Julho às 16h34" dateTime="2022-07-27">Publicado há 1h</time>
                        </div>

                        <button title='Deletar comentario'><Trash size={24}/></button>
                    </header>

                    <p>Muito bom, parabéns!</p>
                </div>

                <footer> <button> <ThumbsUp /> Aplaudir </button>  <span>20</span></footer>
            </div>
        </div>
    )
}