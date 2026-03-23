import { Component } from "react";

class ChilComp extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.label + " Sub Child Constructor");
    }

    componentDidMount() {
        console.log(this.props.label + " Sub Child Did mount");
    }
    
    render() {
        const {label} = this.props;
        console.log(label + " Sub Child Render");
        return (
            <div>{label}</div>
        )
    }
}

export default ChilComp;