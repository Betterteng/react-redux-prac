import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {

    add = () => {
        const id = nanoid();
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = {id, name, age};
        this.props.jiaYiGeRen(personObj);
        // Clear all inputs
        this.nameNode.value = '';
        this.ageNode.value = '';
    }

    render() {
        return (
            <div>
                <h1 style={{color: 'orangered'}}>Person Component, ABOVE COUNT: {this.props.count}</h1>
                <h2>赵思琪天下第一美</h2>
                <input type="text" placeholder="Please enter your name" ref={c => this.nameNode = c}/>{'\u00A0'}
                <input type="text" placeholder="Please enter your age" ref={c => this.ageNode = c}/>{'\u00A0'}
                <button onClick={this.add}>Add</button>
                <ul>
                    {
                        this.props.haoduoren.map((p) => {
                            return <li key={p.id}>name: {p.name} - age: {p.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        haoduoren: state.humans,
        count: state.sum
    }),
    {
        jiaYiGeRen: createAddPersonAction
    }
)(Person);