 export class Quiz  {

constructor(qategury , difficulty , numberOfQuestions ) {

  this.qategury = qategury; 


  this.difficulty = difficulty; 


  this.numberOfQuestions = numberOfQuestions;

  this.score = 0 


}


 
async gatAllQuestions() {

  let response = await fetch(
    `https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.qategury}&difficulty=${this.difficulty}`
  );


  let finalResponse = await response.json();

  console.log(finalResponse.results);
  

    return finalResponse.results
  

}


}


