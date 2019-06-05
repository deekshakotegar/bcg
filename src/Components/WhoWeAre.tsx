import * as React from 'react';
import './WhoWeAre.scss';

interface IWhoWeAreprops {
    id: string
}

export const WhoWeAre = (props: IWhoWeAreprops) => {
    return (
        <div id={props.id}>
            <div className='bnrImg' />
            <div className='bnrInnerBlk'>
                <img src='/assets/bnrBg.png' />
            </div>
            <div className='container'>
                <h1>Infographic campaign for a ride sharing app</h1>
                <div className='innerContainer'>
                    <ul>
                        <li>Strategy<span /></li>
                        <li>Ideation <span /></li>
                        <li>Campaign</li>
                    </ul>

                    <p>Vestibulum eu nulla diam. Nunc eleifend venenatis mauris, nec rutrum nunc. Proin lectus purus, viverra et justo rutrum,
                         pharetra placerat dolor. Aliquam gravida convallis lacinia. Aenean nec odio ex. Proin augue felis, tempor nec congue sed,
                          vehicula a ipsum. Duis pulvinar bibendum ligula a viverra. Phasellus dignissim, felis quis elementum rutrum, massa magna
                       maximus nibh, ut facilisis ligula urna ac massa. Cras id aliquam massa, ac imperdiet lectus.</p>
                    <p>
                        Aliquam eu nibh ut metus sagittis egestas. Pellentesque facilisis hendrerit pretium. Cras vitae sagittis enim. Cras nisl sem,
                         lacinia sit amet aliquam at, cursus non magna. Sed eﬃcitur tincidunt justo, id ullamcorper magna.
                       </p>
                    <a href='#OurWork' className='button'>Browse our work</a>
                </div>
            </div>
            <div className='wrapperBlk'>
                <div className='leftBlk'>
                    <div className='imageWrapper'>
                        <img src='/assets/bg13.png' />
                    </div>
                </div>
                <div className='rightBlk'>
                    <h1>Vestibulum eu nulla diamnunc eleifend venenatis mauris
</h1>
                    <p>Vestibulum eu nulla diam. Nunc eleifend venenatis mauris, nec rutrum nunc. Proin lectus purus, viverra et justo rutrum,
                            pharetra placerat dolor. Aliquam gravida convallis lacinia. Aenean nec odio ex. Proin augue felis, tempor nec congue sed, vehicula a ipsum. Duis pulvinar bibendum ligula a viverra. Phasellus dignissim, felis quis elementum rutrum, massa magna maximus nibh, ut facilisis ligula urna ac massacras id aliquam.
</p>
                </div>
            </div>

            <div className='wrapperBlk sndBlk'>
                <div className='leftBlk'>
                    <h1>
                        Vestibulum eu nulla unc eleifend venenatis
                    </h1>
                    <p>
                        Vestibulum eu nulla diam. Nunc eleifend venenatis mauris, nec rutrum nunc. Proin lectus purus, viverra et justo rutrum, pharetra placerat dolor. Aliquam gravida convallis lacinia. Aenean nec odio ex.
 </p>
                    <a href='#OurWork' className='button'>browse our work</a>
                    <div className='imageWrapper'>
                        <img src='/assets/bg14.png' />
                    </div>
                </div>
                <div className='rightBlk'>
                    <div className='imageWrapper'>
                        <img src='/assets/bg14.png' />
                    </div>
                </div>
            </div>

        </div>
    )
}