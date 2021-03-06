# COMMANDS (Terminal)
python
# opens python environment

exit()
# exit python environment

python myscript.py
# invoke python script


# COMMENTS
# This is a comment

"""This is a comment"""

"""
This
is a multi-line
comment
"""

# VARIABLES AND STRINGS
msg = ('Hello World!)
print(msg)


# TYPE CONVERSION
str()
int()
float()
range()


# LISTS (Array)
Declaration
bikes = ['trek', 'redline', 'giant']
first_bike = bikes[0]
last_bike = bikes[-1]

# Create a numerical list
squares = []
for x in range(1, 11):
    squares.append(x**2)

# Slicing a list
finishers = ['sam', 'bob', 'ada', 'bea']
first_two = finishers[:2]

# Copying a list
copy_of_bikes = bikes[:]


# LIST LOOPING
for bike in bikes:
    print(bike)


# DICTIONARIES (Objects)
alien = {'color': 'green', 'points': 5}
print("The alien's color is " + alien['color'])

# Add a new key-value pair
alien['x_position'] = 0


# Looping through all key-value pairs
fav_numbers = {'eric': 17, 'ever': 4}
for name, number in fav_numbers.items():
	print(name + ' loves ' + str(number))
	
# Looping through all keys
for name in fav_numbers.keys():
    print(name + ' loves a number')

# Looping through all values
for number in fav_numbers.values():
    print(str(number) + ' is a favorite')



# CONDITIONALS
equals
x == 42

not equal
x != 42

greater than or equal to
x > 42
x >= 42

less than or equal to 
x < 42
x <= 42


# BOOLEANS
game_active = True
can_edit = False


# Conditional Tests
'trek' in bikes
'surly' not in bikes


# IF STATEMENTS
if age < 4:
    ticket_price = 0
elif age < 18:
    ticket_price = 10
else:
    ticket_price = 15


# WHILE LOOP
current_value = 1
while current_value <= 5:
    print(current_value)
    current_value += 1


# USER INPUT

# Prompting for a value
name = input("What's your name? ")
print("Hello, " + name + "!")
# Prompting for a numerical input
name = input("What's your name? ")
print("Hello, " + name + "!")

pi = input("What's the value of pi? ")
pi = float(pi)
