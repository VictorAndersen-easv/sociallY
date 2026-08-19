import {Outlet} from "react-router";
import {listPosts} from "@/Posts/listPosts.tsx";
import {useState} from "react";





export function PostsPage(){

    return <div>
        <div>sociallY</div>
        <div> </div>
        <h1>Posts:</h1>


        {listPosts()}

        <Outlet/>

    </div>
}