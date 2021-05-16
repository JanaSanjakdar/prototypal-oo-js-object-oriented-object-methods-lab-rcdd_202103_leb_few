function BoardMember (name, homestate, training){
  this.name = name
  this.homestate = homestate
  this.training = training
} 

BoardMember.prototype.veto = function() {
  console.log(`Hello everybody, my name is ${this.name}`);
};