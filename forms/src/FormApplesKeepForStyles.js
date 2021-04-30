/*
  Learned so much about styling inside react and how to style flex
  Going to leave this here for the styles
  I completely forgot align-items default is stretch!
  I thought it was start like justify-content
  There's an hour I'll never get back...
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
