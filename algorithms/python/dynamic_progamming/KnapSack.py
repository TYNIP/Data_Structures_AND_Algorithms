"""
KNAPSACK Problem
"""
""" RECURSIVE 
O(2^N)
"""
def recursive_knapsack(weight_cap, weights, values, i):
  if weight_cap == 0 or i == 0:
    return 0
  elif weights[i - 1] > weight_cap:
    return recursive_knapsack(weight_cap, weights, values, i - 1)
  else:
    include_item = values[i - 1] + recursive_knapsack(weight_cap - weights[i - 1], weights, values, i - 1);

    exclude_item = recursive_knapsack(weight_cap, weights, values, i - 1);

    return max(include_item, exclude_item)
  
""" DYNAMIC VERSION 
Set up 2D array approach
The rows represent the items we have seen
The columns represent how much weight the knapsack can hold.
Every element in the zeroth row represents a subproblem with 0 items, no value. 
"""
def dynamic_knapsack(weight_cap, weights, values):
  rows = len(weights) + 1
  cols = weight_cap + 1
  matrix = [ [] for x in range(rows) ]
  for index in range(rows):
    matrix[index] = [ -1 for y in range(cols) ]
    for weight in range(cols):
      if index == 0 or weight == 0:
        matrix[index][weight] = 0
      elif weights[index - 1] <= weight:
        include_item = values[index - 1] + matrix[index - 1][weight - weights[index - 1]]
        exclude_item = matrix[index - 1][weight]
        matrix[index][weight] = max(include_item, exclude_item)
      else:
        matrix[index][weight] = matrix[index - 1][weight]
  return matrix[rows-1][weight_cap]

weight_cap = 50
weights = [31, 10, 20, 19, 4, 3, 6]
values = [70, 20, 39, 37, 7, 5, 10]
print(recursive_knapsack(weight_cap, weights, values, len(weights)))
print(dynamic_knapsack(weight_cap, weights, values))

