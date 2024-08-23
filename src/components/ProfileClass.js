import React from "react";




class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            // count:0,
            userInfo:{
                name:"vraj janfi",
                location:"lalsot",
            }
        };

    }

    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Vrajjangid5");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })
    }

    render(){
            const {count}=this.state;

        return(
           <>
            {/* <h1>this class base components</h1>
            <h2>NAME:{this.props.name}</h2>
            <h2>count:{count}</h2> */}

                <h1>profile class</h1>
                <img
                    src={this.state.userInfo.avatar_url}
                />    
                <h1>Name: {this.state.userInfo.name}</h1>
                <h3>Locatino: {this.state.userInfo.location}</h3>        

           </>
        )
    }
}
export default Profile;