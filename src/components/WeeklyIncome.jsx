

// FILE: src/components/WeeklyIncome.jsx

import React from "react";

const WeeklyIncome = ({
  income = {},
}) => {
  const rows = [
    {
      label: "TODAY",
      top: income.todayTop || 0,
      left: income.todayLeft || 0,
      right: income.todayRight || 0,
      total: income.todayTotal || 0,
    },
    {
      label: "THIS WEEK",
      top: income.weekTop || 0,
      left: income.weekLeft || 0,
      right: income.weekRight || 0,
      total: income.weekTotal || 0,
    },
    {
      label: "THIS MONTH",
      top: income.monthTop || 0,
      left: income.monthLeft || 0,
      right: income.monthRight || 0,
      total: income.monthTotal || 0,
    },
  ];

  return (
    <section className="weekly-income-section">
      <div className="section-header">
        <div>
          <p className="section-kicker">
            INCOME MOMENTUM
          </p>

          <h2 className="section-title">
            Weekly Income
          </h2>
        </div>
      </div>

      <div className="income-table">
        <div className="income-table-header">
          <div>PERIOD</div>
          <div>TOP ID</div>
          <div>LEFT ID</div>
          <div>RIGHT ID</div>
          <div>TOTAL</div>
        </div>

        {rows.map((row, index) => (
          <div
            key={index}
            className="income-table-row"
          >
            <div className="income-period">
              {row.label}
            </div>

            <div className="income-value">
              ₹{row.top}
            </div>

            <div className="income-value">
              ₹{row.left}
            </div>

            <div className="income-value">
              ₹{row.right}
            </div>

            <div className="income-total">
              ₹{row.total}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyIncome;

