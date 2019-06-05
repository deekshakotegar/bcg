import * as React from 'react';
import './Banner.scss';


export default class Banner extends React.Component<{}, {}>{
    public render() {
        return (
            <React.Fragment>
                <div className='bannerImg' >
                    <div className='innerWrapper'>
                        <h1>Info-graphic campaign
                            for a ride sharing app</h1>
                        <p>Strategy</p>
                        <span />
                        <p>Ideation</p>
                        <span />
                        <p>Branding</p>
                        <a href='#WhatWeDo'>
                            <i className="fas fa-long-arrow-alt-down" />
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}