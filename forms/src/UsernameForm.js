// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({ onSubmitUsername }) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  /* *************************** */
  /*
    my solution
  */
  /*
  function handleSubmit(event) {
    event.preventDefault()
    let name = event.target.elements.name.value
    onSubmitUsername(name)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="name" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  */
  /*
    extra credit #1 
  */
  /*
  const ref = React.useRef(null)
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(ref.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input ref={ref} type="text" name="name" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  */

  /*
  const [error, setError] = React.useState('')
  function handleSubmit(event) {
    event.preventDefault()
    let name = event.target.elements.name.value
    onSubmitUsername(`${error} ${name}`)
  }
  function handleChange(event) {
    console.log(event.target.value)
    const name = event.target.value
    const isValid = name === name.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <div>
    <label>Username:</label>
    <input onChange={handleChange} type="text" name="name" />
    </div>
    <button type="submit">Submit</button>
    </form>
    )
  }
  */
  /* ************************************ */
  const inputRef = React.useRef(null);
  const [error, setError] = React.useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    // onSubmitUsername(event.target.elements.foo.value)
    onSubmitUsername(inputRef.current.value);
  }
  const handleChange = (event) => {
    // const value = event.target.value
    const { value } = event.target;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='foo'>Username:</label>
        <input
          onChange={handleChange}
          ref={inputRef}
          id='foo'
          name='username'
          type='text'
        />
        <p style={{ color: 'red' }}>{error}</p>
      </div>
      <button disabled={Boolean(error)} type='submit'>
        Submit
      </button>
    </form>
  );
}
function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
