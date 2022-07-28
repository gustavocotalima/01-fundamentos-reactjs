import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    comment: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment( { comment, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
        onDeleteComment(comment);
    }

    function handleLike() {
        setLikeCount((likes) => likes + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gustavocotalima.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Lima</strong>
                            <time title="27 de Julho às 16h34" dateTime="2022-07-27">Publicado há 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentario'><Trash size={24}/></button>
                    </header>

                    <p>{ comment }</p>
                </div>

                <footer> <button onClick={handleLike}> <ThumbsUp /> Aplaudir </button>  <span>{likeCount}</span></footer>
            </div>
        </div>
    )
}