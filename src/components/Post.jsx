import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/gustavocotalima.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Lima</strong>
                        <span>@gustavocotalima</span>
                    </div>
                </div>

                <time title="27 de Julho às 16h34" dateTime="2022-07-27">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>
                <p><a href='#'>#novoprojeto</a>{' '} <a href='#'>#nlw</a> {' '} <a href='#'>#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe um comentário</strong>

                <textarea placeholder='Escreva o seu comentario'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>     
            </form>
        </article>
    )
}