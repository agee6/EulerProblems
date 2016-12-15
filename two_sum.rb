

def n_sum(arr, target, n)
  output  = []
  if(n == 2)
    return two_sum(arr,target)
  end
  i = 0
  while i < arr.length
    new_target = target - arr[i]
    if(new_target > 0)
      return true if n_sum(arr.slice(0, i) + arr.slice(i+1, arr.length), new_target, n-1)
    end
    i += 1
  end
  false
end

def two_sum(arr, target)


end
