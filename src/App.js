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
      searchTerm: "",
      sortAscending: true,
      filteredUsers: []

   }
   // component did mount
   componentDidMount() {
      API.getUsers()
         .then(res => {
            const employees = res.data.results;
            console.log(employees);
            this.setState({
               allUsers: employees,
               filteredUsers: employees
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
      let filtered = this.state.allUsers;
      const search = event.target.value;
      filtered = this.state.allUsers.filter(user => user.name.first.toLowerCase().includes(search.toLowerCase()));
      // this.setState({ searchTerm: search})
      this.setState({ filteredUsers: filtered })
      this.setState({searchTerm: search});
   };

   handleSortClick = () => {
      let sorted = [];
      if (this.state.sortAscending) {
         sorted = this.state.allUsers.sort(function (a, b) {
            if (a.name.first < b.name.first) {
               return -1;
            }
            if (a.name.first > b.name.first) {
               return 1;
            }

            // names must be equal
            return 0;
         }


         )
         this.setState({sortAscending: false});

      } else {
         sorted = this.state.allUsers.sort(function (a, b) {
            if (a.name.first < b.name.first) {
               return 1;
            }
            if (a.name.first > b.name.first) {
               return -1;
            }

            // names must be equal
            return 0;

         })
         this.setState({ sortAscending: true });

      }
      this.setState({ filteredUsers: sorted });
   }
   // change (setState) searchTerm
   // filter users based on searchTerm
   // sort if relevant
   // // // // // // // // // // //  sortUsers = event => {
   // // // // // // // // // // //    this
   // // // // // // // // // // //  }
   // using js sort (by string, or if you want to sort by number (DOB))
   // optionally implement, up or down
   render() {
      return (
         <div className="App">
            <Wrapper>
               <Hero />
               <SearchForm handleInputChange={this.handleInputChange} search={this.state.searchTerm}/>
               <SearchResults filteredUsers={this.state.filteredUsers} handleSortClick={this.handleSortClick} />
               <Footer />
            </Wrapper>
         </div>
      );
   };
};
export default App;