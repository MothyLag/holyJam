import React, { useState } from "react";

interface UserDTO {
  email: string;
  password: string;
  repeatPassword: string;
}

const SubmitForm = () => {
  const [user, setUser] = useState<UserDTO>({
    email: "",
    password: "",
    repeatPassword: "",
  });
  return (
    <form
      method="POST"
      action="api/auth/register"
      className="h-screen w-screen flex justify-around items-center flex-col"
    >
      <div className="h-[10%] w-[50%] flex items-center flex-col">
        <label className="flex self-start">Ingresa tu Email: </label>
        <input
          name="email"
          className="w-[100%]"
          onChange={(e) =>
            setUser((old) => {
              return { ...old, email: e.target.value };
            })
          }
          value={user.email}
        />
      </div>
      <div className="h-[10%] w-[50%] flex items-center flex-col">
        <label className="flex self-start">Ingresa una contraseña: </label>
        <input
          onChange={(e) =>
            setUser((old) => {
              return { ...old, password: e.target.value };
            })
          }
          name="password"
          type="password"
          className="w-[100%]"
          value={user.password}
        />
      </div>
      <div className="h-[10%] w-[50%] flex items-center flex-col">
        <label className="flex self-start">Repite la contraseña: </label>
        <input
          type="password"
          className="w-[100%]"
          onChange={(e) =>
            setUser((old) => {
              return { ...old, repeatPassword: e.target.value };
            })
          }
          value={user.repeatPassword}
        />
      </div>
      <div className="w-[50%] flex justify-between items-end ">
        <p>
          Ya te registraste?{" "}
          <a className="text-chichi underline" href="/signin">
            Entra
          </a>
        </p>
        <button onClick={() => console.log(user)}>Unete!</button>
      </div>
    </form>
  );
};

export default SubmitForm;
