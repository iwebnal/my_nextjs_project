import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { MainLayout } from '../../components/MainLayout'
import Link from 'next/link'

export default function Post({post: serverPost}) {
    const router = useRouter()
    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.postid}`)
            const data = await response.json()

            setPost(data)
        }

        if(!serverPost) {
            load()
        }
    }, [])

    if(!post) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }
    
    return (
        <MainLayout>
            {/* <Head>
                <title>Post { router.query.postid}</title>
            </Head> */}
            {/* <h1>Post { router.query.postid}</h1> */}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={'/posts'}><a>Back to all posts</a></Link>
        </MainLayout>
    )
}

Post.getInitialProps = async ({query, req}) => {
    if(!req) {
        return { post: null}
    }

    const response = await fetch(`http://localhost:4200/posts/${query.postid}`)
    const post = await response.json()

    return {
        post: post
    }
}