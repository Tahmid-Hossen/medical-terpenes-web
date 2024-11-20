import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const baseUrlBackend="http://localhost:4000";  // Development
// export const baseUrlBackend="https://backend-server.nextechlify.xyz"; // Production
export const appTitle="Medical Terpenes";
export const siteTitleSuffix="::Medical Terpenes";


export function logout() {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('user_info');
    window.location.reload();
}
export const innerHtml=(id, value='')=>{
    document.getElementById(id).innerHTML = value;
}

export const randomString = () => {
    const result = Math.random().toString(36).substring(2,7);
    return result
}




export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export const ScrollToTopAllLink=()=>{
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return null;
}



