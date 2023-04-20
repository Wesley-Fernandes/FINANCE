import { ISession } from "@/types/auth";
import {create} from "zustand"


interface IuserContext{
    userInfo: ISession|null,
    setUserInfo: (newInfo:ISession) => void;
    setUserNull: () => void;
}
const userContext = create<IuserContext>(set=>({
    userInfo: null,
    setUserInfo: (newInfo) => set((state)=> ({userInfo: newInfo})),
    setUserNull: () => set((state)=> ({
        userInfo: null
    }))
}));


export {userContext};
