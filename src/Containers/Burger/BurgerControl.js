import React from 'react'
import IngredientController from './Ingredients/Ingredient/IngredientController';
import ReactModal from 'react-modal'
import classes from './BurgerControl.css'
import classesModal from '../Modal.css'
import OrderSummary from './OrderSummary';

ReactModal.setAppElement('#main');

ReactModal.defaultStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex:5

    },
    content: {
        position: 'absolute',
        top: '25%',
        height: '25%',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'width': '500px',
    }
}
 
class burgerControl extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
     
    getIgController() {

        const controllers = Object.keys(this.props.ingredients).map((value, index) => {
            return (<IngredientController
                key={index}
                count={this.props.ingredients[value].count}
                add={() => this.props.addEntryHandler(value)}
                remove={() => this.props.removeEntryHandler(value)}>{value}</IngredientController>)
        });

        const count = Object.keys(this.props.ingredients).map (a => {
            return this.props.ingredients[a].count
        })
        .reduce((a, b) => { 
             return a + b;
        });

        this.count = count
        this.igController = controllers; 
        
    }


    render() {
        this.getIgController(); 

        return  (
            <div className="sm-col-10 md-col-10 lg-col-8 py2 mx-auto">
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                >

                    <div className={classesModal.close} onClick={this.handleCloseModal}>&times;</div>
                    <OrderSummary ingredients={this.props.ingredients} />

                </ReactModal>

                {this.igController}
                <div className="sm-col-10 md-col-10 lg-col-8 py2 mx-auto">
                    <div id="myBtn" style={this.count > 0 ? { opacity: 1, pointer: 'default' } : { opacity: 0.2 }} className={classes.Checkout} onClick={ this.count > 0 ? this.handleOpenModal : ''}>checkout<span>{' ↣ '}</span></div>
                </div>
            </div> 
        )

    }
}


export default burgerControl;