import React from 'react'

class Bomb extends React.Component {
    state = {
        secondsLeft: this.props.initialCount
    }

    handleTextRender = () => {
        return (
            this.state.secondsLeft ? <div>{<h1>{this.state.secondsLeft} seconds left before I go boom!</h1>}</div> : <div><h1>Boom!</h1></div>
        )
    }

    render() {
        return (
           this.handleTextRender()
        )
    }
}

export default Bomb