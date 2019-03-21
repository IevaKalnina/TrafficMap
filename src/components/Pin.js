import React, { PureComponent } from 'react';

const ICON = 'M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z';

const pinStyle = {
    cursor: 'pointer',
    fillColor: '#d00',
    stroke: 'none'
};

export default class CityPin extends PureComponent {

    render() {
        const { size = 30, onclick } = this.props;

        return (
            <svg height={size} viewBox= '0 0 50 50'
                style={{...pinStyle, transform: 'translate(${-size/2}px,${-size}px)'}}
                onClick={this.props.onClick} >
                <path d={ICON}/>
            </svg>
        );
    }
}