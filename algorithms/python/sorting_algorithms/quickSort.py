from random import randrange, shuffle

""" IN PLACE IMPLEMENTATION """
def quicksort(list, start, end):
  if start >= end:
    return
  print("Running quicksort on {0}".format(list[start: end + 1]))
  pivot_idx = randrange(start, end + 1)
  pivot_element = list[pivot_idx]
  print("Selected pivot {0}".format(pivot_element))
  list[end], list[pivot_idx] = list[pivot_idx], list[end]

  less_than_pointer = start
  
  for i in range(start, end):
    if list[i] < pivot_element:
      print("Swapping {0} with {1}".format(list[i], list[less_than_pointer]))
      list[i], list[less_than_pointer] = list[less_than_pointer], list[i]
      less_than_pointer += 1

  list[end], list[less_than_pointer] = list[less_than_pointer], list[end]
  print("{0} successfully partitioned".format(list[start: end + 1]))

  quicksort(list, start, less_than_pointer - 1)
  quicksort(list, less_than_pointer + 1, end)

""" LISTS IMPLEMENTATION """
def qs(arr):
  if len(arr) <= 1:
    return arr

  smaller = []
  larger = []
  
  pivot = 0
  pivot_element = arr[pivot]
  
  for i in range(1, len(arr)):
    if arr[i] > pivot_element:
      larger.append(arr[i])
    else:
      smaller.append(arr[i])

  sorted_smaller = qs(smaller)
  sorted_larger = qs(larger)

  return sorted_smaller + [pivot_element] + sorted_larger

  
list = [5,3,1,7,4,6,2,8]
shuffle(list)
print("PRE SORT: ", list)
print(quicksort(list, 0, len(list) -1))
print("POST SORT: ", list)
