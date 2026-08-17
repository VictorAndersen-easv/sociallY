import {Outlet} from "react-router";
import {listPosts} from "@/listPosts.tsx";

export function PostsPage(){

    return <div>
        <h1>Posts:</h1>

        {listPosts()}

        <Outlet/>

    </div>
}