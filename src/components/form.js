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

  const handleSubmit = event => {
    event.preventDefault()

    alert(JSON.stringify(credentials, null, 2))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sign in</legend>
        <div className="form-block">
          <label htmlFor="username">username:</label>
          <input type="text" name="username" id="username" value={credentials.username} onChange={handleChange} />
        </div>
        <div className="form-block">
          <label htmlFor="password">password:</label>
          <input type="password" name="password" id="password" value={credentials.password} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </fieldset>
    </form>
  )
}

export default Form
