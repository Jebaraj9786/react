const getJwt = ()=>{
    return localStorage.getItem('auth-jwt');
}
export default getJwt;