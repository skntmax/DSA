print("hello world")

# variables 
name = "Shashi"
age = 25
is_active = True

print(name , age , is_active)


# String
name = "Python"

# Number
x = 10
price = 99.99

# Boolean
is_logged_in = False

# None
value = None



print(type(name))

# Type Conversion, string to integer 
x = "10"
y = int(x)
print(y + 5)  # 15


# Operators & Conditions

a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)


# Comparison Operators

print(10 > 5)
print(10 == 10)
print(10 != 5)



# if / elif / else
age = 18 

if(age>=18):
    print("adult")
elif (age==17):
    price("almost adult")
else:
    price("Minor")    
    
# Loops

for i in range(199):
    print(i)
    
    
for i in range(1, 6):
    print(i)    
    
    
    
print("=====while loop======")
# while loop 
count=1

while(count<10):
     print(count)
     count=count+1
     
print("=====while loop======")
#  break statement 
print("=====break statement======")
c=1
while(c<10):
    if(c==6):
        break
    print(c)
    c=c+1
    
print("=====break statement======")
    
    
print("=====array ======")
# List (like JS Array)
numbers = [1, 2, 3, 4]

numbers.append(5)
numbers.remove(2)

print(numbers)
for n in numbers:
    print(n)
    
print("=====array ======")

    

print("========immutable list , tuple")
coords = (10, 20)
print(coords[0])
print("========immutable list , tuple")



# Set (Unique values)
nums = {1, 2, 2, 3}
print(nums)  # {1,2,3}



# Dictionary (Object in JS)

users = {
    "name":"shashi kant",
    "age":22,
    "active": True
}

print(users )


#  loop in disctionary 
for key , value in users.items():
    print(key  , value)



# ftns 
def  greet(name):
    return "hello fname"


def power(x, y=2):
    return x ** y

print(power(3))


# *args & **kwargs

def total(*nums):
    total_sum = 0
    for i  in nums:
        total_sum = total_sum+i
    return { "total":sum(nums) , "total2":total_sum} 

print(total(1, 2, 3))


def user_info(**data):
    print(data)

user_info(name="Shashi", age=25)