import SearchBar from "../SearchBar";
import EmployeeList from "../EmployeeList";
import Header from "../Header";

export default function Homepage(props) {
  return (
    <div className="homepage">
      <div className="home">
        <Header />
      </div>
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
