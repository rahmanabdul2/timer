const alramTime = process.argv.slice(1);

for (let i = 0; i < alramTime.length; i++) {
  if (alramTime[i] >= 0 || alramTime[i] !== NaN) { //An input is  less than zero AND not a number: Ignore/skip these as well,
    setTimeout(() => {
      process.stdout.write('\x07'); // makes the terminal produce a sound
    }, alramTime[i] * 1000);
  }
}