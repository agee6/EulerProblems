class Fixnum
  def in_words
    word_to_return = '';

    if(self > 100000)
      word_to_return += "trillion";
    end

    "127, 345"
    if(self > 1000 )
      num = self/ 1000;
      thousands_place = 127.in_words
      thousands_place += " thousand"
    end


    if(self == 1)
      "one";
    elsif(self == 2)
      "two"
    if(self == 2)
      'two'
    end



   elsif(self == 20)
      "twenty";
    elseif(self == 30)
      return 'thirty'

  if(self < 100 && self >= 20)
    ones = self % 10
    tens = self - ones
    return (tens.in_words +" " +  ones.in_words)

  end

  if(self < 1000)
    hundreds = self/100
    tens = self % 100
    return (hundreds.in_words + " hundred" +tens.in_words )
  end

    22.in_words = 20.in_words + 2.in_words
  end

  32.in_decimal
  32.in_binary
  32.in_hexadecimal
end

arr = [1,2,4,5]

sumArgs(*arr)

class xmlDocument
  def hello
    returns "<hello/>"
  end
end
xml = xmlDocument.new()
xml.banana
<banana/>
xml.hello({name: 'austen', color: "blue"})
arg = {name: 'austen', color: "blue"}
arg.keys #= ['name']
output = "<#{m}"
arg.each do |key, val|
  output += " #{key}='#{val}'"
end

"first line \n second line"


[{name: "dolly"}]


'<hello name="austen" color="blue'
def eat_soup(vegatable)
  to_add = vegatable || "tomatoe"
