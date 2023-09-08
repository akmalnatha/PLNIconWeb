import { ChangeEventHandler } from "react";

function Checkbox({
  id,
  label,
  description,
  value,
  checked,
  onChange,
  disabled
}: {
  id: string;
  label?: string;
  description?: string;
  value: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabled: boolean
}) {
  return (
    <>
      <div className="flex h-auto w-full justify-start lg:justify-center gap-3">
        <input
          className={`before:w-4 before:h-3 checked:before:bg-[url('${process.env.PUBLIC_URL}/assets/check_icon.svg')] before:inline-block before:bg-center before:bg-contain before:bg-no-repeat before:absolute before:-top-[-3px] relative h-[20px] w-[20px] shrink-0 cursor-pointer appearance-none rounded border-2 border-slate-500 outline-none before:border-white before:text-center before:font-bold before:text-white checked:border-blue-graph checked:bg-blue-graph hover:border-blue-hover checked:hover:border-blue-hover checked:hover:bg-blue-hover focus:outline focus:outline-blue-graph checked:focus:border-blue-graph focus:hover:border-blue-hover focus:hover:outline-blue-hover active:border-blue-click checked:active:border-blue-click checked:active:bg-blue-click focus:active:border-blue-click focus:active:outline-blue-click disabled:opacity-30 disabled:hover:border-slate-500`}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
        <label htmlFor={id} className="flex flex-col gap-[6px]">
          <p className="text-16 leading-none text-black">{label}</p>
          <p className="text-14 leading-none text-kGrey-300">{description}</p>
        </label>
      </div>
    </>
  );
}

export default Checkbox;
