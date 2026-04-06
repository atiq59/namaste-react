import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "DUMMY_NAME",
                location: "DUMMY_LOCATIOIN",
                avatar_url: "DUMMY_URL",
                type: "DUMMY_TYPE"
            }
        }

        console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + " Child did mount");
        const data = await fetch("https://api.github.com/users/atiq59");
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo: json
        })
    }

  render() {

      console.log(this.state)
      const { name, location, avatar_url, type } = this.state.userInfo;
      console.log(name + " Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} width={100} />
        <h2>Name: {name}</h2>
        <h3>Address: {location}</h3>
        <h3>Type: {type}</h3>
      </div>
    );
  }
}

export default UserClass;
