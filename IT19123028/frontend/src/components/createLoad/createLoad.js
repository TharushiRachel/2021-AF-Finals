import React from 'react';
import axios from 'axios';
import Select from 'react-select';

class CreateLoad extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onVehicleSelect=this.onVehicleSelect.bind(this);
        this.state={
            lcode:'',
            lname:'',
            lload_count:0,
            lamount:0,
            vehicles:[],
            options:[],
            selectedVehicles:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/vehicle/')
        .then(responce=>{
            this.setState({vehicles: responce.data.data},()=>{
                let data=[];
                this.state.vehicles.map((item, index)=>{
                    let vehicle={
                        value:item._id,
                        lable:item._id
                    }
                    data.push(vehicle)
                });
                this.setState({options:data});
            })
        })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onVehicleSelect(e){
        this.setState({selectedVehicles:e? e.map(item=>item.value):[]});
    }

    onSubmit(e){
        e.preventDefault();
        let load={
            code:this.state.lcode,
            name:this.state.lname,
            load_count:this.state.lload_count,
            amount:this.state.lamount,
            vehicles:this.state.selectedVehicles
        }
        console.log('data to send',load);
        axios.post('http://localhost:8080/load/create',load)
        .then(response=>{
            alert('Data successfully inserted')
        })
        .catch(error=>{
            console.log(error.message);
            alert(error.message)
        })
    }

    render() {
        return (
             <div>
                 <h1>Create Load</h1>
                 <form onSubmit={this.onSubmit} >
  <div className="mb-3">
    <label htmlFor="loadCode" class="form-label">Code</label>
    <input type="text" class="form-control" id="loadCode" name="lcode" value={this.state.lcode} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

   <div class="mb-3">
    <label for="loadName" class="form-label">Name</label>
    <input type="text" class="form-control" id="loadName" name="lname" value={this.state.lname} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="loadCount" class="form-label">Loads</label>
    <input type="Number" class="form-control" id="loadCount" name="lload_count" value={this.state.lload_count} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="loadAmount" class="form-label">Amount</label>
    <input type="Number" class="form-control" id="loadAmount" name="lamount" value={this.state.lamount} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label htmlFor="loadVehicles" class="form-label">Select Vehicle</label>
    <Select
  options={this.state.options}
  onChange={this.onVehicleSelect}
  className="basic-multi-select"
  isMulti
  />
  </div>

    <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
             </div>
        );
    }
}

export default CreateLoad;