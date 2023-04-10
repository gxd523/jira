import config from "config";
import React from "react";

export const LoginScreen = () => {
  const login = (param: { username: string; password: string }) => {
    fetch(`${config.apiUrl}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(param),
    }).then(async (response) => {
      // if (response.ok)
    });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    console.log(username, password);

    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
