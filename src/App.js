import React from "react";
import "./App.css";
import API from "./utils/API";
import Hero from "./components/Hero"
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import Wrapper from "./components/Wrapper";




function FormInput() {
   return <div>
      <SearchForm />
   </div>;
}

function UsersView() {
   // props: users (filteredUsers)
   // button to filter by name 
      // onClick -> this.sortUsers
   return <div>
      <div>
         <SearchResults props={this.state.allUsers}/>
      </div>
      </div>;
}

class App extends React.Component {
   state = {
      allUsers: [],
      filteredUsers: [],
      searchTerm: "",
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
   handleInputChange = event => {
     this.setState({ searchTerm: event.target.value})
     .then(() => {
        const filtered = this.state.filteredUsers.filter(user => user.name.contains(this.state.searchTerm));
        this.setState({ filteredUseres: filtered })
   })
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
               <FormInput />
               <SearchResults allUsers={this.state.allUsers} />
               <Footer />
            </Wrapper>
         </div>
      );
   };
};   
export default App;