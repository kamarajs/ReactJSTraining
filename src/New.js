import { Component } from "react";

export class New extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 1,
      username: "hi",
      employee: ["1", "2", "3"]
    };
  }

  increase() {
    let count = this.state.count;
    count++;
    this.setState({ count: count });
  }

  decrease() {
    let count = this.state.count;
    count--;
    this.setState({ count: count });
  }

  changeevent(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2> New Class</h2>
        <b>{this.state.count}</b>
        <div>
          <button onClick={() => this.increase()}> + </button>
          <button onClick={() => this.decrease()}> - </button>
        </div>

        <h6> Enter user Name</h6>
        <input
          type="text"
          onBlur={(e) => {
            this.changeevent(e);
          }}
          name="name"
        />
        <h5> {this.state.username}</h5>

        <div>
          <h3> Iterate employees</h3>
          {this.state.employee.map((data) => (
            <li> {data}</li>
          ))}
        </div>
      </div>
    );
  }
}
