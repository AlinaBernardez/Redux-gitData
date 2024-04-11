import { createContext, useContext, useState } from "react";

const userContext = createContext();

function userProvider({children}) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUser = async() => {
        try {
            setLoading(true)
            const response = await fetch(url + text)
            if(!response.ok) (
                setMessage('User not found!!')
            )
            const json = await response.json()
            if(text.trim() !== '') {
                setUser(json)
                setText('')
            }
            setLoading(false)
        } 
        catch (err) {
            setError(error)
            setLoading(false)
        }
    }

    return (
        <userContext.Provider value={{user, error, loading, fetchUser}}>
            {children}
        </userContext.Provider>
    )
}

export default userProvider;