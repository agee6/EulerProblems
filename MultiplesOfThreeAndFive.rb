
def sumOfMultiples(num)
  multiples = []
  sum = 0
  i = 3
  while i < num
    if i % 3 == 0 || i % 5 == 0
      sum += i
    end
    i +=1
  end
  sum
end

p sumOfMultiples(1000)
