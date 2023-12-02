interface UserDTO {
  email: string;
  password: string;
  repeatPassword: string;
}
export async function submitForm(user: UserDTO) {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
}
