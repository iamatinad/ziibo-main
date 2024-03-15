import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";

function Browsecomponents() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="success" {...bindTrigger(popupState)}>
            Browse
          </Button>
          <Menu {...bindMenu(popupState)} className="browse-menu">
            <MenuItem onClick={popupState.close} >
              <Link to="/genres">Genres</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/movies">Movies</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/seriesc">Series</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/topc">Top IMDb</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/upcoming">Upcoming</Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default Browsecomponents;
