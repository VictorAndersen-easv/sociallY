import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {listPosts, type Post, type Reactions} from "@/Posts/listPosts.tsx";


type MyParams = {
    postId: string;
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}


export function PostDetailPage() {


    const params = useParams<MyParams>();
    const [post, setPost] = useState()
    // Stupid workaround because i can't just use "post"
    const myCurrentPost: Post = post??"";


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

    //What actually shows up on the page
    return <div>
        sociallY

        <div> <Link to={"/posts/"}> <button> Go back</button> </Link> </div>

        <h1>{myCurrentPost.title}</h1> <h3> {myCurrentPost.body}</h3>

        <div> <p> Tags: {myCurrentPost.tags}</p>
            <p>Views: {myCurrentPost.views}</p>
            <p> Likes: more than 1 i guess</p>
            <p> Dislikes: more than 2 i think </p>
        </div>

    </div>


}
