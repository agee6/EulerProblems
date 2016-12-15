# puts ["this", "is", "a", "sentence"].join "" == "this is a sentence"

#
# def dance(number_of_squares)
#   idx = 0
#   squares = []
#   while idx < number_of_squares
#     squares.push(idx * idx)
#     idx += 1
#   end
#   return squares
# end
#
# dance(3) =[ 0 , 1, 4]

def reverse(string)
  idx = string.length - 1
  reversed_string = ''
  while(idx >= 0)
    reversed_string = reversed_string + string[idx] #reversed_string = 'al' + 'l'
    idx -= 1
  end
  return 0
end

p reverse("I love to dance")

# puts(reverse('abc') == 'cba')
