import React, { Component } from 'react';

export class Cities extends Component {
    constructor() {
        super();
        this.state = {
            TotalList: [],
            CityList: []
        };
    }
    componentWillMount() {
        fetch('api/product/GetCities')
            .then(res => res.json())
            .then(x => {
                this.setState({ TotalList: x });
            });
    }

    handleChange = (event) => {
        var a = (event.target.value) * 1;
        var firstProvienceId = this.state.TotalList[0].provienceId;
        this.setState({
            CityList: this.state.TotalList[a - firstProvienceId].city
        })

    }
    render() {
        return (
            <div>
                <div className="form-Group">
                    <label>Provience:</label>
                    <select className="form-control" onChange={this.handleChange}>
                        <option>...Select Provience...</option>
                        {this.state.TotalList.map(item =>
                            <option key={item.provienceId} value={item.provienceId}>{item.provience}</option>
                        )}
                    </select>
                </div>
                <div className="form-Group">
                    <label>City:</label>
                    <select className="form-control" >
                        <option>...Select City...</option>
                        {this.state.CityList.map(item =>
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}