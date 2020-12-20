import React from "react";
import "./App.css";
import API from "./utils/API";
import Hero from "./components/Hero"
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import Wrapper from "./components/Wrapper";


class App extends React.Component {
   state = {
      allUsers: [],
      // searchTerm: "",
   }
   // component did mount
   componentDidMount() {
     API.getUsers()
     .then(res => {
        const employees = res.data.results;
        console.log(employees);
        this.setState({
           allUsers: employees
            })
     })
      .catch(err => console.log(err))
   };
      // call API (utils)
         // setState
            // allUsers: [],
            // filteredUsers: [],
   // handleInputChange
   handleInputChange = (event) => {
      const search = event.target.value;
      const filtered = this.state.allUsers.filter(user => user.name.first.includes(search));
      // this.setState({ searchTerm: search})
      this.setState({ allUsers: filtered })

   };
      // change (setState) searchTerm
      // filter users based on searchTerm
      // sort if relevant
  // // // // // // // // // // //  sortUsers = event => {
  // // // // // // // // // // //    this
  // // // // // // // // // // //  }
      // using js sort (by string, or if you want to sort by number (DOB))
      // optionally implement, up or down
   render () {
      return (
         <div className="App">
            <Wrapper>
               <Hero />
               <SearchForm handleInputChange={this.handleInputChange}/>
               <SearchResults allUsers={this.state.allUsers} />
               <Footer />
            </Wrapper>
         </div>
      );
   };
};   
export default App;