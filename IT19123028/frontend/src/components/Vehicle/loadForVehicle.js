import React from 'react';
import axios from 'axios';

class Loads extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loads:[],
            totalAmount:''
        }
    }

    componentDidMount(){
        // axios.get(`http://localhost:8080/vehicle/${this.props.match.params.id}`)
        // .then(response => {
           
        //     this.setState({loads: response.data.loads })
        //    })
        //    .catch(error => {
        //      alert(error.message)
        //    })

        axios.get(`http://localhost:8080/vehicle/${this.props.match.params.id}`)
        .then(response => {
           // this.setState({ vehicls: response.data.data })
           this.setState({loads: response.data.loads })
          })
          .catch(error => {
            alert(error.message)
          })

           axios.get(`http://localhost:8080/vehicle/amount/${this.props.match.params.id}`)
           .then(response => {
            this.setState({ totalAmount: response.data.totalAmount })
        })
        .catch(error => {
             alert(error.message)
     })
    }

    render() {
        return (
             <div>
                 <h1>Total Amount For the Delivery : {this.state.totalAmount}</h1>
                <h1>Loads in this Vehicles</h1>
                {/* {this.state.loads.length > 0 && this.state.loads.map((item,index)=>{
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                           
                            <h4>Code : {item.code}</h4>
                            <h4>Name : {item.name}</h4>
                            <h4>Load : {item.load_count}</h4>
                            <h4>amount : {item.amount}</h4>
                        </div>
                    </div>
                })} */}

{this.state.loads.length > 0 && this.state.loads.map((item, index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                        <h4>Code : {item.code}</h4>
                            <h4>Name : {item.name}</h4>
                            <h4>Load : {item.load_count}</h4>
                            <h4>amount : {item.amount}</h4>
                           
                            
                        </div>
                    </div>
                ))}

             </div>


        );
    }
}

export default Loads;