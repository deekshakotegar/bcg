import * as React from 'react';
import './Project.scss';

interface IProjectprops {
    id: string;
}

export const Project = (props: IProjectprops) => {
    return (
        <div className='projectBlk ' id={props.id}>
            <div className='blkPadding'>
                <h1>Similar cases/projects</h1>
                <p>Donec sed eﬃcitur sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean mollis lorem felis, vel interdum dolor tincidunt eget. Suspendisse at nulla mattis, vehicula purus in, vehicula orci.
                </p>
            </div>
            <div>
                <img src='/assets/challenge.jpg' />
                <img src='/assets/bg11.png' />
                <img src='/assets/bg12.png' />
            </div>
        </div>
    )
}