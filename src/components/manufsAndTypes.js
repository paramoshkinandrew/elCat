/**
 * manufacturers and transport types
 * включается в App
 */

import React, { PropTypes, Component } from 'react'

export default class ManufsAndTypes extends Component {



    render() {

        const { mfList } = this.props;

        return <div>

            <p>manufs and types ---- {mfList[1].name},  {mfList[2].name} </p>

        </div>
    }
}

ManufsAndTypes.propTypes = {
    mfList: PropTypes.object.isRequired
}