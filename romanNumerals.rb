

def roman_numerals(num)
  roman = ""
  while(num >= 900)
    if( num >= 1000)
      roman += "M"
      num -= 1000
    else
      roman += "CM"
      num -= 900
    end
  end
  while(num >= 400)
    if(num >= 500)
      roman += "D"
      num -= 500
    else
      roman += "CD"
      num -= 400
    end
  end
  while(num >= 100)
    roman += "C"
    num -= 100
  end
  while(num >= 90)
    roman += "XC"
    num -= 90
  end
  while(num >= 50)
    roman += "L"
    num -= 50
  end
  while(num >= 10)
    roman += "X"
    num -= 10
  end
  while(num >= 9)
    roman += "IX"
    num -= 9
  end
  while(num >= 5)
    roman += "V"
    num -=5
  end
  while(num >= 4)
    roman += "IV"
    num -= 4
  end
  while(num >= 1)
    roman += "I"
    num -= 1
  end
  roman

end

p roman_numerals(45) + ": 45"
p roman_numerals(95) + ": 95"
p roman_numerals(1888)+ ": 1888"
