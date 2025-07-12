import EmployeeTable from "../../components/EmployeeTable";
import Header from "../../components/Header";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <EmployeeTable />
    </div>
  );
};

export default Home;
