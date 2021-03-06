import Layout from "../../components/layout"
import Head from "next/head"
import utilStyles from "../../styles/utils.module.scss"

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()
    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    const post = await res.json()

    return { props: { post } }
}

export default function Post({ post }) {
    const title = post.title.charAt(0).toUpperCase() + post.title.slice(1)
    const body = post.body.charAt(0).toUpperCase() + post.body.slice(1)
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{title}</h1>
                <div className={utilStyles.lightText}>
                    <p>ID do usuário: {post.userId}</p>
                    <p>Id: {post.id}</p>
                </div>
                <div>{body}</div>
            </article>
        </Layout>
    )
}
