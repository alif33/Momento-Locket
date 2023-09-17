import Cookies from 'universal-cookie';
const cookies = new Cookies();

const getCookie = async key=>{
    return cookies.get(key);
}

export { getCookie }