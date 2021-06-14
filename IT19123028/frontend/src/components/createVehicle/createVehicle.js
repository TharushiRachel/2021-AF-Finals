import React from 'react';
import axios from 'axios';

class CreateVehicle extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            cname:'',
            cdescrption:''
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let vehicle = {
            name:this.state.cname,
            description:this.state.cdescrption
        }

        axios.post('http://localhost:8080/vehicle/create', vehicle)
        .then(response => {
            alert('Data successfully inserted')
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message)
          })

    }

    render() {
        return (
             <div>
                 <h1>Create Vehicle</h1>
                 <form onSubmit={this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="Type" class="form-label">Name</label>
    <input type="text" class="form-control" id="Type" name="cname" value={this.state.cname} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="Type" class="form-label">Description</label>
    <input type="text" class="form-control" id="Type" name="cdescrption" value={this.state.cdescrption} onChange={this.onChange} aria-describedby="emailHelp"/>
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

export default CreateVehicle;