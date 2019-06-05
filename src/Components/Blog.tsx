import * as React from 'react';
import './Blog.scss';

interface IBlogprops {
    id: string;
}

export const Blog = (props: IBlogprops) => {
    return (
        <div className='blogBlk' id={props.id}>
            <div className='blogBnr' />
            <div className='blogWrapper'>
                <h1>
                    Aliquam gravida convallis laciniodio ex. Proin augue felis, tempor nec congue sed, vehicula a ipsum felis quis elem, magna.
            </h1>
                <p>
                    - Felis elementum rutrum, massa magna
            </p>
                <div className='imageGallery'>
                    <img src='/assets/bg11.png' />
                    <img src='/assets/bg15.jpg' />
                    <img src='/assets/challenge.jpg' />
                </div>
            </div>
        </div>
    )
}