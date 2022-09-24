/* eslint-disable no-unused-vars */
const { SPANISH_DICTIONARY, SHOE_LIST } = require('./constants.js');

const newSneakers = (sneakers) => {
  // insert code
  return("New sneakers " + sneakers + " dropping soon!")
};

const isThatMichaelJordan = (name) => {
  /*This ignores CaSiNg issues :)*/ 
  let jordan = "michael jordan"
  if(jordan === name.toLowerCase()){
    return(true)
  }
  else{
  return(false)
}
  /*Better way of doing this is just returning the following
  return(jordan === name.toLowerCase())
  */
};

const areYouM = (name) => {
  
  if(name.charAt(0) === "m" || name.charAt(0) === "M"){
    return(true)
  }
  else{
    return(false)
  }
};

const mostViewsThreeSneakers = (sneakerOneViews, sneakerTwoViews, sneakerThreeViews) => {
  let arr = [];
  arr.push(sneakerOneViews);
  arr.push(sneakerTwoViews);
  arr.push(sneakerThreeViews);
  return(Math.max(arr));

};

const mostViews = (sneakerViews) => {
  // insert code
};

const validateEmail = (email) => {
  // insert code
};

const validateEmailWithError = (email) => {
  // insert code
};

const getInitials = (name) => {
  // insert code
};

const howRepetitiveAreYou = (str, word) => {
  // insert code
};

const spanishToEnglish = (spanish) => {
  const dictionary = SPANISH_DICTIONARY;
  // insert code
};

const getNames = (shoeList = SHOE_LIST) => {
  // insert code
};

const getUniqueSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

const getMostViewedSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

module.exports = {
  newSneakers,
  isThatMichaelJordan,
  areYouM,
  mostViewsThreeSneakers,
  mostViews,
  validateEmail,
  validateEmailWithError,
  getInitials,
  howRepetitiveAreYou,
  spanishToEnglish,
  getNames,
  getUniqueSneakers,
  getMostViewedSneakers,
};
