// Basic Forms

import * as React from 'react';

const flexCol = {
  display: 'flex',
  flexDirection: 'column',
};
const flexColStart = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
};

function UsernameForm({ onSubmitUsername }) {
  const inputRef = React.useRef(null);
  const [error, setError] = React.useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(event.target.elements.username.value);
    // onSubmitUsername(inputRef.current.value);
  }
  const handleChange = (event) => {
    // const value = event.target.value
    const { value } = event.target;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  };
  return (
    <form style={flexCol} onSubmit={handleSubmit}>
      <div style={flexColStart}>
        <label htmlFor='username'>Username:</label>
        <input
          onChange={handleChange}
          ref={inputRef}
          id='username'
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
