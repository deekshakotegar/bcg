import * as React from 'react';
import './WhatWeDo.scss';

interface IWhatWeDoprops {
    id: string;
}

export const WhatWeDo = (props: IWhatWeDoprops) => {
    return (
        <div className='WhatBlk' id={props.id}>

            <div className='group wrapperBlk challengeBlk'>
                <div className='leftBlk'>
                    <h1>The challenge</h1>
                    <p>Donec sed efficitur sapien. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Aenean
        mollis lorem felis, vel interdum dolor tincidunt eget. Suspendisse
at nulla mattis, vehicula purus in, vehicula orci.</p>
                    <p>Morbi semper venenatis tempus. Etiam eget diam sit amet turpis
        tincidunt placerat id ut neque. Quisque bibendum lectus mauris.
        Nullam sit amet elementum nisi. Fusce ac elit tincidunt, lacinia
        erat vel, auctor ex. Phasellus congue pharetra pulvinar. Maecenas
a euismod mi. Sed laoreet sapien ex, in porta nisl volutpat eu.</p>
                    <a href='#approach' className='button'>Scroll for more</a>
                </div>
                <div className='rightBlk'>
                    <div className='imageWrapper'>
                        <img src='/assets/challenge.jpg' />
                    </div>
                </div>
            </div>

            <div className='wrapperBlk' id='approach'>
                <div className='leftBlk'>
                    <div className='column'>
                        <div className='item'>
                            <img src='/assets/bg1.png' />
                        </div>
                        <div className='item'>
                            <img src='/assets/bg2.png' />
                        </div>
                        <div className='item'>
                            <img src='/assets/bg3.png' />
                        </div>
                        <div className='item'>
                            <img src='/assets/bg4.png' />
                        </div>
                        <div className='item'>
                            <img src='/assets/bg5.png' />
                        </div>
                        <div className='item'>
                            <img src='/assets/bg6.png' />
                        </div>
                    </div>
                </div>
                <div className='rightBlk'>
                    <h1>
                        Our approach
                </h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
    sed diam nonummy nibh euismod tincidunt ut laoreet
    dolore magna aliquam erat volutpat. Ut wisi enim ad
    minim veniam, quis nostrud exerci tation ullamcorper
    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    Duis autem vel eum iriure dolor in hendrerit in vulputate
velit esse molestie consequat.</p>
                    <a href='#OurWork' className='button'>Scroll for more </a>
                    <div className='column'>
                        <div className='item'>
                            <img src='/assets/bg7.png' />
                        </div>
                        <div className='item'>
                            <img src='/assets/bg8.png' />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='blkPadding'>
                <i className="fas fa-quote-left" />
                Curabitur suscipit sapien sem, aeleme ntum elit sodales in. Ut aliquam magna ultricies, lacinia turpis sed
                <i className="fas fa-quote-left rotate" />
            </h1>
            <div>
                <img src='/assets/challenge.jpg' />
            </div>
            <div className='alignright'>
                <img src='/assets/bg9.png' />
                <img src='/assets/bg10.png' />
            </div>
        </div>
    )
}