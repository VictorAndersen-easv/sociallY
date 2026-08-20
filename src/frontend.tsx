/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import {StrictMode, useState} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import {App} from "./App";
import {LandingPage} from "@/LandingPage.tsx";
import PostsPage from "@/Posts/PostsPage.tsx";
import {PostDetailPage} from "@/Posts/PostDetailPage.tsx";
import {CreatePostPage} from "@/Posts/CreatePostPage.tsx";
import type {Post} from "@/Posts/listPosts.tsx";


//Routing
const elem = document.getElementById("root")!;

function Component() {

    const [posts,setPosts] = useState<Post[]>([])

    return   <>
        <RouterProvider router={createBrowserRouter([
                {
                    path: "/",
                    element: <LandingPage/>
                },
                {
                    path:"/createNewPost",
                    element: <CreatePostPage posts={posts} setPosts={setPosts}/>
                },
                {
                    path: "/posts",
                    element: <PostsPage posts={posts} setPosts={setPosts}/>,
                    children: [

                    ]
                }
                ,{
                    path: "posts/:postId",
                    element: <PostDetailPage/>
                }
            ]
        )}/>

    </>
}

const app = (


  <Component />
);


// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
