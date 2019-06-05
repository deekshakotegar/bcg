import * as React from 'react';
import './Menu.scss';

interface IResMenustate {
    showMenu: boolean;
    showClass: string;
}

export default class Menu extends React.Component<{}, IResMenustate> {
    constructor(props: any) {
        super(props)
        this.state = {
            showClass: '',
            showMenu: true
        }
    }
    public render() {
        return (
            <div className='menuBlk'>
                {this.state.showMenu ?
                    <React.Fragment>
                        <input type="checkbox" />
                        <span />
                        <span />
                        <span />

                        <ul className='menu' id='menu'>
                            <li>
                                <a href='#WhoWeAre' onClick={this.resMenu} className={this.state.showClass && 'active'}>
                                    who we are
                    </a>
                            </li>
                            <li>
                                <a href='#WhatWeDo' onClick={this.resMenu}>
                                    what we do
                    </a>
                            </li>
                            <li>
                                <a href='#OurWork' onClick={this.resMenu}>
                                    our work
                    </a>
                            </li>
                            <li>
                                <a href='#GetInTouch' onClick={this.resMenu}>
                                    get in touch
                    </a>
                            </li>
                            <li>
                                <a href='#Blog' onClick={this.resMenu}>
                                    Blog
                    </a>
                            </li>
                        </ul></React.Fragment> : false}
            </div>
        )
    }

    public resMenu = () => {
        if (window.innerWidth <= 768) {
            this.setState(() => ({ showMenu: !this.state.showMenu }))
            setTimeout(() => {
                this.setState(() => ({ showMenu: true }))
            }, 500)
        }
    }
}
