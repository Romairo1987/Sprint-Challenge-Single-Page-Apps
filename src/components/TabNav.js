import React, {Component} from "react";
import { Tab} from "semantic-ui-react";
// import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import LocationsList from  "./LocationsList";


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/



const panes = [
  { menuItem: 'Home Page', render: () => <Tab.Pane><WelcomePage/></Tab.Pane> },
  { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList/></Tab.Pane> },
  { menuItem: 'Locations', render: () => <Tab.Pane><LocationsList/></Tab.Pane> },
  { menuItem: 'Episodes', render: () => <Tab.Pane>Episodes</Tab.Pane> }
]

const TabNav = () => <Tab panes={panes} />

export default TabNav;