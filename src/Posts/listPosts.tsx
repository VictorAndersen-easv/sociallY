import {useEffect, useState} from "react";
import {Link} from "react-router";

interface ListPostsProps {
    posts: Post[] ,
    setPosts: ((value: (((prevState: Post[]) => Post[]) | Post[])) => void)
}

export function ListPosts({posts, setPosts}: ListPostsProps) {



    //Get the posts
    useEffect(() => {
        if(posts.length > 0)
            return;
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((json) => {
                setPosts(json.posts)
            })

    }, [posts])


    //Search the posts. Display the posts. Link to go specific post.
    return <div>


        <input onChange={e => {
            console.log(posts.filter(p => p.body.includes(e.target.value)))

            fetch('https://dummyjson.com/posts/search?q=' + e.target.value)
                .then(res => res.json())
                .then((json) => setPosts(json.posts));

        }}/>
        {
            posts.map(p => {
                return <>  <h3>{p.title}</h3> <span> {p.body}</span> <Link to={"/posts/" + p.id}>
                    <button> Go to Post</button>
                </Link> </>
            })
        }


    </div>;


}

//Set what a post is/has
export interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}

export interface Reactions {
    likes: number
    dislikes: number
}

export interface Comments {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}

export interface User {
    id: number
    username: string
    fullName: string
}
