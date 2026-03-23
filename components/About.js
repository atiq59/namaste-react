import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>About Page</h1>
        <div className="users">
          <UserClass
            name="First"
            location="New Delhi"
            contact="@atiq59"
          />
        </div>
      </div>
    );
  }
}

export default About;
