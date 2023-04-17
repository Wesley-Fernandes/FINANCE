import { ILogin } from "@/types/auth"
import { supabase } from "./supabase"
import { toast } from "react-toastify"
import { userContext } from "@/contexts/userContext"




async function spOut() {
  const { error } = await supabase.auth.signOut()
}

export {spOut}
