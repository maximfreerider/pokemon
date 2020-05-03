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
                <div>
                    <img alt="poke_photo"/>
                    <h3>pokemon`s name</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Type</td>
                                <td>Fire</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}


