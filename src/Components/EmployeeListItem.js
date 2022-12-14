import { Link } from "react-router-dom";

export default function EmployeeListItem({ id, img, name, title }) {
  const ID = id;

  return (
    <Link to={`/employee/${ID}`}>
      <div className="container">
        <img src={img} alt={name} />
        <div className="emText">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}
