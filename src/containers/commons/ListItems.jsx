
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import NewIcon from '@material-ui/icons/Public';
import AssignmentIcon from '@material-ui/icons/AccountBalance';
import { Link } from 'react-router-dom'

export const MainListItems = ({isLog}) => (
  <div>
    <ListItem button component={Link} to="/" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/About" >
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Acerca de" />
    </ListItem>
    {
      isLog && (
        <ListItem button component={Link} to="/private" >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Privado" />
        </ListItem>
      )
    }
    {
      isLog && (
      <ListItem button component={Link} to="/private2" >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Privado2" />
      </ListItem>
      )
    }
    {
      isLog && (
      <ListItem button component={Link} to="/private3" >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Privado3" />
      </ListItem>
      )
    }

    <ListItem button>
      <ListItemIcon>
        <NewIcon />
      </ListItemIcon>
      <ListItemText primary="Noticias" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Contactenos" />
    </ListItem>
  </div>
);

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