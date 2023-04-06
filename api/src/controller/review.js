const { createReview, updateReview, deleteReview } = require('../service/review')

exports.addReview = async (req, res) => {

  const review = req.body

  try {
    
    if (!review.reviewer_name  || !review.summary || !review.review || ! review.rating) {
      console.log('error')
      return res.status(406).json({message: "All fields are required for a review."})
    }

    const result = await createReview(review)
    return res.json({message: "Review successfully submitted."})

    res.json(result)

  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}

exports.updateReview = async (req, res) => {   

  const review = req.body
  
  try {

    if (!review.reviewer_name  || !review.summary || !review.review || ! review.rating) {
      console.log('error')
      return res.status(406).json({message: "All fields are required for a review."})
    }

    
    const update = await updateReview(review)
    return res.json({message: "Review was updated."})

  } catch (error) {
    console.log(error)
  }
}

exports.deleteReview = async (req, res) => {   
  
  try {
    const update = await deleteReview(req.params.id)
    return res.json({message: "Review was deleted."})

  } catch (error) {
    console.log(error)
  }
}