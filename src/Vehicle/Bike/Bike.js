import React, {Component} from 'react';
import Modal from '../Modal/Modal';
import classes from '../Modal/Modal.module.css';
import Bikedatasearch from '../../Searches/Bikedata/Bikedatasearch';

class Bike extends Component {
    state = { show: false };
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <main>
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <Bikedatasearch />
            {/* <Search /> */}
          </Modal>
          <button className={classes.veh} onClick={this.showModal}>Bike</button>
        </main>
      );
    }
  }
  
  export default Bike;