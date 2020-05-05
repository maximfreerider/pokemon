import React from 'react'

export class Pokemon extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render () {
        // console.log(this.props.data)
        return (
            <React.Fragment>
            {
                this.props.isShown
                ? (
                    <div>
                        <div className="flex-element rendered_option">
                            <img src={this.props.data.sprites.front_default} alt="pht"/>

                            <div>
                                <h3>{this.props.data.name}</h3>
                            </div>

                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Type</td>
                                    <td>{this.props.data.types[0].type.name}</td>
                                </tr>
                                <tr>
                                    <td>Attack</td>
                                    <td>no</td>
                                </tr>
                                <tr>
                                    <td>Defense</td>
                                    <td>no</td>
                                </tr>
                                <tr>
                                    <td>HP</td>
                                    <td>no</td>
                                </tr>
                                <tr>
                                    <td>SP Defense</td>
                                    <td>no</td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>no</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{this.props.data.weight}</td>
                                </tr>
                                <tr>
                                    <td>total moves</td>
                                    <td>{this.props.data.moves.length}</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>)
                    : null
            }
            </React.Fragment>
        );
    }
}


