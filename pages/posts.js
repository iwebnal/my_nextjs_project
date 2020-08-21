import { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'
import Link from 'next/link'


export default function Posts({posts: serverPosts}) {

    const [posts, setPosts] = useState([])

    const linkClickHandler = () => {
        Router.push('/')
    }

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts')
            const json = await response.json()
            setPosts(json)
        }

        if(!serverPosts) {
            load()
        }
    }, [])

    if(!posts) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={'Posts Page'}>
            {/* <Head>
                <title>Posts Page</title>
            </Head> */}
            <h1>Posts Page</h1>

            {/* <pre>{JSON.stringify(posts)}</pre > */}
            {/* <pre>{JSON.stringify(posts)}</pre > */}

            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post/[postid]`} as={`/post/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
                ))}
            </ul>
            <button onClick={linkClickHandler}>Go back to home</button>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}) => {
    if(!req) {
        return {posts: null}
    }

    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()

    return {
        posts: posts
    }
}