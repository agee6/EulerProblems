

def triple_double(num1, num2){
    #return triple if there is a number with a triple


}

def num_repeats(string)

  repeatedLetters = {}
  count = 0
  i = 0
  while(i< string.length)
    j = i
    while(j< string.length)
      if(i != j && string[i] == string[j] && repeatedLetters[string[i]] != true)
        count +=1
        repeatedLetters[string[i]] = true
      end
      j++
    end
    i++
  end

  count
end

ordinal = ((ordinal - a.ord) % 26) + a.ord

def merged(arr1, arr2)

  finalArr = []

  i = 0;
  j = 0;
  while(i < arr1.length || j < arr2.length)
    if(arr1[0] < arr2[0])
      finalArr.push(arr1.shift())
      i += 1
    else
      finalArr.push(arr2.shift())
      j +=
    end
  end
  finalArr
end
