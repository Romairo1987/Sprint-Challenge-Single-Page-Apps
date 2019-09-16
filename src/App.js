import React, { useState } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";



export default function App() {
  
  return (
    <main>
      
      <Route exact path="/" render={()=>
        <div>
          <Header/>
          <TabNav/>
        </div>}>
      </Route>

      
      <Route path="/characterlist" render={props=><CharacterList {...props}/>}></Route>
      <Route path="/characterlist/:id" render={(props)=><CharacterCard {...props}/>}></Route>
    </main>
  );
}
