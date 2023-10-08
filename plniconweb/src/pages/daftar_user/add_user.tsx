import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import TextField from "../../components/TextField";
import { postWithAuth } from "../../api/api";
import { toastSuccess, toastError } from "../../components/Toast";
import { useState } from "react";
import Footer from "../../components/footer";
import Dropdown from "../../components/Dropdown";

function AddUser() {
  const navigate = useNavigate();

  //ISIAN
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [kontak, setKontak] = useState("");
  const [role, setRole] = useState("");

  const optionsUser = [
    { value: "ADMIN", label: "Administrator" },
    { value: "Management", label: "Management" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Engineer", label: "Engineer" },
    { value: "Field Support", label: "Field Support" },
  ];

  const token = localStorage.getItem("access_token");
  const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) {
      try {
        const response = await postWithAuth(
          "register",
          {
            nama: nama,
            email: email,
            username: username,
            password: password,
            phone: kontak,
            role: role,
          },
          token
        );
        toastSuccess(response.data.meta.message);
      } catch (error) {
        toastError("User Registration Failed");
        console.log(error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-[100px] min-h-[calc(100vh-60px)] bg-bnw-50">
        <div className="w-[95%] lg:w-[97%] mx-auto mb-6 rounded-lg shadow-xl">
          <h1 className="bg-blue-alternative header1 p-2 px-3 text-text-light rounded-t-lg">
            Create User
          </h1>
          <form action="" onSubmit={(e) => addUser(e)} className="w-full">
            <div className="flex-col lg:flex-row gap-10 flex p-5">
              <div className="w-full lg:w-1/2 flex flex-col gap-10">

                <div className="flex flex-col gap-2">
                  <label htmlFor="nama">Nama</label>
                  <TextField
                    required
                    id="nama"
                    type="standart"
                    placeholder=""
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="nama">E-mail</label>
                  <TextField
                    required
                    id="nama"
                    type="email"
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <TextField
                    required
                    id="password"
                    type="standart"
                    placeholder=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-10">

                <div className="flex flex-col gap-2">
                  <label htmlFor="username">Username</label>
                  <TextField
                    required
                    id="username"
                    type="standart"
                    placeholder=""
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="role">Kontak</label>
                  <TextField
                    required
                    id="role"
                    type="standart"
                    placeholder=""
                    onChange={(e) => setKontak(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="role">Role</label>
                  <Dropdown
                    required
                    placeholder="Pilih Role!"
                    options={optionsUser}
                    onChange={(selectedOption) => {
                      if (selectedOption) {
                        setRole(selectedOption.value);
                      } else {
                        setRole("");
                      }
                    }}
                  />
                </div>
              </div>
            </div>
              <div className="flex gap-2 justify-end px-5 pb-5">
                <Button
                  type="cancel"
                  onClick={() => navigate("/daftar-user")}
                />
                <Button type="submit" />
              </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddUser;
