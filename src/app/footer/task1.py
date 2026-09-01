d = 7
c = 7
count = 0
total = 0
product = 1
even = 0
odd = 0
for i in range(d, 32):
    print(i, end=" ")
    count += 1
    total += i
    product *= i

    if i % 2 == 0:
        even += 1
    else:
        odd += 1

print()
average = total / count
print("Кількість:", count)
print("Сума:", total)
print("Добуток:", product)
print(f"Середнє арифметичне: {average:.2f}")
print("Парних:", even)
print("Непарних:", odd)



