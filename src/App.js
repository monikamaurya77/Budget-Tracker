import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import SpentSoFar from "./components/SpentSoFar";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from './components/Context/AppContext';

function App() {
  return (
    
    <AppProvider>
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row">
        <div className="col">
          <Budget />
        </div>

        <div className="col">
          <Remaining />
        </div>

        <div className="col">
          <SpentSoFar />
        </div>
      </div>
      <div>
        <ExpenseList />
      </div>

      <div>
        <h3 className="mt-4">Add Expense</h3>
      <div className="row mt-3">
      <AddExpenseForm/>
      </div>
      </div>
      
    </div>
    </AppProvider>
  );
}

export default App;
