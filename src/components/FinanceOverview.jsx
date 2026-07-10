import CustomPieChart from "./CustomPieChart.jsx";
import {addThousandsSeparator} from "../util/util.js";
import bg_pic from "../assets/money.jpg";
const FinanceOverview = ({totalBalance, totalIncome, totalExpense}) => {
    const COLORS = ["#7620b7", "#c31016", "#05994a"];

    const balanceData = [
        { name: "Total Balance", amount: totalBalance },
        { name: "Total Expenses", amount: totalExpense },
        { name: "Total Income", amount: totalIncome },
    ];
    return (
        <div className="card bg-gradient-to-r from-blue-200 via-sky-100 to-white border border-blue-300 shadow-md">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Financial Overview</h5>
            </div>


            <CustomPieChart
                data={balanceData}
                label="Total Balance"
                totalAmount={`₹${addThousandsSeparator(totalBalance)}`}
                colors={COLORS}
                showTextAnchor
            />
        </div>
       
    )
}

export default FinanceOverview;