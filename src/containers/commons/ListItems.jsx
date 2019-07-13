
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { 
  List, ListItem, ListItemIcon, 
  ListItemText, ListSubheader, Collapse, Divider
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import NewIcon from '@material-ui/icons/Public';
import AssignmentIcon from '@material-ui/icons/AccountBalance';
import { ExpandLess, ExpandMore, Save, ListAlt } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faNewspaper } from '@fortawesome/free-solid-svg-icons';

export class MainListItems extends Component {
  static propTypes =  {
    isLog: PropTypes.bool,
    rol: PropTypes.string,
  };
  
  static defaultProps = {
		rol: ''
	};

  state = {
    options: {
      motherOpen: false,
      newsOpen: false
    }
  };

  onShowCollapse = (type) => {
    switch(type){
      case 'mother': {
        this.setState({
          ...this.state,
          options: {
            motherOpen: !this.state.options.motherOpen,
            newsOpen: false
          }
        });
        break;
      }
      case 'news': {
        this.setState({
          ...this.state,
          options: {
            motherOpen: false,
            newsOpen: !this.state.options.newsOpen,
          }
        });
        break;
      }
      default: 
        break;
    }

  }
  render(){
    const { props: { isLog, rol }, state: { options: { motherOpen, newsOpen } } } = this;
    const styleSubItem = { marginLeft: '15px' },
          styleFont = {marginLeft: '7px'};
    return (
      <div>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/About">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Acerca de"/>
          </ListItem>    
          <ListItem button component={Link} to="/news">
            <ListItemIcon>
              <NewIcon />
            </ListItemIcon>
            <ListItemText primary="Noticias"/>
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Contactenos"/>
          </ListItem>
        </List>
        { isLog && rol.toLowerCase()==='admin' && <Divider /> }
        <List>
        {
          isLog && rol.toLowerCase()==='admin'  && (
            <Fragment>
              <ListItem button onClick={() => { this.onShowCollapse('mother') } }>
                <ListItemIcon style={{marginLeft: '14px'}}>
                  <FontAwesomeIcon icon={faFemale}/>
                </ListItemIcon>
                <ListItemText primary="Madre Lider"/>
                {motherOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={motherOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={styleSubItem}>
                  <ListItem button component={Link} to="/mother-leaders/new">
                    <ListItemIcon>
                      <Save />
                    </ListItemIcon>
                    <ListItemText primary="Nuevo" />
                  </ListItem>
                  <ListItem button component={Link} to="/mother-leaders/list">
                    <ListItemIcon>
                      <ListAlt />
                    </ListItemIcon>
                    <ListItemText primary="Listar" />
                  </ListItem>
                </List>
              </Collapse>
            </Fragment>
          )
        }
        {
          isLog && rol.toLowerCase()==='admin'  && (
            <Fragment>
            <ListItem button  onClick={() => { this.onShowCollapse('news') } }>
              <ListItemIcon style={styleFont}>
                <FontAwesomeIcon icon={faNewspaper}/>
              </ListItemIcon>
              <ListItemText primary="Noticias" />
              {newsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={newsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding style={styleSubItem}>
                <ListItem button component={Link} to="/news/new">
                  <ListItemIcon>
                    <Save />
                  </ListItemIcon>
                  <ListItemText primary="Nuevo" />
                </ListItem>
                <ListItem button component={Link} to="/news/list">
                  <ListItemIcon>
                    <ListAlt />
                  </ListItemIcon>
                  <ListItemText primary="Listar" />
                </ListItem>
              </List>
            </Collapse>
          </Fragment>
          )
        }
        </List>
      </div>
    );
  }
} 

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Recursos</ListSubheader>
    <ListItem button component="a" target="_blank" href="https://www.bancoagrario.gov.co/SAC/Paginas/MasFamiliasAccion.aspx">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Banco" />
    </ListItem>
  </div>
);