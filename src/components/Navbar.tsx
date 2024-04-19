import { Link } from "react-router-dom"

function Navbar(){
    return <div className="text-xl flex justify-center items-center border-b">
        <div className="text-3xl px-[30rem]">
            Veid AI
        </div>
        <Link to = {"/signup"} className="px-[5rem]">
            SignUp
        </Link>
        <div>
            SignIn
        </div>
    </div>
}

export default Navbar