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
    const [input, setInput] = useState("")

    function apagarRegistro(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        })
        setList(list.filter(item => item.id !== id))
    }

    function onChangeHandler(e) {
        setInput(e.target.value)
    }

    return (
        <Layout home>
            <Head>
                <title>Petz</title>
            </Head>
            <section>
                <p>Procure por título ou por conteúdo do post:</p>
            </section>
            <section>
                <input type="text" value={input} onChange={onChangeHandler} />
                <ul>
                    {list
                        .slice(0, 10)
                        .filter(
                            post =>
                                input === "" ||
                                post.title.includes(input) ||
                                post.id == input
                        )
                        .map((post, index) => (
                            <li key={index}>
                                {post.title}
                                <Link href={`/posts/${post.id}`}>
                                    <a>
                                        <button>Visualizar</button>
                                    </a>
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
