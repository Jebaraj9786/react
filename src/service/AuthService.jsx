import decode from 'jwt-decode';
import axios from 'axios'
export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8090' // API server domain
        this.login = this.login.bind(this)       
        // this.getProfile = this.getProfile.bind(this)
    }

    login(userName, password) {
        // Get a token from api server using the fetch api
        return axios.post(`${this.domain}/authenticate`, {
           
                userName,
                password
          
        }).then(res => {
            this.setToken(res.data.jwt) // Setting the token in localStorage
            return res.data;
        })
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        //return !!token && !this.isTokenExpired(token) // handwaiving here
        return !!token
    }

    getAllStudents(){
        return axios.get(`${this.domain}/getallstudents`,{headers : {Authorization:'Bearer '+this.getToken()}}).then(res =>{
            return (res);
        })
    }

    // isTokenExpired(token) {
    //     try {
    //         const decoded = decode(token);
    //         if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
    //             return true;
    //         }
    //         else
    //             return false;
    //     }
    //     catch (err) {
    //         return false;
    //     }
    // }

    setToken(idToken) {
        // Saves user token to localStorage
        console.log("token"+idToken)
        localStorage.setItem('auth-jwt', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('auth-jwt')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('auth-jwt');
    }

     getProfile() {
         // Using jwt-decode npm package to decode the token
         return decode(this.getToken());
     }

     addStudent(formData){
        console.log("auth"+formData);
        return axios.post(`${this.domain}/create_student`,formData,{headers : {Authorization:'Bearer '+this.getToken(),'Content-Type': 'multipart/form-data'}}).then(res => {
        this.setToken(res.data.jwt) // Setting the token in localStorage
        return res.data;
    })

     }

    
   
}