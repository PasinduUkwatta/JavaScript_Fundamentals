import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            robots: [],
            searchField: ""

        }
    }

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users").then(responce=>{
            return  responce.json()
        }).then(users=>{
            this.setState({robots:users})
        })

    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})

    }


    render() {
        const{robots,searchField} =this.state

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        console.log(filterRobots)
        if(!robots.length){
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className="tc ">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>

                    </Scroll>
                </div>

            )
        }

    }


}

export default App