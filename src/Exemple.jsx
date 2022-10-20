import React, { Component } from 'react';

class Exemple extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            compteur : 0,
            value:0,
            isLoading: true,
            isLoadbtn: false,
        }

        console.log("Lancement constructeur ....");
    }

    render() {
        console.log("Lancement render ....");
        if(this.state.isLoading)
            return <h>En cours de chargement....</h>

        return (
            <div>   
                <h1>{this.state.compteur} - {this.state.value}</h1>
                <button disabled={this.state.isLoadbtn} onClick={() => this.setState({isLoadbtn:true, compteur: this.state.compteur+1})}>Incrementer</button>
                <button onClick={() => this.setState({compteur: this.state.compteur-1})}>Decrementer</button>
            </div>
        );
    }

    componentDidMount(){
        console.log("Lancement componentDidMount ....");
        setTimeout(() => this.setState({isLoading: false}), 5000);
    }

    componentDidUpdate(prevprops, prevstate){
        console.log("Lancement componentDidUpdate ....");
        
        if(prevstate.isLoadbtn !== this.state.isLoadbtn)
            setTimeout(() => this.setState({isLoadbtn: false}), 5000);

        if(prevstate.compteur !== this.state.compteur)
            this.setState({value: this.state.compteur*2});
    }

    componentWillUnmount(){
        console.log("Lancement componentWillUnmount ....");

    }
}

export default Exemple;
