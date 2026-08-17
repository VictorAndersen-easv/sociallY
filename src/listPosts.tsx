import {useEffect, useState} from "react";

export function listPosts(){


    const [posts,setPosts] = useState<Post[]>([])

    //Get the posts
    useEffect(()=> {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((json)=>{setPosts(json.posts)})

    })


    //Display the posts
    return <div>

        {
            posts.map(p => {
            return <> <h3>{p.title}</h3> <span> {p.body}</span> </>
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
