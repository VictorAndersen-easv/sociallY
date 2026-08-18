import {Outlet} from "react-router";
import {listPosts} from "@/Posts/listPosts.tsx";

export function PostsPage(){

    return <div>
        <h1>Posts:</h1>

        {listPosts()}

        <Outlet/>

    </div>
}