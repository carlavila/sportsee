import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <span className="error-number">404</span>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink className="error-link" to="/*">
        <p className="error">Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
};

export default NotFound;
