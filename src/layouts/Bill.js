import React, { Component } from 'react';
import Form from '../components/Form';
import axios from 'axios';
class Bill extends Component {
    state={
        repos: null 
    }
    getUser=(e)=>{
        e.preventDefault();
        const user = e.target.elements.username.value;
        axios.get(`http://api.github.com/users/${user}`)
            .then((res)=>{
                console.log(res);
               const repos = res.data.public_repos;
               console.log(repos);
               this.setState({repos})
            })
       
    }
    render() { 
        return ( 
            <div>
                <Form getUser={this.getUser}  />
                <br/>
                <div className='text-center'>
                {this.state.repos ? <p>Total Repos: {this.state.repos}</p> : 
                <p>Usernamme doesn't exist</p>}
                </div>
            </div>
         );
    }
}
 
export default Bill;

