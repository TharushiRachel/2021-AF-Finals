import React from 'react';
import axios from 'axios';

class ViewVehicles extends React.Component{
    constructor(props){
        super(props);
        this.state={
            vehicles:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/vehicle/')
        .then(responce=>{
            //console.log('vehicles', responce.data);
            this.setState({vehicles: responce.data.data})
        })
    }

    // navigateDeleteVehiclePage(e,vehicleId){
    //     window.location=`/${vehicleId}`
    // }

    navigateLoadPage(e, categoryId){
        window.location=`/${categoryId}`
    }

    render() {
        return (
             <div className="container">
                 <h1>View Vehicles</h1>
                {this.state.vehicles.length>0 && this.state.vehicles.map((item,index)=>(
                    <div key={index} className="card mb-3" onClick={e=>this.navigateLoadPage(e,item._id)}>
                        <h5>Name : {item.name}</h5>
                        <h5>Description : {item.description}</h5>
                        <button type="submit" class="btn btn-primary"className=".ms-1" onClick={e=> this.navigateDeleteVehiclePage(e, item._id)}>Delete </button>
                    </div>
                ))}
             </div>
        );
    }
}

export default ViewVehicles;