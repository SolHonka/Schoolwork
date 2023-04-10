
List = [1,2,5,2,3,2]

List2 = []

for i in List:
    if i not in List2:
        List2.append(i)

for i in List2:
    print(i)