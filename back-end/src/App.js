import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit, UserCreate } from './users';
import authProvider from "./authProvider";
// TODO replace with JWT(?) for prod.
const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");
  //TODO interface with DB for prod.

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
      </Admin>
    );
  }
}

export default App;