// import InputGroup from './InputGroup';
// import Inputs from './Inputs';

const formStyle = {
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  backgroundColor: '#fff',
  color: '#474747',
};

const colStart = {
  display: 'flex',
  flexDirection: 'column',
};

export default function Form1() {
  return (
    <form style={formStyle}>
      <div style={{ ...colStart, marginBottom: '20px' }}>
        <label style={colStart}>
          <p style={{ alignSelf: 'start' }}>Name</p>
          <input name='name' />
        </label>
        <label style={colStart}>
          <p style={{ alignSelf: 'start' }}>Email</p>
          <input name='email' />
        </label>
      </div>
      <select style={{ margin: '20px 0px' }}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Non-binary'>Non-binary</option>
      </select>
      <input type='submit' style={{ alignSelf: 'start', margin: '20px 0px' }} />
    </form>
  );
}
