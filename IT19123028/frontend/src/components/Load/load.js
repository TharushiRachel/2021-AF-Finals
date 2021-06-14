import React from 'react';
import axios from 'axios';

class ViewLoads extends React.Component{
    constructor(props){
        super(props);
        this.state={
           loads:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/load/')
        .then(responce=>{
           
            this.setState({vehicles: responce.data.data})
        })
    }

    render() {
        return (
             <div>
                 <h1>View Loads</h1>
                 {/* {this.state.loads>0 && this.state.loads.map((item,index)=>{
                     <div key={index} className="card mb-3">
                         <div className="p-3">
                         <h4>Code : {item.code}</h4>
                            <h4>Name : {item.name}</h4>
                            <h4>Load : {item.load_count}</h4>
                            <h4>amount : {item.amount}</h4>
                         </div>
                     </div>
                 })} */}
                 {this.state.loads.length>0 && this.state.loads.map((item,index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                        <h4>Code : {item.code}</h4>
                            <h4>Name : {item.name}</h4>
                            <h4>Load : {item.load_count}</h4>
                            <h4>amount : {item.amount}</h4>
                        <br></br>
                        </div>
                    </div>
                ))}

             </div>
        );
    }
}

export default ViewLoads;