import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"
import API_URL from "../constants"
function LoginForm() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)
    
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch("https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/signin/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()
        console.log(data)

        if (response.status === 200) {
            setCurrentUser(data.user)
            console.log(data.user)
            localStorage.setItem('token', data.token)
            navigate('/')
        } else {
            setErrorMessage(data.errors[0].msg)
        }
    }

    return (
        
        <main>
            <div className="loginimg">
			<div className="box">
			</div>
			</div>
            
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">username</label>
                        <input
                            type="text"
                            required
                            value={credentials.email}
                            placeholder=" Please enter your username"
                            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            placeholder=" Please enter your password"
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="loginbtn" type="submit" value="Login" />
            </form>
            Photo by <a href="https://unsplash.com/@thoughtcatalog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thought Catalog</a> on <a href="https://unsplash.com/s/photos/smashed-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </main>
    )
}

export default LoginForm