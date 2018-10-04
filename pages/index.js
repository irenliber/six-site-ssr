import React from 'react'
import {connect} from 'react-redux'
// import { getHotel } from '../actions/hotel'

import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import ArrowLink from "../components/ArrowLink";

import appStore from '../assets/images/app_store.png'
import discount from '../assets/images/discount.png'
import light from '../assets/images/light.png'
import gift from '../assets/images/gift.png'
import gif from '../assets/images/gif.jpg'
import sixLogo from '../assets/images/six-logo.png'
import arrow from "../assets/images/arrow.png";
import like from "../assets/images/like.png";
import six from "../assets/images/six.png";
import Head from 'next/head'


class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    // dispatch(getHotel())
  }

  componentWillUnmount () {
    // clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <Head>
          <title>Six hotels</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="page home">
          <div className="page-gray-background"/>
          <div className="page-content">
            <Container>
              <Row>
                <Col xs="12" sm="12" md="6" lg="8">
                  <div className="top-right-content">
                    <img src={sixLogo} height={60} alt="Six Hotels"/>
                    <h1 className="font-weight-bold">Stay in the world's most stylish hotels</h1>
                    <p className="mb-4 text-20 desc">
                      This award winning app is the easiest way to discover and book expert-curated hotels in any city in
                      the world.
                    </p>
                    <div className="d-block w-100 app-store-img cursor-pointer">
                      <img src={appStore} width={120} alt="App Store"/>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={discount} width={20} className="mr-3" alt="Discount"/>
                      <ArrowLink class="text-12" bold text="LOWEST RATES GUARANTEED"/>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src={light} height={20} className="mr-4" alt="Explore Six"/>
                      <ArrowLink class="text-12" bold text="EXPLORE SIX"/>
                    </div>
                    <div>&nbsp;</div>
                    <div className="d-inline-flex align-items-center mt-1 mb-4 cursor-pointer">
                      <img src={gift} width={20} className="mr-3" alt="Gift"/>
                      <span className="weight-bold text-14 pt-1">FREE NIGHTS. FREE BREAKFAST.</span>
                    </div>
                    <p className="text-16 mb-3"> Share SIX with your friends and earn free nights at the world's top
                      hotels.</p>
                    <p className="text-16 mb-4 color-gray">Enter your mobile number to learn about the benefits of our referral
                      program.</p>
                    <div className="phone-input-group d-flex align-items-center mb-3">
                      <input
                        className="input"
                        type="text"
                        name="phone"
                        placeholder="+1 646 513 3110"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.email}
                      />
                      <div className="phone-input-btn d-flex align-items-center justify-content-center">
                        <span className="text-14 weight-bold mr-2">FIND OUT</span>
                        <img src={arrow} width={10} className="arrow-left" alt="arrow"/>
                      </div>
                    </div>
                    <div className="color-gray text-12">Standard text message rates may apply.</div>
                  </div>
                </Col>
                <Col xs="12" sm="12" md="6" lg="4" className="pt-2 text-center">
                  <img src={gif} width="100%" className="mt-5 six-hotels-gif" alt="Six Hotels"/>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className="footer">
            <Row>
              <Col xs="6" sm="6" md="2" lg="2" className="mb-4">
                <div className="font-weight-bold mb-3 text-12">FOR TRAVELLERS</div>
                <div className="footer-link"><a href="#">Top cities</a></div>
                <div className="footer-link"><a href="#">Under $200</a></div>
                <div className="footer-link"><a href="#">Earn free nights</a></div>
                <div className="footer-link"><a href="#">Get the app</a></div>
              </Col>
              <Col xs="6" sm="6" md="2" lg="2" className="mb-4">
                <div className="font-weight-bold mb-3 text-12">FOR CREATORS</div>
                <div className="footer-link"><a href="#">Request free stays</a></div>
                <div className="footer-link"><a href="#">Earn commission</a></div>
                <div className="footer-link"><a href="#">Invite your entourage</a></div>
                <div className="footer-link"><a href="#">Get access</a></div>
              </Col>
              <Col xs="6" sm="6" md="2" lg="2" className="mb-4">
                <div className="font-weight-bold mb-3 text-12">FOR HOTELS</div>
                <div className="footer-link"><a href="#">True Directs Bookings</a></div>
                <div className="footer-link"><a href="#">Social Insights</a></div>
                <div className="footer-link"><a href="#">Features</a></div>
                <div className="footer-link"><a href="#">Contact sales</a></div>
              </Col>
              <Col className="d-none d-md-block"/>
              <Col xs="6" sm="6" md="4" lg="4" className="mb-4">
                <img src={six} width={40} className="mb-3" alt="Six Hotels"/>
                <div className="footer-link"><a href="#">Our story</a></div>
                <div className="footer-link"><a href="#">Why booking with us</a></div>
                <div className="footer-link"><a href="#">Frequently asked questions</a></div>
                <div className="footer-link"><a href="#">Contact support</a></div>
              </Col>
            </Row>
            <Row className="footer-bottom mb-4 pt-2">
              <Col xs="8" sm="8" md="8">
                &#9400; 2018 SIXAPP INC. All rights reserved.
              </Col>
              <Col xs="4" sm="4" md="4">
                Made with <img src={like} width={10} alt="like"/> in New York
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default connect()(Index)
