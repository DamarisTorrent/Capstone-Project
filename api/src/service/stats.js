const knex = require('../knex')

exports.showStatsByUsername = async (username) => {
  
  const resultData = {}

  const userId = (await knex
    .distinct()
    .from('user')
    .pluck('user_id')
    .where ('username', username))[0]
  
  //Select game_id from game where user.user_id = game.user_id
  const games = await knex('game').select('game_id', 'gameMode', 'score', 'duration', 'timeStamp').where('user_id', userId)

  //Loop through returned game_id array and Select from response where response.game_id = game.game_id and
  let totalResponses = 0
  let correctResponses = 0
  let easyQuestions = 0
  let mediumQuestions = 0
  let hardQuestions = 0
  let correctCategory = []

  const result = await Promise.all(games.map(async (game)=> {
    //get response where game_id = game_id
    
      game.responses = await knex('response').select('question_id', 'isCorrect').where('game_id', game.game_id)
      
      //Count the total number of responses in all games
      game.responses = await Promise.all(game.responses.map(async (response, index)=> {
        console.log(response)
        totalResponses = totalResponses + 1
        if (response.isCorrect) {
          correctResponses = correctResponses + 1
        }
        //get difficulty and category from question where question_id = response.question_id
        response.question = await knex('question').select('category', 'difficulty').where('question_id', response.question_id).first()
        console.log('response.question', response.question.category)
        
        if (response.isCorrect) {
          correctCategory.push(response.question.category)
        }
 
        //Count up the amount of questions in each difficulty category
        switch(response.question.difficulty) {
          case 'Easy':
            easyQuestions = easyQuestions + 1
            break
          case 'Medium':
            mediumQuestions = mediumQuestions + 1
            break
          case 'Hard':
            hardQuestions = hardQuestions + 1
            break
          default:
        }
        return response
      }))
      return game
  }))
  

  //Number of games played
  resultData.gamesPlayed = result.length

  //Percentage of correct answers
  resultData.correctAnswerPct = (correctResponses / totalResponses) * 100

  //Get the largest of the difficulty amounts
  const largest = Math.max(easyQuestions, mediumQuestions, hardQuestions)

  if (largest === easyQuestions) {
    resultData.favoriteDifficulty = 'Easy'
  }
  else if (largest === mediumQuestions){
    resultData.favoriteDifficulty = 'Medium'
  }
  else if (largest === hardQuestions){
    resultData.favoriteDifficulty = 'Hard'
  }

//Loop through the correctCategory array and find out which category occurs the most
  let freq = 0
  let res = ""

    for(let i=0; i<correctCategory.length; i++){
    let count = 0
    for(let j=i+1; j<correctCategory.length; j++){
        if(JSON.stringify(correctCategory[j]) === JSON.stringify(correctCategory[i])){
            count++
        }
    }
    if(count>=freq){
        res = correctCategory[i]
        freq = count
    }
   
    resultData.bestCategory = res
}
 
return resultData

  //isCorrect = true
  //correctAnswerPct = count of responses and multiply by .isCorrect 

  // const games = [
  //   {
  //     game_id,
  //     gameMode, 
  //     score,
  //     duration,
  //     timeStamp,
  //     responses: [
  //       {
  //         isCorrect,
  //         question:{
  //           difficulty,
  //           category
  //         }
  //       }
  //     ]
  //   }
  // ]
  
}

