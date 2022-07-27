import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR/';

export function Post( { post }) {
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH'h'mm", {locale: ptBR});
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {locale: ptBR, addSuffix: true});

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>@{post.author.username}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                { post.content.map((content, index) => {
                    if (content.type === 'paragraph') {
                        return <p key={index}>{content.content}</p>

                    } else if (content.type === 'link') {
                        return <p><a key={index} href={content.content}>{content.content}</a></p>
                    }
                })} 
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe um comentário</strong>

                <textarea placeholder='Escreva o seu comentario'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>     
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}