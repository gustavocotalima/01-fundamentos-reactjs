import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface PostProps {
    post: { 
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
}

export function Post( { post }: PostProps) {
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH'h'mm", {locale: ptBR});
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {locale: ptBR, addSuffix: true});

    const [comments, setComments] = useState(['Comentário 1', 'Comentário 2', 'Comentário 3']);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Comentário inválido");
    }

    function deleteComment(commentToDelete: string) {
        setComments(comments.filter(c => c !== commentToDelete ));
    }

    const isNewCommentEmpty = newCommentText.length===0

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
                { post.content.map((content, id) => {
                    if (content.type === 'paragraph') {
                        return <p key={id}>{content.content}</p>

                    } else if (content.type === 'link') {
                        return <p key={id}><a  href={content.content}>{content.content}</a></p>
                    }
                })} 
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentário</strong>

                <textarea 
                    placeholder='Escreva o seu comentario' 
                    value={newCommentText} 
                    onChange={handleNewCommentChange} 
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>     
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => <Comment key={comment} comment={comment}  onDeleteComment={deleteComment} />)}
            </div>
        </article>
    )
}