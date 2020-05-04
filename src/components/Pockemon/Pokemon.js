import React from 'react'

export class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon_data: null
        }
    }

    render () {
        return (
            <React.Fragment>
            {
                this.props.isShown
                ? (<div>
                        <div className="flex-element rendered_option">
                            <img className="img__poke" src={this.props.data.sprites.front_default} alt="pht"/>

                            <div className="poke_title">
                                <h3>{this.props.data.name}</h3>
                            </div>

                            <div className="types">
                                    {
                                        this.props.data.types
                                            .map(elem => {
                                                return <button className="inline">{elem.type.name}</button>
                                            })
                                    }
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <img alt="poke_photo"/>*/}
                        {/*    <h3>pokemon`s name</h3>*/}
                        {/*    <table>*/}
                        {/*        <tbody>*/}
                        {/*            <tr>*/}
                        {/*                <td>Type</td>*/}
                        {/*                <td>Fire</td>*/}
                        {/*            </tr>*/}
                        {/*        </tbody>*/}
                        {/*    </table>*/}
                        {/*</div>*/}
                    </div>)
                    : null
            }
            </React.Fragment>
        );
    }
}


