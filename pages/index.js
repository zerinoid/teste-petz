import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import Button from "../components/button"
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.scss"
import { useMediaQuery } from "react-responsive"

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
    const [desktop] = useState(useMediaQuery({ query: "(min-width: 768px)" }))

    function apagarRegistro(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        })
        setList(list.filter(item => item.id !== id))
    }

    function onChangeHandler(e) {
        setInput(e.target.value)
    }

    function stringTrimmer(string) {
        var maxLength = 25
        if (desktop) maxLength = 60
        var trimmedString = string.substr(0, maxLength)
        if (string.length > trimmedString.length) {
            return trimmedString + "..."
        }
        return string
    }

    return (
        <Layout home>
            <Head>
                <title>Petz</title>
            </Head>
            <section className={utilStyles.yellowBg}>
                <input
                    type="text"
                    value={input}
                    onChange={onChangeHandler}
                    placeholder="Procure por título ou por conteúdo"
                />
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.paddingTop}`}
            >
                <ul className={utilStyles.list}>
                    {list
                        .filter(
                            post =>
                                input === "" ||
                                post.title.includes(input) ||
                                post.body.includes(input) ||
                                post.id == input
                        )
                        .map((post, index) => {
                            const title =
                                post.title.charAt(0).toUpperCase() +
                                post.title.slice(1)
                            return (
                                <li className={utilStyles.listItem} key={index}>
                                    {stringTrimmer(title)}
                                    <div className={utilStyles.buttons}>
                                        <Link href={`/posts/${post.id}`}>
                                            <a>
                                                <Button ver>
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                </Button>
                                            </a>
                                        </Link>
                                        <Button
                                            onClick={() =>
                                                apagarRegistro(post.id)
                                            }
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </div>{" "}
                                </li>
                            )
                        })}
                </ul>
            </section>
        </Layout>
    )
}
