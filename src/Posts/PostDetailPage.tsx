import {useParams} from "react-router";
import {useEffect, useState} from "react";


type MyParams = {
    postId: string;
}


export function PostDetailPage() {


    const params = useParams<MyParams>();
    const [post, setPost] = useState()


    useEffect(() => {
        getData()
    }, []);


    async function getData() {

        const response = await fetch('https://dummyjson.com/posts/' + params.postId)
        const json = await response.json();
        setPost(json)

    }

    return <div>
        What am i doing with my life.
    </div>


}
