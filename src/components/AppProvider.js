import { useState } from "react";
import UserContext from "../utils/UserContext.js";

const AppProvider = ({children}) => {
    const [userName, setUserName] = useState("Atiq Shahab")

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    )
}

export default AppProvider;