import * as React from 'react';
import './Contact.scss';

interface IContactprops {
    id: string;
}

export const Contact = (props: IContactprops) => {
    return (
        <div className='ContactBlk' id={props.id}>
            <p>
                SO WHAT’S NEXT :
            <a href='javascript:void(0);'> LET’S CONNECT </a>
            </p>
            <p>Let’s connect and create an unique business partnership</p>
            <a href='javascript:void(0)' className='arrow' >
                <i className="far fa-arrow-alt-circle-right" />
            </a>
        </div>
    )
}