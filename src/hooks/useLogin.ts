import { spLogin } from "@/supabase/authFunctions"
import { IUseLogin } from "@/types/hooks";
import { toast } from "react-toastify";

const makeLogin = ({event}:IUseLogin) => {
    event.preventDefault();
    const target = event.target as typeof event.target &{
        email: {value: string},
        password: {value: string}
    };

    const credentials = {
        email: target.email.value,
        password: target.password.value
    }

    if (!credentials.email){
        toast.error("Você precisa informar uma email!")
        return
    }else if (!credentials.password){
        toast.error("Você precisa informar uma senha!")
        return
    }

    else{
        spLogin(credentials);
    }
}


export default makeLogin
