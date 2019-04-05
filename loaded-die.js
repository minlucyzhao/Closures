  function makeLoadedDie() { 
    //outer function runs once: only in first rollLoadedDie() call
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var count = 0;

    return function() {
      return list[count++];
    }
  }
  
  //After rollLoadedDie() is called once, makeLoadedDie() = function() {return list[count++];}
  var rollLoadedDie = makeLoadedDie(); 
  
  console.log(rollLoadedDie());  // 5 
  console.log(rollLoadedDie());  // 4 
  console.log(rollLoadedDie());  // 6

