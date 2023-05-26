const toRoman = (decimal: number) => {
  const chart: [string, number][] = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let roman = "";
  let remainder = decimal;

  for (const [letter, value] of chart) {
    const count = Math.floor(remainder / value);
    roman += letter.repeat(count);
    remainder %= value;
  }

  return roman;
};

export default toRoman;
