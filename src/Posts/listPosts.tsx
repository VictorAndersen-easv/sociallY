import {useEffect, useState} from "react";
import {Link} from "react-router";

export function listPosts(){


    const [posts,setPosts] = useState<Post[]>([])

    //Get the posts
    useEffect(()=> {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((json)=>{setPosts(json.posts)})

    }, [])

/*    function removePost(id: number) {
        const duplicate = [...posts];
        const filteredArray = duplicate.filter(p => p.id != id)
        setPosts(filteredArray)
    }*/

    //Display the posts. Link to go specific post
    return <div>

        <input onChange={e => {
            console.log(posts.filter(p => p.body.includes( e.target.value)))

            fetch('https://dummyjson.com/posts/search?q='+e.target.value)
                .then(res => res.json())
                .then((json) =>setPosts(json.posts));

        }} />
        {
            posts.map(p => {
                return <>  <h3>{p.title}</h3> <span> {p.body}</span> <Link to={"/posts/"+p.id}>  <button> Go to Post </button> </Link> </>
            })
        }


    </div>;
}


interface MyChildComponentProps {
    post: Post,
    removePost: (id: number) => void
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
