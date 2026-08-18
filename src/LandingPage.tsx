import {useLocation, useNavigate} from "react-router";



//Homepage (only links to postpage)
export function LandingPage(){

    const navigate = useNavigate()
    const location = useLocation()



    return <div>

        <h1> Welcome to sociallY </h1>

        <button onClick={()=>{navigate("/posts")}}>See Posts</button>

    </div>
}