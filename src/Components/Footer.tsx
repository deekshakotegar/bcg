import * as React from 'react';
import './Footer.scss';

export const Footer = () => {
    return (
        <div className='footerBlk'>
            <div className='wrapperBlk'>
                <ul>
                    <li>&copy; 2019 the boston couslting group</li>
                    <li>Privacy</li>
                    <li>terms of use</li>
                </ul>
                <div>
                    <ul className='alignright'>
                        <li>
                            <a href='javascript:void(0);' >
                                <div className='circle'><i className="fas fa-envelope" /></div>contact us
                            </a></li>
                        <li>
                            <a href='javascript:void(0);' >
                                <div className='circle'><i className="fas fa-arrow-right" /></div>subscribe
                            </a></li>
                        <li>
                            <a href='javascript:void(0);' >
                                <div className='circle'><i className="fas fa-share-alt" /></div>share page
                            </a></li>
                        <li>
                            <a href='javascript:void(0);' >
                                <div className='circle'><i className="fab fa-linkedin-in" /></div>follow us
                            </a></li>
                    </ul>
                </div>

            </div>
            <p>
                The Boston Consulting Group is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without
                 regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, protected veteran status,
                  or any other characteristic protected under federal, state or local law, where applicable, and those with criminal histories will be
                   considered in a manner consistent with applicable state and local laws.
            </p>
        </div>
    )
}