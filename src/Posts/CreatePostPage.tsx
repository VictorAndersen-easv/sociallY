import {Link} from "react-router";
import {useState} from "react";
import { ListPosts, type Post} from "@/Posts/listPosts.tsx";


interface CreatePostPageProps {
    setPosts: (value: (((prevState: Post[]) => Post[]) | Post[])) => void,
    posts: Post[]
}

export function CreatePostPage({setPosts, posts}: CreatePostPageProps) {


    const [finishedText, setFinishedText] = useState<String>("")

    const [titleText, setTitleText] = useState<String>()
    const [bodyText, setBodyText] = useState<String>()

    return <div>
        <Link to={"/posts"}>
            <button> Go Back </button>
        </Link>

        <div>
            Post title: <input onChange={e => {
            setTitleText(e.target.value)
        }}/>
            Post body: <input onChange={e => {
            setBodyText(e.target.value)
        }}/>
            <button onClick={() => {
                fetch('https://dummyjson.com/posts/add', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        title: titleText,
                        userId: 5,
                        body: bodyText,
                    })
                })
                    .then(res => res.json())
                    .then(json => {
                        const d = [...posts, json]
                        setPosts(d)
                        setFinishedText("Post successfully created!")

                    });
            }}>Create Post
            </button>
            <div>{finishedText}</div>

        </div>

    </div>

}

