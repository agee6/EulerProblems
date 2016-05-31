
require 'byebug'
def findFiveThousand(numberOfFactors)
  count = 1
  triangleNumber = 0
  factors = 0;
  while(factors <= numberOfFactors)
    triangleNumber = triangleNumber + count
    factors = countFactors(triangleNumber)

    if(factors > numberOfFactors)
      return triangleNumber
    end
    count += 1
  end


end

def countFactors(number)
  count = 0
  step = 1
  while(step * step <= number)
    if(number % step == 0)
      count += 2
    end
    step += 1
  end
  count
end

a = findFiveThousand(500)
b = Math.sqrt(a)

p a
p b
