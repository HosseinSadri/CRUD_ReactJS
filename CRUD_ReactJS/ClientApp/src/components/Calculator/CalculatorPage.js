import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import * as math from 'mathjs';
//import { type } from 'os';
//import { number } from 'prop-types';



export default class CalculatorPage extends Component {
    state = {
        input: '',
        result: ''
    };

    componentDidMount() {
        this.refs.input.focus()
    }

    onTodoChange = (event) => {
        this.setState({
            input: event.target.value
        });

    };
    HandleClickNum = (event) => {
        this.refs.input.focus()
        this.setState({
            input: this.state.input + event.target.value
        });
        console.log(this.state)
    };
    HandleClickCal = (event) => {
        if (event.target.value === '=' || event.keyCode === 13) {
            try {
                this.setState({
                    result: math.eval(this.state.input)
                });
            }
            catch (e) {
                this.setState({
                    result: 'Check Your Inputs'
                });
            }

        } else if (event.target.value === 'C') {
            this.setState({
                input: ''
            });

        } else if (event.target.value === 'CE') {
            this.setState({
                input: '',
                result:''
            });

        } else if (event.target.value === 'Rand') {
            this.setState({
                input: this.state.input + Math.random().toFixed(4)
            });

        }
    }
    render() {
        const ButCal = [
            ['Rand', 'CE', 'C', '=']
        ];
        const ButVal = [
            ['7', '8', '9', '/'],
            ['4', '5', '6', '*'],
            ['1', '2', '3', '-'],
            ['^', '0', '.', '+']
        ];
        //row
        //console.log(ButVal.length);
        //col
        //console.log(ButVal[0].length);     
        const ButGenerate = (InputArray) => InputArray.map((row) =>
            <div key={row} >
                {row.map((col) =>
                    <button
                        key={col}
                        className="CalcBtn"
                        onClick={InputArray === ButVal
                            ? this.HandleClickNum
                            : this.HandleClickCal}
                        value={col}
                    >
                        {col}
                    </button>
                )}
            </div>
        );

        return (
            <Grid>

                <Grid className="col-sm-4 col-sm-offset-4 text-center">
                   
                    <h3>Calculator</h3>
                    <div>
                        <input
                            className="CalcText"
                            id="input"
                            ref="input"
                            placeholder="Type an Equation"
                            autocomplete="off"
                            value={this.state.input}
                            onChange={this.onTodoChange}
                            onKeyUp={this.HandleClickCal}
                        />
                    </div>
                    <div>
                        <input
                            className="CalcTextResult"
                            placeholder="Result"
                            value={this.state.result} />
                    </div>
                    <div>{ButGenerate(ButCal)}</div>
                    <div>{ButGenerate(ButVal)}</div>
                </Grid >

            </Grid >
        );
    }
}
