import React from 'react';
import { Route } from 'react-router-dom';


import { Header } from './components';
import { Home, Cart } from './pages';

export default function App() {
 
  /* const state = useSelector((state) => {
    return {
      items: state.pizzas.items,
      sortBy: state.filters.sortBy,
    };
  }); */

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* <Route exact path="/" render={() => <Home items={items} />} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

// Class component

// class App extends React.Component {
//   componentDidMount() {
//     axios
//       .get('http://localhost:3000/db.json')
//       .then(({ data }) => this.props.setPizzas(data.pizzas));
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route exact path="/" render={() => <Home items={this.props.items} />} />
//           <Route exact path="/cart" component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// const mapDispatchToProps = {
//   setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
