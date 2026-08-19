import {Outlet} from "react-router";
import {listPosts} from "@/Posts/listPosts.tsx";

export function PostsPage(){

    return <div>
        <div>sociallY</div>
        <div> Search: </div>
        <input></input> <h1>Posts:</h1>

        {listPosts()}

        <Outlet/>

    </div>
}