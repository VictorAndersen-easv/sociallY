import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {listPosts, type Post, type Reactions} from "@/Posts/listPosts.tsx";


type MyParams = {
    postId: string;
}


export function PostDetailPage() {


    const params = useParams<MyParams>();
    const [post, setPost] = useState<Post | undefined>()


    useEffect(() => {
        getData()
    }, []);

    // I am not completely sure what this does, but it gets the right data
    async function getData() {

        const response = await fetch('https://dummyjson.com/posts/' + params.postId)
        const json = await response.json();
        setPost(json)
        console.log(post)

    }
    if(!post)
        return <div>loading...</div>

    //What actually shows up on the page
    return <div>
        sociallY

        <div> <Link to={"/posts/"}> <button> Go back</button> </Link> </div>

        <h1>{post.title}</h1> <h3> {post.body}</h3>

        <div>
            <p>🏷️Tags: {JSON.stringify(post.tags)}</p>
            <p>👁️Views: {post.views}</p>
            <p>👍 Likes: {post.reactions.likes}</p>
            <p>👎 Dislikes: {post.reactions.dislikes} </p>
        </div>

    </div>


}
