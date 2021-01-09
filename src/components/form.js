import * as React from 'react'
import '../styles/form.css'

const Form = () => {
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  })

  const handleChange = event => {
    const { target } = event

    setCredentials(state => ({
      ...state,
      [target.id]: target.value,
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })

    const users = await response.json()

    const user = users.find(
      user =>
        user.username.toLowerCase() === credentials.username.toLowerCase(),
    )

    if (user) {
      localStorage.setItem('profile', user.name)
      console.log({ name: localStorage.getItem('profile') })

      return null
    }

    localStorage.clear()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sign in</legend>
        <div className="form-block">
          <label htmlFor="username">username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-block">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </fieldset>
    </form>
  )
}

export default Form
