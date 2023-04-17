import { spOut } from "@/supabase/authFunctions"
import { toast} from 'react-toastify'

const signOut = () =>{
    spOut()
    toast.success("Deslogado com sucesso!")
}

export { signOut }
