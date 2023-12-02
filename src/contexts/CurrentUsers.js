import { useEffect, createContext, useState } from "react";

export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        
        const getLoggedInUser = async () => {
            console.log("S")
            let response = await fetch('https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/auth/', {
                //set get method 
                method: 'GET',

                headers: {
                    'auth-token': localStorage.getItem('token')
                }, 
                
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider