
 function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >42){
       return pickupLocation - 42 
    }
    else (pickupLocation < 42);{
       return 42 -pickupLocation
    }
    
  }
  function distanceFromHqInFeet(pickupLocation){
       return distanceFromHqInBlocks(pickupLocation)*264
    
    }

  
  
  function distanceTravelledInFeet(start, end) {
    if(start > end) {
        return (start - end) * 264;
    }
    return (end-start) * 264;
}
   function calculatesFarePrice(distance){
      if (distance <= 400) {
         
         return 0; }
        else if (distance <= 2000) {
         // For distance between 400 and 2000 feet, it's 2 cents per foot
         return (distance - 400) * 0.02;
       } else if (distance < 2500) {
         
         return 25;}
         
         if (distance > 2500) {
           return "cannot travel that far";
         }
      }
         
         
         
   
  