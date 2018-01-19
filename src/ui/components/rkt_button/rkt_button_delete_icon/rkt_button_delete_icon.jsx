/*
# Rocket viewer is (c) BCNMedTech, UNIVERSITAT POMPEU FABRA
#
# Rocket viewer is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# Rocket viewer is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
# Authors:
# Carlos Yagüe Méndez
# María del Pilar García
# Daniele Pezzatini
# Contributors: 
# Sergio Sánchez Martínez
*/

import React, {Component} from 'react';

export default class DeleteIcon extends Component {

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.render = this.render.bind(this);

    }

    handleClick(ev){
        ev.preventDefault();
        ev.stopPropagation();
        this.props.onClick()
    }

    render() {
        return (
            <a className="fi-x-circle deleteIconButton" onClick={this.handleClick}></a>
        );
    }
}