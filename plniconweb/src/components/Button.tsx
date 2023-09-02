import { FormEventHandler, MouseEventHandler } from "react";

function Button({
    type,
    onClick,
    onSubmit,
    text,
    className,
    // isLoading,
}: {
    type: "save" | "submit" | "login" | "cancel" | "add" | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
    text?: string;
    className?: string | undefined
    // isLoading?: boolean;
}) {
    return (
    <>
    {type == 'save' && (
        <button
        onClick={onClick}
        onSubmit={onSubmit}
        className="h-[40px] w-[120px] text-[20px] font-semibold text-white bg-green-primary rounded-[10px] hover:bg-green-hover active:bg-green-click">
            Save
        </button>
    )}

    {type == 'submit' && (
        <button
        onClick={onClick}
        onSubmit={onSubmit}
        className="h-[40px] w-[120px] text-[20px] font-semibold text-white bg-blue-primary rounded-[10px] hover:bg-blue-hover active:bg-blue-click">
            Submit
        </button>
    )}

    {type == 'login' && (
        <button
        onClick={onClick}
        onSubmit={onSubmit}
        className="h-[40px] w-[120px] text-[20px] font-semibold text-white bg-blue-primary rounded-[10px] hover:bg-blue-hover active:bg-blue-click">
            Login
        </button>
    )}

    {type == 'cancel' && (
        <button
        onClick={onClick}
        onSubmit={onSubmit}
        className="h-[40px] w-[120px] text-[20px] font-semibold text-white bg-red-primary rounded-[10px] hover:bg-red-hover active:bg-red-click">
            Cancel
        </button>
    )}

    {type == 'add' && (
        <button
        onClick={onClick}
        onSubmit={onSubmit}
        className="h-[40px] w-[120px] text-[20px] font-semibold text-white bg-blue-primary rounded-[10px] hover:bg-blue-hover active:bg-blue-click">
            Add
        </button>
    )}

    {type == undefined && (
        <button
        onClick={onClick}
        onSubmit={onSubmit}
        className={className}>
            {text}
        </button>
    )}


    </>
    );
}

export default Button;
