import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import employees from "../../data";

export default function Employee(props) {
  const [employeeDetails, setEmployeeDetails] = useState(null);

  const { employeeID } = useParams();

  useEffect(() => {
    const getEmployeeDetails = async () => {
      try {
        const data = employees.find(
          (eachEmployee) => eachEmployee.id === employeeID
        );
        console.log(data);
        setEmployeeDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    getEmployeeDetails();
  }, [employeeID]);

  const loaded = () => {
    return (
      <div className="container">
        <header>
          <Link to={"/"}>
            <span className="back">‹</span>
          </Link>
          <h1>Employee</h1>
        </header>
        <div className="home">
          <img src={employeeDetails.img} alt="img" />
          <div>
            <h2>{employeeDetails.name}</h2>
            <p>{employeeDetails.title}</p>
          </div>
        </div>
        <div className="info">
          <h3>Department</h3>
          <p>{employeeDetails.department}</p>
        </div>
        <div className="info">
          <h3>Phone</h3>
          <p>{employeeDetails.phone}</p>
        </div>
        <div className="info">
          <h3>Email</h3>
          <p>{employeeDetails.email}</p>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading Employee ...</h1>;
  };

  return employeeDetails ? loaded() : loading();
}
