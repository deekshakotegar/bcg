import * as React from 'react';
import './Menu.scss';

interface IResMenustate {
    showMenu: boolean;
}

export default class Menu extends React.Component<{}, IResMenustate> {
    constructor(props: any) {
        super(props)
        this.state = {
            showMenu: true
        }
    }
    public render() {
        return (
            <div className='menuBlk'>

                <input type="checkbox" />
                <span />
                <span />
                <span />
                {this.state.showMenu ?
                    <ul className='menu' id='menu'>
                        <li>
                            <a href='#WhoWeAre' onClick={this.res}>
                                who we are
                    </a>
                        </li>
                        <li>
                            <a href='#WhatWeDo' onClick={this.res}>
                                what we do
                    </a>
                        </li>
                        <li>
                            <a href='#OurWork' onClick={this.res}>
                                our work
                    </a>
                        </li>
                        <li>
                            <a href='#GetInTouch' onClick={this.res}>
                                get in touch
                    </a>
                        </li>
                        <li>
                            <a href='#blog' onClick={this.res}>
                                Blog
                    </a>
                        </li>
                    </ul> : false}
            </div>
        )
    }

    public res = () => {
        if (window.innerWidth <= 768) {
            this.setState((prevState) => ({ showMenu: !prevState.showMenu }))
        }
    }
}
