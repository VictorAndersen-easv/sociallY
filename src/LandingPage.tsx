import {useLocation, useNavigate} from "react-router";




export function LandingPage(){

    const navigate = useNavigate()
    const location = useLocation()



    return <div>

        <h1> Welcome to sociallY </h1>

        <button onClick={()=>{navigate("/posts")}}>See Posts</button>

    </div>
}