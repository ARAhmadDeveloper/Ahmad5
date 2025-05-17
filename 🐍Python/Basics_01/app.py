# print("Helllo1")
# print("Helllo 2")
# print("Helllo 3")
# print("Helllo 4")
# print("Helllo 5")



# def App(n):
#     print("Hello", n)
    
# # end def

# App("World")



# age = int(input("Write your Age: "))

# if age <= 12 and age > 0:
#     print("Child")
# elif age > 12 and age < 19:
#     print("Teenager")
# elif age >= 19 and age < 59:
#     print("Adults")
# elif age >= 60:
#     print("Seniors")
# else:
#     print("Write Positive Numbers or above zero")




# numbers = [1,2,3,-5,-7,4,5,-6]
# count_positive = 0

# for x in numbers:
#     if x > 0:
#         count_positive += 1
# print(count_positive, "Positive")



# input_str = "python"
# reversed_str = ""

# for char in input_str:
#     reversed_str = char + reversed_str

# print(reversed_str)





# First Non-repeated Character
# lp = [2,3,4,5,2,3,6]

# for x in lp:
#     print(x)
#     if lp.count(x) == 1:
#         print("char is : \n", x)
#         break




# while True:
#     num = int(input("Please Enter B/w 1 and 10: "))
#     if num >= 1 and num <= 10:
#         print("Good Your number is: ", num)
#         break



# num = int(input("Please Enter Number: "))
# is_prime = True

# if num > 1:
#     for i in range(2, num):
#         if (num % i) == 0:
#             is_prime = False
# print(is_prime)




# items = ["apple", "orange", "banana", "apple", "mango"]

# for unique in items:
#     print(unique)
    # items == unique
    # break







# import time

# wait_time = 1
# retries = 5
# attempts = 0

# while attempts < retries:
#     print("Attempts: ", attempts + 1, "-wait Time: ", wait_time)
#     time.sleep(wait_time)
#     wait_time *= 2
#     attempts += 1










# 6
# >>> random.choice(li)
# 4
# >>> random.choice(li)
# 6
# >>> random.choice(li)
# 1
# >>> random.choice(li)
# 4
# >>> x = [1,2,3]
# >>> y = x
# >>> x
# [1, 2, 3]
# >>> y
# [1, 2, 3]
# >>> x = 22
# >>> x
# 22
# >>> y
# [1, 2, 3]
# >>> y
# [1, 2, 3]
# >>> x
# 22
# >>> x
# 22
# >>> x = [1,2,3]
# >>> y = x
# >>> xx
# Traceback (most recent call last):
#   File "<python-input-43>", line 1, in <module>
#     xx
# NameError: name 'xx' is not defined
# >>> x
# [1, 2, 3]
# >>> y
# [1, 2, 3]
# >>> x[0] = 22
# >>> x
# [22, 2, 3]
# >>> y
# [22, 2, 3]
# >>> import sys
# >>> sys.getrefcount(2)
# 4294967295
# >>> sys.getrefcount("43df")
# 3
# >>> sys.getrefcount("dfdsf")
# 3
# >>> sys.getrefcount("dfdsf")
# 3
# >>> sys.getrefcount("432434234")
# 3
# >>> sys.getrefcount(432434234)
# 3
# >>> sys.getrefcount(1)
# 4294967295
# >>> sys.getrefcount(0)
# 4294967295
# # >>>
# >>> dict = {1,2,3}
# >>> set = {1,3,4}
# >>> dict & set
# {1, 3}
# >>> dict | set
# {1, 2, 3, 4}
# >>> dict - set
# {2} 
# >>> name = ["hello" , "Python", "app"]
# >>> print("".join(name))
# helloPythonapp
# >>> print(" ".join(name))
# hello Python app
# >>> print("`".join(name))
# hello`Python`app
# >>> print(", ".join(name))
# hello, Python, app
# >>> print(" " "  ".join(name))
# hello   Python   app
# >>> print("_".join(name))
# hello_Python_app
# >>> 
# TypeError: unsupported operand type(s) for ** or pow(): 'list' and 'int'
# >>> ab = [l ** 2 for l in range(12)]
# >>> ab
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]
# >>> ab = [l ** 3 for l in range(26)]
# >>> ab
# [0, 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625]
# >>>




# i = 0

# while i < 10:
#     print(i)
#     i += 1


# def fun():
#     i = int(input("Please Enter Number: "))
#     print(i ** 2)
    
# fun()


# cube = lambda x: x ** 3

# print("Cube is: ", cube(4))




# def doubleArg(**kwargs):
#    for key, value in kwargs.items():
#     print(key, value)
    
# doubleArg(name = "Hello", age = "world \n \n\n\n\n")
# doubleArg(name = "Hello", age = "world", rollNo= 56)

# end def







# def generateLimit(limit):
#     for i in range(2, limit + 1, 2):
#         yield i
    
# # end def
# # print(generateLimit(20))
# for num in generateLimit(10):
#     print(num)





# class Car:
#     def __init__(self, brand, model):
#         self.brand = brand
#         self.model = model
#     def full_name(self):
#         return f"{self.brand} {self.model}"
        

# class InheritClass(Car):
#     def __init__(self,brand, model , batterySize):
#         super().__init__(brand, model)
#         self.batterySize = batterySize
#     # end def


# myObject = Car("Toyota", 2023)
# print(myObject.brand)

# inputFormObject = Car(input("Please Brand Name: "), input("Please Enter Model Number: "))
# print(inputFormObject.brand)
# print(inputFormObject.model)
# print(inputFormObject.full_name())

# InheritClassObject = InheritClass("Please",inputFormObject.brand, inputFormObject.model)
# print(InheritClassObject.brand)
# print(InheritClassObject.model)
# print(InheritClassObject.batterySize)








# Inheritence
# class Car:
#      def __init__(self, name, age):
#         self.name = name
#         self.age = age
        
#      def FullName(self):
#         return f"{self.name} {self.age}"
#     # end def
#     # end def

# class CarsShop(Car):
#     def __init__(self, name, age, rollNo):
#         super().__init__(name, age)
#         self.rollNo = rollNo
#     # end def



# carObject = Car("Ahmad", 354)
# print(carObject.name)
# print(carObject.age)
# print("Get Full Name",carObject.FullName())


# carObjectShop = CarsShop("Ali", 23, 32)
# print("Inherite Object", carObjectShop.name)
# print("Inherite Object", carObjectShop.age)
# print("Inherite Object", carObjectShop.rollNo)
# print("Inherite Object FullName", carObjectShop.FullName())








# Encapsulation
# class Car:
#      def __init__(self, name, age):
#         self.__name = name
#         self.age = age

#      def getName(self):
#          return self.__name + "  Hello"
#      # end def

#      def setName(self, new_name):
#         self.__name = new_name
#      # end def
        
#      def FullName(self):
#         return f"{self.__name} {self.age}"
#     # end def
#     # end def

# class CarsShop(Car):
#     def __init__(self, name, age, rollNo):
#         super().__init__(name, age)
#         self.rollNo = rollNo
#     # end def



# carObject = Car("Ahmad", 354)
# # print(carObject.__name)
# print(carObject.getName())
# print(carObject.age)
# print("Get Full Name",carObject.FullName())


# carObjectShop = CarsShop("Ali", 23, 32)
# print("Inherite Object", carObjectShop.__name)
# print("Inherite Object", carObjectShop.getName())
# print("Inherite Object", carObjectShop.age)
# print("Inherite Object", carObjectShop.rollNo)
# print("Inherite Object FullName", carObjectShop.FullName())

# carObjectShop.setName("New Name  =------------")

# print(carObjectShop.getName())









# Polymorphism
# class Car:
#      def __init__(self, name, age):
#         self.__name = name
#         self.age = age

#      def getName(self):
#          return self.__name + "  Hello"
#      # end def

#      def setName(self, new_name):
#         self.__name = new_name
#      # end def

#      def polymorphismMethod(self):
#          return "First Object Polymorphism"

#      # end def
        
#      def FullName(self):
#         return f"{self.__name} {self.age}"
#     # end def
#     # end def

# class CarsShop(Car):
#     def __init__(self, name, age, rollNo):
#         super().__init__(name, age)
#         self.rollNo = rollNo
#     # end def

#     def polymorphismMethod(self):
#          return "Second Object Polymorphism"



# firstObject = Car("Usman", 23)
# # print(firstObject.getName())
# print(firstObject.polymorphismMethod())

# secondObject = CarsShop("sfdsdf", 435, 432)
# # print(secondObject.getName())
# print(secondObject.polymorphismMethod())










# Class Variables
# class Car:
#      totalObjectsCreates = 0

#      def __init__(self, name, age):
#         self.__name = name
#         self.age = age
#         Car.totalObjectsCreates += 1

#      def getName(self):
#          return self.__name + "  Hello"
#      # end def

#      def setName(self, new_name):
#         self.__name = new_name
#      # end def

#      def polymorphismMethod(self):
#          return "First Object Polymorphism"

#      # end def
        
#      def FullName(self):
#         return f"{self.__name} {self.age}"
#     # end def
#     # end def

# class CarsShop(Car):
#     totalObjectsCreates = 0
#     def __init__(self, name, age, rollNo):
#         super().__init__(name, age)
#         self.rollNo = rollNo
#         CarsShop.totalObjectsCreates += 1
#     # end def

#     def polymorphismMethod(self):
#          return "Second Object Polymorphism"



# firstObject = Car("Usman", 23)
# # print(firstObject.getName())
# print(firstObject.polymorphismMethod())

# secondObject = CarsShop("sfdsdf", 435, 432)
# # print(secondObject.getName())
# print(secondObject.polymorphismMethod())

# First2Object = Car("Hamza", 234)

# print(Car.totalObjectsCreates)
# print(CarsShop.totalObjectsCreates)









# Static Method
# class Car:
#     def __init__(self, name, age):
#         self.__name = name
#         self.age = age

#     def FullName(self):
#         return f"{self.__name} {self.age}"
#     # end def

#     @staticmethod
#     def staticMethod():
#         return "Static Method"
#     # end def

# firstObject = Car("Usman", 23)
# print(firstObject.FullName())
# print(Car.staticMethod())














# Property Decorator
# class Car:
#     def __init__(self, name, age):
#         self.__name = name
#         self.age = age

#     # @property
#     def get_name(self):
#         return self.__name
#     # end def

#     def name(self):
#         return self.age
#     # end def


#     def set_name(self, new_name):
#         self.__name = new_name
#     # end def

# firstObject = Car("Usman", 23)
# # print(firstObject.get_name())
# firstObject.set_name = "New Name"
# # print(firstObject.get_name())
# print(firstObject.age)

















# Class Inheritance and isinstance() Function

# class Car:
#      def __init__(self, name, age):
#         self.__name = name
#         self.age = age

#      def getName(self):
#          return self.__name + "  Hello"
#      # end def

#      def setName(self, new_name):
#         self.__name = new_name
#      # end def

#      def polymorphismMethod(self):
#          return "First Object Polymorphism"

#      # end def
        
#      def FullName(self):
#         return f"{self.__name} {self.age}"
#     # end def
#     # end def

# class CarsShop(Car):
#     def __init__(self, name, age, rollNo):
#         super().__init__(name, age)
#         self.rollNo = rollNo
#     # end def

#     def polymorphismMethod(self):
#          return "Second Object Polymorphism"

# secondObject = CarsShop("sfdsdf", 435, 432)
# # print(secondObject.getName())
# print(secondObject.polymorphismMethod())

# print(isinstance(secondObject, Car))
# print(isinstance(secondObject, CarsShop))
    













# Multiple Inheritence

# class A:
#     def AInfo(self):
#         return "Hello"
        
#     # end def

# class B:
#     def BInfo(self):
#         return "Hello B"

# class AB(A, B):
#     pass


# ABObject = AB()

# print(ABObject.AInfo())
# print(ABObject.BInfo())

















# Decorators
# Timing Function Execution
# import time

# def wrapper(fn):
#     def actual(*args, **kwargs):
#         start = time.time()
#         result = fn(*args, **kwargs)
#         end = time.time()
#         print(f"{fn.__name__} ran in {end-start}")
#         return result
#     return actual
#     # end def
# # end def

# @wrapper
# def checkTime(n):
#     return time.sleep(n)


# checkTime(2)

# @wrapper
# def againCheck(a):
#     return time.sleep(a)
    
# # end def

# againCheck(3)










# Debugging Function Calls
# import time

# def wrapper(fn):
#     def actual(*args, **kwargs):
#         start = time.time()
#         result = fn(*args, **kwargs)
#         end = time.time()
#         print(f"{fn.__name__} ran in {end-start}")
#         return result
#     return actual
#     # end def
# # end def

# @wrapper
# def checkTime(n):
#     return time.sleep(n)


# checkTime(2)

# @wrapper
# def againCheck(a):
#     return time.sleep(a)
    
# # end def

# againCheck(3)



