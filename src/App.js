import React from 'react';
import Board from './board/Board';
import Stats from './stats/Stats';
import Login from './login/Login';
import { Route } from "react-router-dom";

class App extends React.Component {
    state = {
        player: 0,
        computer: 0,
        name: 'Player',
        disabled: true,
    }

    getStat = (e) => {
        let computer = this.state.computer;
        let player = this.state.player
        if (e === this.state.name) {
            player++
            this.setState({ player: player })
        }
        else if (e === 'Computer') {
            computer++
            this.setState({ computer: computer })
        }
    }

    loginHandler = (e) => {
        this.setState({ name: e, disabled: false })
    }

    render() {
        return (
            <div>
                <Route exact path='/'><Login disabled={this.state.disabled} handler={this.loginHandler} /></Route>
                <Route path='/app'>
                    <Board getStat={this.getStat} name={this.state.name} />
                    <Stats player={this.state.player} name={this.state.name} computer={this.state.computer} />
                </Route>
            </div>
        );
    }
}
export default App;
