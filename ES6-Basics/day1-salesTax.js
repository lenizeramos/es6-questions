/*
Given the following data, implement a function calculateSalesTax that calculates the total sales and total tax, grouped by company.
Hints
Break down the problem into step-by-step pseudo-code (try pen and paper sketching, thinking "top-down" vs "bottom-up", pairing--whatever feels right to you!), and use console.log statements to debug and check your assumptions.
Don't be afraid to write additional functions if it helps you reason about your code! Sometimes even a very simple function like calculateTax(sales, taxRate) (calculating tax on a single dollar amount with a known rate) can help by giving the operation a name. What other small operations would partially solve this problem?
Naming your variables clearly and descriptively will help avoid confusion.
If you try to access an object attribute (property) that does not exist, then it will return undefined. This is important to know - if you are encountering undefined issues you may be falsely assuming that an attribute exists. Remember undefined is a "falsey" value.
*/

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Microsoft",
    province: "SK",
    sales: [500, 100],
  },
];

const calculateSalesTax = function (salesData, taxRates) {
  let companyInformation = salesData.reduce((acc, company) => {
    let salesAndTax = {};
    salesAndTax["totalSales"] = company.sales.reduce(
      (sum, sale) => sum + sale,
      0
    );
    salesAndTax["totalTax"] =
      salesAndTax.totalSales * taxRates[company.province];
    acc[company.name] = salesAndTax;

    return acc;
  }, {});

  return companyInformation;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));
/*
{
  Telus: {
    totalSales: value,
    totalTax: value
  },
  Bombardier: {
    totalSales: value,
    totalTax: value
  },
  Microsoft: {
    totalSales: value,
    totalTax: value
  }
}
*/
