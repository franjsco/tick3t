export function authHeader() {
  let user = JSON.parse(sessionStorage.getItem('user'));

  if (user.data.token) {
    return `Bearer ${user.data.token}` ;
  } else
    return null;
}