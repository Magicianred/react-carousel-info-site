import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../Partials/LayoutJumbotron';
import Container from 'react-bootstrap/Container';
import { Carousel as CarouselBootstrap } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import HomeMessage from '../../Models/HomeMessage';

/* START LOCAL FILE */
// import pageData from './../../data/pages/home.md';
// import data from './../../data/home_messages.json';
/* END LOCAL FILE */

const publicUrl = process.env.PUBLIC_URL;

/**
 * Component for showing the Home page. 
 * 
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            homeMessageJson: undefined,
            mdText: undefined,
            hasError: false,
        };
    }      

    componentDidMount() {
        const items = [];
        let homeMessageJson = '';
        this.serverRequest = 
            axios
                .get(`${publicUrl}/data/home_messages.json`)
                .then((result) => {
                    homeMessageJson = JSON.stringify(result.data, null, 2);
                    result.data.map((item, index) => items.push(new HomeMessage(index, item.title, item.text, item.imagesrc, item.link)));
                    this.setState({ items, homeMessageJson });
            });
        let mdText = undefined;
        this.serverRequest = 
            axios
                .get(`${publicUrl}/data/pages/home.md`)
                .then((result) => {
                    mdText = result.data;
                    console.log(mdText);
                    this.setState({ mdText });
            });
    }

    /* START LOCAL FILE */
    // componentDidMount() {
    //     const items = [];
    //     let homeMessageJson = '';
    //     homeMessageJson = JSON.stringify(data, null, 2);
    //     data.map((item, index) => items.push(new HomeMessage(index, item.title, item.text, item.imagesrc, item.link)));
    //     this.setState({ items, homeMessageJson });
    // }

    // componentWillMount() {
    //     fetch(pageData).then((response) => response.text()).then((text) => {
    //       this.setState({ mdText: text })
    //     })
    // }
    /* END LOCAL FILE */


    static getDerivedStateFromError(error) {       
        return { hasError: true };  
    }    

    render() {
        const { items, homeMessageJson, mdText, hasError } = this.state;
        return (
            <Layout>
                {hasError ? <h1>Something went wrong.</h1> : null}
                    {items && items.length > 0 ?
                        <CarouselBootstrap fade pauseOnHover>
                            {items.map(item => item.toDisplay())}
                        </CarouselBootstrap>
                        : null }
                    <Container id="content_main">
                        <ReactMarkdown source={mdText} />
                    </Container>
                    <Container className="file_contents">
                        <span>file: /data/pages/home.md</span>
                        <SyntaxHighlighter language={'markdown'} style={coy}>
                            {mdText}
                        </SyntaxHighlighter>
                    </Container>
                    <Container className="file_contents">
                        <span>file: /data/home_messages.json</span>
                        <SyntaxHighlighter language={'json'} style={coy}>
                            {homeMessageJson}
                        </SyntaxHighlighter>
                    </Container>
            </Layout>
        );
    }
}

export default Home;