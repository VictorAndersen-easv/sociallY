import {Link, Outlet} from "react-router";
import {ListPosts, type Post} from "@/Posts/listPosts.tsx";
import {useState} from "react";


interface PostsPageProps {
    posts: Post[],
    setPosts: (value: (((prevState: Post[]) => Post[]) | Post[])) => void
}

function PostsPage({posts, setPosts}: PostsPageProps) {

    return <div>
        <div>sociallY</div>
        <div><Link to={"/createNewPost"}>
            <button> Create New Post</button>
        </Link></div>
        <h1>Search Posts:</h1>


        <ListPosts posts={posts} setPosts={setPosts} />

        <Outlet/>

    </div>
}

export default PostsPage