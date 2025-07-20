function loop(start, end, br, con) {
  if (
    start == undefined ||
    end == undefined ||
    br == undefined ||
    con == undefined
  ) {
    console.log("please enter all nums");
  } else {
    for (let i = start; end <= end; i++) {
      if (i == con) continue;
      console.log(i);
      if (i == br) break;
    }
  }
}

loop(1, 10, 8, 3);
loop(1, 10, 8);