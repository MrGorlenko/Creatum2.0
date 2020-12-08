# functions 

# y = f(x)
# f(x) = x + 2
# x = 1 ; f(1) = 3
# x = 4 ; f(4) = 6    


# f(x) = x - 6
# x = 8; f(8) = 2 

# f(x) = x^2  
# x = 3; f(3) = 9 
# x = 4; f(4) = 16 

# snachala k 4islu nado dobavit' 5, potom razdelit' na 8 i potom vzyat' kvadratniy koren'

# print(((5+5)/8)**(0.5))
def func(x):
    y = x*x
    return y


i = 0
while i < 10:
    print(func(i))
    i += 1
