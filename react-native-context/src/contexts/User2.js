import React, { createContext, useState } from "react";

const User2Context = createContext()

export const User2Provider = ({ children }) => {
    const [user, setUser] = useState(null)

    const logIn = () => setUser({ name: '김지수' })
    const logOut = () => setUser(null)

    return (
        <User2Context.Provider value={{ user, logIn, logOut }}>
            {children}
        </User2Context.Provider>
    )
}
export default User2Context