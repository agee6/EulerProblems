function primeSum(n, k) {

    if(k === 1){
        if(isPrime(n)){
            return true;
        } else{
            return false;
        }
    }
    var sum = 0;
    var kidx = 0;
    var positions = [];
    var possiblePrimes = primesBelowN(n);

    while(kidx < k){
        positions.push(0);
        kidx ++;

    }

    var startIdx = positions.length - 2;
    var finalIdx = startIdx + 1;
    while(positions[0] < possiblePrimes.length){
            sum = 0;
        for(var i = 0; i < positions.length; i++){
            sum += possiblePrimes[positions[i]];
        }
  
        if(sum === n){
            return true;
        }
        if(positions[finalIdx] < possiblePrimes.length - 1){
             positions[finalIdx] ++;
        }else{
            if(startIdx < finalIdx - 1){
               finalIdx--;
                positions[finalIdx]++;
            }else{
                if(positions[startIdx] < possiblePrimes.length - 1){
                   positions[startIdx]++;
                    while(finalIdx < positions.length){
                        positions[finalIdx] = positions[startIdx];
                        finalIdx++;
                    }
                    finalIdx--;
                }else {
                    startIdx--;
                    finalIdx--;
                    positions[startIdx]++;

                    while(finalIdx < positions.length){
                        positions[finalIdx] = positions[startIdx];
                        finalIdx++;
                    }
                    finalIdx--;
                }
            }
        }



    }

  return false;


}

function isPrime(num){

    if(num < 2){
        return false;
    }
    var idx = 2;
    while(idx < num){
        if(num % idx === 0){
            return false;
        }
        idx ++;
    }
    return true;
}

function primesBelowN(num){

    if(num < 3){
        return [];
    }
    var primes = [2];
    var idx = 3;
    while(idx < num){

        if(isPrime(idx)){
            primes.push(idx);
        }
        idx += 2;
    }
    return primes;
}
