export function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user.data.token) {
    return `Bearer ${user.data.token}` ;
  } else
    return null;
}