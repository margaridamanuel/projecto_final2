export const transformDataCreateUSer = (data: any) => {
  const name = data.nome.split(" ");
  const firstName = name[0];
  const lastName = name.slice(-1)[0];
  return {
    enabled: true,
    emailVerified: true,
    username: data.email,
    email: data.email,
    firstName,
    lastName,
    groups: [data.groups],
    credentials: [
      {
        temporary: false,
        type: "password",
        value: data.password,
      },
    ],
  };
};
