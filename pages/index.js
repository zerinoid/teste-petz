import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"

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
        <Layout home>
            <Head>
                <title>Petz</title>
            </Head>
            <section>
                <p> etc etc etc</p>
            </section>
            <section>
                <ul>
                    {posts.slice(0, 10).map((post, index) => (
                        <li key={index}>
                            <Link href={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                            {/* <br /> */}
                            {/* <small className={utilStyles.lightText}> */}
                            {/*   <Date dateString={date} /> */}
                            {/* </small> */}
                            <button>Apagar</button>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
