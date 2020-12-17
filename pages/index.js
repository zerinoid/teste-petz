import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"
import { useState } from "react"

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
    const [list, setList] = useState(posts)

    async function apagarRegistro(id) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        })
        setList(list.filter(item => item.id !== id))
    }

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
                    {list.slice(0, 10).map((post, index) => (
                        <li key={index}>
                            <Link href={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                            {/* <br /> */}
                            {/* <small className={utilStyles.lightText}> */}
                            {/*   <Date dateString={date} /> */}
                            {/* </small> */}
                            <button onClick={() => apagarRegistro(post.id)}>
                                Apagar
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
