const Campground=require('../models/campground')
const Review=require('../models/review')
module.exports.createReview=async(req,res) => {
    const campground=await Campground.findById(req.params.id);
    const rev=new Review(req.body.review);
    rev.author=req.user._id
    campground.reviews.push(rev);
    await rev.save();
    await campground.save();
    req.flash('success','Created new review!');
    res.redirect(`/campgrounds/${campground._id}`)
}
module.exports.deleteReview=async(req,res) => {
    const{id,reviewId}=req.params
    await Campground.findByIdAndUpdate(req.params.id,{$pull:{reviews:req.params.reviewId}});
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash('success','Successfully deleted review!')
    res.redirect(`/campgrounds/${req.params.id}`)
    
}
