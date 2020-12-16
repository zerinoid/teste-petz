import Layout from "../../components/layout"
import Head from "next/head"

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()
    const paths = posts.map(post => ({
        params: { id: post.id }
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
}

export default function Post({ post }) {
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article>
                <h1>{post.title}</h1>
                {/* <div> */}
                {/*     <Date dateString={postData.date} /> */}
                {/* </div> */}
                <div>{post.body}</div>
            </article>
        </Layout>
    )
}
