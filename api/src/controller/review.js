const { createReview, updateReview } = require('../service/review')

exports.addReview = async (req, res) => {

  const review = req.body

  try {
    
    if (!review.reviewer_name  || !review.summary || !review.review || ! review.rating) {
      console.log('error')
      return res.status(406).json({message: "All fields are required for a review."})
    }

    const result = await createReview(review)
    
    res.json(result)

  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}

exports.updateReview = async (req, res) => {   

  console.log('in the flag controller', req.params.id)
  try {
    const update = await updateReview(req.params.id)
    return res.json({message: "Review was flagged."})

  } catch (error) {
    console.log(error)
  }
}