

def pythagoreanTriple

  3.upto(332) do |i|
    (i+1).upto(498) do |j|

      if((i + j + Math.sqrt((i*i)+(j*j)))==1000)
        p i
        p j
        p Math.sqrt((i*i)+(j*j))
        return(i*j* Math.sqrt((i*i)+(j*j)))

      end
    end
  end
end

pythagoreanTriple
