import React, { Component } from 'react'

class Sales extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             total: 0
        }

        this.addPrice = this.addPrice.bind(this);
    }

    addPrice(price){
        this.setState({total:this.state.total + price});
    }

    render() {
        console.log(this.props.items);
        var langs = this.props.items.map((item, i) => {
            return <Lang name={item.name} price={item.price}
                key={i} addPrice={this.addPrice} active={item.active}
                />
        })
        return (
            <div>
                <h1>You can buy languages:</h1>
                <div id="courses">
                    {langs}
                    <p id="total">Total: <b>{this.state.total}</b></p>
                </div>
            </div>
        )
    }
}


class Lang extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             active: false
        };

        this.clicker = this.clicker.bind(this);
    }

    clicker(){
        var active =!this.state.active
        this.setState({active: active});
        this.props.addPrice(active ? this.props.price : -this.props.price)
    }

    render() {
        return (
            <div>
               <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p> 
            </div>
        )
    }
}


export default Sales
