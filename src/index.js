const nums = {
   1: "one",
   2: "two",
   3: "three",
   4: "four",
   5: "five",
   6: "six",
   7: "seven",
   8: "eight",
   9: "nine",
   10: "ten",
   11: "eleven",
   12: "twelve",
   13: "thirteen",
   14: "fourteen",
   15: "fifteen",
   16: "sixteen",
   17: "seventeen",
   18: "eighteen",
   19: "nineteen",
   20: "twenty",
   30: "thirty",
   40: "forty",
   50: "fifty",
   60: "sixty",
   70: "seventy",
   80: "eighty",
   90: "ninety"
};
module.exports = function toReadable (number) {
   if (number === 0) {
      return 'zero';
  }

  let str = number + '';
  let h = '';

  if (str.length === 3) {
      h = `${nums[str[0]]} hundred `;
      str = str.split('');
      str.shift();
      str = str.join('');
  }

  if (nums[str]) {
      return `${h}${nums[str]}`;
  } else {
      const t = nums[str[0]] ? `${nums[Math.floor(str / 10) * 10]} ` : '';
      const d = nums[str[1]] ? `${nums[str % 10]}` : '';
      
      return `${h}${t}${d}`.trim();
  }
}
