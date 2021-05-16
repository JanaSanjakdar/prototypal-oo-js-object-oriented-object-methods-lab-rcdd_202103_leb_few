function BoardMember (name, homestate, training){
  this.name = name
  this.homestate = homestate
  this.training = training
} 

BoardMember.prototype.veto = function() {
  console.log(`No, I must disagree`);
};

BoardMember.prototype.approve =function(){
  console.log('')
}