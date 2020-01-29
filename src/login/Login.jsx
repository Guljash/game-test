import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    handler = () => {
        const value = this.ref.current.value;
        this.props.handler(value);
    }

    render() {
        return (
            <div className="input-wrapper">
                <div className="input-text">Choose your nickname</div>
                <input onChange={this.handler} className="input" ref={this.ref} type='text' placeholder="Type here..." />
                <Link to="/app"><button disabled={this.props.disabled} className="btn">Submit</button></Link>
            </div>
        );
    };
}

export default Login;