import React, { Component } from 'react'

export default class OneMovei extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <h1>one movei page</h1>
            </div>
        )
    }
}
