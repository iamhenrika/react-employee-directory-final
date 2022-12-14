import DATA from "../data";
import EmployeeListItem from "./EmployeeListItem";

const employees = DATA.map((ele) => {
  return <EmployeeListItem key={ele.id} {...ele} />;
});

export default function EmployeeList(props) {
  return <div className="border">{employees}</div>;
}
