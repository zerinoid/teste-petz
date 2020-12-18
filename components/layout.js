import Head from "next/head"
import Link from "next/link"
import styles from "./layout.module.scss"
import utilStyles from "../styles/utils.module.scss"

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/icon.png" />
                <meta name="description" content="Teste petz" />
            </Head>
            <header className={`${styles.header} ${utilStyles.yellowBg}`}>
                {home ? (
                    <>
                        <img
                            src="/logo.png"
                            className={`${styles.headerHomeImage}`}
                            alt="Petz"
                        />
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/logo.png"
                                    className={`${styles.headerImage}`}
                                    alt="Petz"
                                />
                            </a>
                        </Link>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
