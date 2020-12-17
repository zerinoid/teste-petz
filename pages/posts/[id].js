import Layout from "../../components/layout"
import Head from "next/head"
import utilStyles from "../../styles/utils.module.css"

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
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{post.title}</h1>
                <p className={utilStyles.lightText}> {post.id} </p>
                <div>{post.body}</div>
            </article>
        </Layout>
    )
}
