import { Link } from "react-router-dom";

interface UserOptionsProps {
    type: "admin" | "user" | undefined;
    visibility: boolean
}

function UserOptions({type, visibility} : UserOptionsProps) {
    return(
        <>
            <div className={`${visibility == false ? "hidden" : "flex flex-col gap-2"} bg-bnw-50 w-full p-2 border-t-blue-primary border-t-4`}>
                <Link to="/daftar-user" className={`${type == "user" ? "hidden" : ""} text-text-dark hover:text-blue-hover active:text-blue-click text-center`}>Daftar User</Link>
                <hr />
                <Link to="" className="text-text-dark hover:text-blue-hover active:text-blue-click text-center">Change Password</Link>
                <hr />
                <Link to="" className="text-red-primary hover:text-red-hover active:text-red-click text-center">Logout</Link>
            </div>
        </>
    );
}

export default UserOptions