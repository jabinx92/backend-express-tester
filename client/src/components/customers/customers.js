import React, {Component} from 'react';

import './customers.css';


class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            id: null,
            accountId: null,
            puuid: null,
            name: null,
            profileIconId: null,
            summonerLevel: null,
            test: null,
          };
    }
    componentDidMount() {
        fetch('/api/customers')
        .then(res => res.json())
        .then(result => this.setState({
            id: result.id,
            accountId: result.accountId,
            puuid: result.puuid,
            name: result.name,
            profileIconId: result.profileIconId,
            summonerLevel: result.summonerLevel,
            allInfo: result
        }, () => console.log('Customers fetched..', result.id)))
    }

    render () {
        return (
            <div>
                <h2>Customers</h2>
                <ul>Id: {this.state.id}</ul>

                <ul>Account Id: {this.state.accountId}</ul>

                <ul>Puuid: {this.state.puuid}</ul>

                <ul>Name: {this.state.name}</ul>

                <ul>Profile Icon Id: {this.state.profileIconId}</ul>

                <ul>Summoner Level: {this.state.summonerLevel}</ul>
                    {/* {this.state.customers.map(customer =>
                     <li key={customer.data.id}> {customer.data.accountId} {customer.data.puuid}</li>
                    )} */}
            </div>
        )
    }
}


export default Customers;
