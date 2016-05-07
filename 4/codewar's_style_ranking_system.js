/*
http://www.codewars.com/kata/codewars-style-ranking-system/javascript
*/

var User = function(){
    this.rank = -8;
    this.progress = 0;
}
var calPoints = function(curr_rank,rank){
  	    var d;
  	    
  	    if(rank > 0) rank--;
  	    if(curr_rank > 0) curr_rank--;
        	
        d = rank - curr_rank;
    
        if(d > 0){
            return 10*d*d;
        }
        else if(d === 0){
            return 3;
        } 
        else if(d === -1){
            return 1;
        }
        else{
            return 0;
        }
    }
    
User.prototype.incProgress = function(rank){
	
    if(rank > 8 || rank < -8 || rank === 0){
        throw Error();	
    }
    else{

        this.progress += calPoints(this.rank,rank);
        
        var inc = Math.floor(this.progress/100);
    
        if(this.rank < 0 && Math.abs(this.rank) <= inc){
            this.rank += inc + 1;
        }
        else {
            this.rank += inc;
        }
    
        if(this.rank >= 8){
            this.rank = 8;
            this.progress = 0;
        }
        else{
            this.progress = this.progress%100;
        }
    }
}
