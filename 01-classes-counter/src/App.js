import React from "react";
// two ways to call class handlers
// 1. binding handler to this
// 2. arrow function
// pros and cons
// arrow function is easier to read
// arrow function will be recreated for each instance, on every render
//
function App() {
  return <Counter />;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // 1. bind handler
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    this.setState((state, _) => ({ count: state.count + 1 }));
  }
  decrease() {
    this.setState((state, _) => ({ count: state.count - 1 }));
  }
  render() {
    return (
      <div className="border-2 border-gray-400 m-12 w-44 h-28 flex flex-col justify-evenly items-center">
        <h1 className="text-2xl font-bold">Counter</h1>
        <div className="w-full flex justify-evenly items-center text-2xl leading-3">
          <button
            // 2. bound method
            onClick={this.decrease}
            className="pb-1 w-8 h-8 border-2 border-gray-300 bg-gray-200 text-justify-center text-items-center"
          >
            -
          </button>
          <p>{this.state.count}</p>
          <button
            // 3. arrow function
            onClick={() => {
              this.increase();
            }}
            className="pb-1 w-8 h-8 border-2 border-gray-300 bg-gray-200 text-justify-center text-items-center"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
