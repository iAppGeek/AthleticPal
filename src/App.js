import React, {Component} from 'react';
import MainBody from './components/MainBody';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import rootReducer from "./reducers";
import PageHeader from "./components/PageHeader";

const store = createStore(rootReducer, applyMiddleware(logger));

class App extends React.Component<{}, {}> {

    constructor(props){
        super(props);
        this.state = { opacity: 0 }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateNavOpacity);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateNavOpacity);
    }

    updateNavOpacity = () => {
        const navbarHeight = 50; // Bootstrap default
        //const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props;
        const endFade = navbarHeight - navbarHeight - 0;
        const startFade = endFade - 10;
        const scrolly = window.scrollY;

        if (scrolly < startFade) {
            if (this.state.opacity === 0) return;
            this.setState({ navOpacity: 0 });
            return;
        }

        if (scrolly > endFade) {
            if (this.state.opacity === 1) return;
            this.setState({ navOpacity: 1 });
            return;
        }

        const pxPastStartFade = scrolly - startFade;
        const navOpacity = pxPastStartFade / (endFade - startFade);
        this.setState({ navOpacity });
    }


    handleScroll = event => {
        console.log('scrolling')
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <PageHeader />
                    <MainBody />
                </div>
            </Provider>
        );
    }
}

export default App;