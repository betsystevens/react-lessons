/*
  This is from 'How To Build Forms in React'
  on digitalocean.com
  controlled vs. uncontrolled
  state will be managed with useReducer
  coming soon....
*/
const colStart = {
  display: 'flex',
  flexDirection: 'column',
};
const cyan = {
  border: '1px solid cyan',
};
const pink = {
  border: '1px solid pink',
};
export default function FormApples() {
  return (
    <div style={{ ...colStart, width: '80%' }}>
      <h3 style={{ alignSelf: 'start' }}>How About Them Apples</h3>
      <form style={colStart}>
        <fieldset style={{ marginBottom: '20px' }}>
          <label style={colStart}>
            <p style={{ alignSelf: 'start' }}>Name</p>
            <input name='name' />
          </label>
        </fieldset>
        <button style={{ alignSelf: 'start' }} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}
