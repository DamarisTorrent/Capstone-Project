const { createReview } = require('../service/review')

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