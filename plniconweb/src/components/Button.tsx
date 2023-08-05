import { FormEventHandler, MouseEventHandler } from "react";

function Button({
    type,
    onClick,
    onSubmit,
    // isLoading,
}: {
    type: "save" | "submit" | "cancel" | "add" | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
    isLoading?: boolean;
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


    </>
    );
}

export default Button;
