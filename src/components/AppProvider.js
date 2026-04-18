import { useState } from "react";
import UserContext from "../utils/UserContext";

const AppProvider = ({children}) => {
    const [userName, setUserName] = useState("Default Userrrr")

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    )
}

export default AppProvider;