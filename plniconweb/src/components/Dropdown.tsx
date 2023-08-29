import Select, { ActionMeta, SingleValue } from "react-select";

interface DropdownProps {
  placeholder: string;
  type: string;
  onChange?:
    | ((
        newValue: SingleValue<{
          value: string;
          label: string;
        }>,
        actionMeta: ActionMeta<{
          value: string;
          label: string;
        }>
      ) => void)
    | undefined;
  value?: { value: string; label: string };
  options: any;
  required?: boolean;
}

const Dropdown = ({
  placeholder,
  type,
  onChange,
  options,
  value,
  required,
}: DropdownProps) => {
  const [jenis, setJenis] = useState("");
  const [kategori, setKategori] = useState("");
  const [detail, setDetail] = useState<string[]>([]);
  const [wilayah, setWilayah] = useState("");
  const [area, setArea] = useState("");
  const optionsKategori = [
    { value: "Rutin", label: "Rutin" },
    { value: "Incidental", label: "Incidental" },
    { value: "Improvement", label: "Improvement" },
  ];
  const optionsJenis = [
    { value: "ISP", label: "ISP" },
    { value: "OSP", label: "OSP" },
  ];
  const optionsUser = [
    { value: 1, label: "OmadWahyu" },
    { value: 2, label: "Akmal" },
  ];
  const optionsPOP = [{ value: 1, label: "POP/Cawang/aowkwowkwokwok" }];
  const optionsWilayah = [
    { value: "HARJAK", label: "HARJAK" },
    { value: "HARBDB", label: "HARBDB" },
  ];
  const optionsArea = [
    { value: "Jakarta Timur", label: "Jakarta Timur" },
    { value: "Bekasi", label: "Bekasi" },
    { value: "Banten", label: "Banten" },
    { value: "Tangerang Selatan", label: "Tangerang Selatan" },
  ];
  return (
    <Select
      required={required}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      isSearchable={true}
      theme={(theme) => ({
        ...theme,
        borderRadius: "8px",
        border: "2px",

        colors: {
          ...theme.colors,
          primary: "#09AEEF",
        },
      })}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: "44px",
          border: state.isFocused ? "" : "2px solid #6B6B6B",
          "&:hover": {
            borderColor: state.isFocused ? "#59C6F1" : "#59C6F1",
          },
        }),
      }}
    />
  );
};

export default Dropdown;
