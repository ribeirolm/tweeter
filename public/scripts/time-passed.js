// function timePassed (date){
//   let dateToday = Date.now() / 1000;
//   let pastDate = date / 1000;
//   let timePassed = dateToday - pastDate;
//   if (timePassed < 60) {
//     console.log(Math.floor(timePassed) + " seconds");
//   } else if (timePassed < 3600) {
//     console.log(Math.floor(timePassed / 60) + " minutes" );
//   } else if (timePassed < 86400) {
//     console.log(Math.floor(timePassed / 3600) + " hours");
//   } else if (timePassed < 604800) {
//     console.log(Math.floor(timePassed / 86400) + " days");
//   } else if (timePassed < 2419200) {
//     console.log(Math.floor(timePassed / 604800) + " weeks");
//   } else if (timePassed < 29030400) {
//     console.log(Math.floor(timePassed / 2419200) + " months");
//   } else {
//     console.log(Math.floor(timePassed / 29030400) + " years");
//   }
// }

// Test for timePassed function:
// timePassed(1550782443851);


//This is a function to parse the time the tweet was created and transform it into the time passed from now.
  const timePassed = (date) => {
    let dateToday = Date.now() / 1000;
    let pastDate = date / 1000;
    let timePassed = dateToday - pastDate;
    if (timePassed < 60) {
      return (Math.floor(timePassed) + " seconds");
    } else if (timePassed < 3600) {
      return (Math.floor(timePassed / 60) + " minutes" );
    } else if (timePassed < 86400) {
      return (Math.floor(timePassed / 3600) + " hours");
    } else if (timePassed < 604800) {
      return (Math.floor(timePassed / 86400) + " days");
    } else if (timePassed < 2419200) {
      return (Math.floor(timePassed / 604800) + " weeks");
    } else if (timePassed < 29030400) {
      return (Math.floor(timePassed / 2419200) + " months");
    } else {
      return (Math.floor(timePassed / 29030400) + " years");
    }
  }
