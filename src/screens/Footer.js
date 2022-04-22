import React from 'react'

export default function Footer() {
    return (
        <>

            <div className="footer">
                <div className='footer-wrapper'>
                    <div className='footer__left'>
                        <div className="footer__left__img">
                            <img src="https://img.enderws.com/gameloft/gameloft.png" alt="logo-footer" />
                        </div>
                        <div className="footer__left__social">
                            <h2>Follow Us</h2>
                            <a href='https://www.facebook.com/GameloftViet/?brand_redir=216238295505' target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href='https://www.linkedin.com/company/gameloft' target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href='https://twitter.com/gameloft' target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href='https://www.youtube.com/user/gameloft' target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-youtube-square"></i>
                            </a>
                        </div>
                        <div className="footer__left__language">
                            <select id="language" name="language" defaultValue="english" required>
                                <option value="english">&#xf57d; English</option>
                                <option value="vietnam">&#xf57e; Vietnamese</option>
                            </select>
                        </div>
                    </div>
                    <div className='footer__right'>
                        <h2>VISIT</h2>
                        <a href='/' target="_blank" rel="noreferrer noopener">Gameloft Games</a>
                        <a href='https://www.gameloft.com/corporate/en/jobs/apply/' target="_blank" rel="noreferrer noopener">Gameloft Careers</a>
                        <a href='https://www.gameloft.com/central' target="_blank" rel="noreferrer noopener">Gameloft News</a>
                        <a href='https://gmlft.co/Gameloft-Discord' target="_blank" rel="noreferrer noopener">Gameloft Forum</a>
                        <a href='https://www.gameloft.com/corporate/' target="_blank" rel="noreferrer noopener">Gameloft Corporate</a>
                        <a href='/'>Gameloft Advertising</a>
                        <a href='https://gameloft.helpshift.com' target="_blank" rel="noreferrer noopener">Gameloft Support</a>
                        <h2>LEGAL</h2>
                        <a href='https://www.gameloft.com/en/conditions-of-use' target="_blank" rel="noreferrer noopener">Terms of Use</a>
                        <a href='https://www.gameloft.com/en/privacy-notice' target="_blank" rel="noreferrer noopener">Privacy Policy</a>
                        <a href='https://www.gameloft.com/en/legal/showcase-cookie-policy' target="_blank" rel="noreferrer noopener">Cookies Policy</a>
                        <a href='/' target="_blank" rel="noreferrer noopener">EULA</a>
                        <a href='https://www.gameloft.com/en/information/legal-notices' target="_blank" rel="noreferrer noopener">Legal Notices</a>
                        <a href='https://www.gameloft.com/en/information/event'>Event Rules</a>
                        <a href='/' target="_blank" rel="noreferrer noopener">Business Contacts</a>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="footer__copyright-wrapper">
                        <hr></hr>
                        <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries. <br></br>All other trademarks are the property of their respective owners.</p>
                    </div>
                </div>
            </div>

            <div className="footer-mobile">
                <div className="footer-mobile__social">
                    <div className="footer-mobile__social__title">
                        <h2>Follow Us</h2>
                    </div>
                    <div className="footer-mobile__social__icon">
                        <a href='https://www.facebook.com/GameloftViet/?brand_redir=216238295505' target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href='https://www.linkedin.com/company/gameloft' target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href='https://twitter.com/gameloft' target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        <a href='https://www.youtube.com/user/gameloft' target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-youtube-square"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-mobile__img">
                    <img src="https://img.enderws.com/gameloft/gameloft.png" alt="logo-footer" />
                </div>
                <div className='footer-mobile-wrapper'>
                    <div className='footer-mobile__left'>

                        <a href='/' target="_blank" rel="noreferrer noopener">Gameloft Games</a>
                        <a href='https://www.gameloft.com/corporate/en/jobs/apply/' target="_blank" rel="noreferrer noopener">Gameloft Careers</a>
                        <a href='https://www.gameloft.com/central' target="_blank" rel="noreferrer noopener">Gameloft News</a>
                        <a href='https://gmlft.co/Gameloft-Discord' target="_blank" rel="noreferrer noopener">Gameloft Forum</a>
                        <a href='https://www.gameloft.com/corporate/' target="_blank" rel="noreferrer noopener">Gameloft Corporate</a>
                        <a href='/'>Gameloft Advertising</a>
                        <a href='https://gameloft.helpshift.com' target="_blank" rel="noreferrer noopener">Gameloft Support</a>

                    </div>
                    <div className='footer-mobile__right'>
                        <a href='https://www.gameloft.com/en/conditions-of-use' target="_blank" rel="noreferrer noopener">Terms of Use</a>
                        <a href='https://www.gameloft.com/en/privacy-notice' target="_blank" rel="noreferrer noopener">Privacy Policy</a>
                        <a href='https://www.gameloft.com/en/legal/showcase-cookie-policy' target="_blank" rel="noreferrer noopener">Cookies Policy</a>
                        <a href='/' target="_blank" rel="noreferrer noopener">EULA</a>
                        <a href='https://www.gameloft.com/en/information/legal-notices' target="_blank" rel="noreferrer noopener">Legal Notices</a>
                        <a href='https://www.gameloft.com/en/information/event'>Event Rules</a>
                        <a href='/' target="_blank" rel="noreferrer noopener">Business Contacts</a>
                    </div>
                </div>
                <div className="footer-mobile__copyright">
                    <div className="footer-mobile__copyright-wrapper">
                        <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries. <br></br>All other trademarks are the property of their respective owners.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
