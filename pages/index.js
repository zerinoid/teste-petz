import Head from "next/head"
import Link from "next/link"

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}

export default function HomePage({ posts }) {
    return (
        <div>
            <Head>
                <title>Petz</title>
            </Head>
            <h1>Petz</h1>
            <ul>
                {posts.slice(0, 10).map((post, index) => (
                    <li key={index}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
