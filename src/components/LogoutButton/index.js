import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (props) => {
  const { logout } = useAuth0();
  return (
    <button
      className={`button ${props.styles}`}
      id={props.logoutid}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
