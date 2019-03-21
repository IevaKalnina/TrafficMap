import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            applicationName:'TrafficMap',
            data: null,
            api_url: 'http://data.edmonton.ca/resource/87ck-293k.json',
        }
    }

    createFeatureCollect(data) {
        let features= [];
        data.forEach(point => {
            features.push({
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        parseFloat(point.location.longitude),
                        parseFloat(point.location.latitude)
                    ]
                },
                "properties" : {
                    "description": point.description,
                    "details": point.details,
                    "duration": point.duration,
                    "impact": point.impact
                }
            });
        });

        return {
            "type": "FeatureCollection",
            "features" :features
        }
    }


    // tagging current bollean value and flipping it
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    

    componentDidMount() {
        const { data,api_url } = this.state;
        
        if(!data) {
            fetch(api_url, { method: 'GET'})
            .then(response => response.json())
            .then(response => this.createFeatureCollect(response))
            .then(response => this.setState({data: response}))
        }
    }

    render() {
        return (
            <div className="App">
                <Header appName={this.state.applicationName} />
                <Container>
                    <Map data={this.state.data} />
                </Container> 
            </div>
        );
    }
}

export default App;
