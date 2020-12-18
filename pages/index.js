import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.scss"

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
            <section className={utilStyles.headingMd}>
                <p>Procure por título ou por conteúdo do post:</p>
                <input type="text" value={input} onChange={onChangeHandler} />
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <ul className={utilStyles.list}>
                    {list
                        .slice(0, 10)
                        .filter(
                            post =>
                                input === "" ||
                                post.title.includes(input) ||
                                post.id == input
                        )
                        .map((post, index) => (
                            <li className={utilStyles.listItem} key={index}>
                                {post.title}
                                <Link href={`/posts/${post.id}`}>
                                    <a>
                                        <button>Visualizar</button>
                                    </a>
                                </Link>
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
