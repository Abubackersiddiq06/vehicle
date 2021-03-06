import React, {Component} from 'react';
import axios from '../axios-orders';
import Aux from '../HOC/Auxiliary';
import classes from './Getting.module.css';

class CarDataSearch extends Component {
    state = {
        users: [],
        search: null
    };

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }
    
    componentDidMount() {
        axios.get('./car.json').then(response => {
            console.log(response.data);
            const fetchedResults = [];
            for(let key in response.data){
                fetchedResults.push(
                    {
                        ...response.data[key],
                        id: key
                    }
                )
            }
            this.setState( {users: fetchedResults} )
        })
    }
    render() {
        const items = this.state.users.filter((user)=> {
            if(this.state.search == null)
              return user
            else if(user.name.toLowerCase().includes(this.state.search.toLowerCase() || user.modal.toLowerCase().includes(this.state.search.toLowerCase()) )){
                return user
            }  
        }).map(user => {
            return(                
                <div key = {user.id}>
                    <ul>
                        <li>
            <span className= {classes.data}>{user.name}</span>
            <span className= {classes.data}>{user.modal}</span>
                        </li>
                    </ul>
                </div>
            )
        })

        return (
            <Aux>
                <div className={classes.wrapper} >
                    <input className={classes.input} type="text" placeholder="Enter Car to be searched" onChange={(e)=>this.searchSpace(e)} />
                </div>
                <div>
                    {items}
                </div>
            </Aux>
        )
    }

}

export default CarDataSearch;