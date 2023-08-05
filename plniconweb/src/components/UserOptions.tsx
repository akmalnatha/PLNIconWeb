interface UserOptionsProps {
    type: "admin" | "user" | undefined;
    visibility: boolean
}

function UserOptions({type, visibility} : UserOptionsProps) {
    return(
        <>
            <div className={`${visibility == false ? "hidden" : "flex flex-col gap-2"} bg-bnw-50 w-full p-2`}>
                <a href="" className={`${type == "user" ? "hidden" : ""} text-text-dark hover:text-blue-hover active:text-blue-click text-center`}>List User</a>
                <hr />
                <a href="" className="text-text-dark hover:text-blue-hover active:text-blue-click text-center">Change Password</a>
                <hr />
                <a href="" className="text-red-primary hover:text-red-hover active:text-red-click text-center">Logout</a>
            </div>
        </>
    );
}

export default UserOptions