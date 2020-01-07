// SYNTAX
println("Hello World!")


//
//VARIABLE AND CONSTANTS
//
var sampleVariable = 1     // This is how you define a new variable
let sampleConstant = "Constant" // This is how you define a new constant

var sampleInteger: Int = 3  // Defining a variable with an explicit type
let sampleString: String = "Another Constant"

// Including values/expressions inside strings ("The sum is: 4")
let sumString = "The sum is: \(sampleVariable + sampleInteger)"

var sampleList = ["item1", "item2", "item3"]      // Defining an array
var sampleDict = ["key1" : "value1", "key2" : "value2"] // Defining a dictionary

sampleList[1] = "Updated Item"  // Setting the value of an element
println(sampleDict["key2"]( // Reading the value of an element


//
// CONDITIONS AND LOOPS
//
// This is how you define an optional
var optionalString: String? = "Temp"  

// This is a simple condition
if (sampleInteger > 4)      
{       
   println("true")
}
else
{
   // Using 'if' and 'let' together allows you to check for values that might be missing
   if let nonOptionalString = optionalString
   {
      println("The string's value is: \(nonOptionalString)")
   }
   else
   {
      // If we made it here, it means that the optionalString's value was nil
   }
}

// This is how you use a switch statement
switch sampleString   
{
   // Switch statements aren't limited to just integers
   case "Constant":
      sampleInteger = 10    

   // No need to add 'break' statements. Only matching ones will be executed
   case "Another Constant", "Some Constant":
      sampleInteger = 11 

   // Switch statements support a variety of comparison operations  
   case let x where x.hasPrefix("Constant"):
      sampleInteger = 12 

   // The switch must cover all cases, so a default case should be used 
   default:
      sampleInteger = 13  
}

// A simple for loop
for (var i = 0; i < 6; i++)
{
   println("This is round #\(i)")
}

// A simple loop on a dictionary
for (key, value) in sampleDict  
{
   println("The value for \(key) is \(value)")
}

// A simple loop on an array
for item in sampleList    
{
   println("The current item is \(item)")
}


//
// FUNCTIONS
//
// This is how you define a function (the return value type is defined after the ->)
func sampleFunction(param1: Int, param2: String) -> String
{
    if (param1 == 0)
    {
        return param2
    }
    else
    {
        return "Not Zero"
    }
}

// A function can return multiple values by using tuples
func getChipmunksNames() -> (String, String, String)
{
   return ("Simon", "Alvin", "Theodore")
}

// You can access a specific member of the tuple using . followed by the index
println("The eldest chipmunk is: \(getChipmunksNames().0)")

// A function can take a variable number of arguments, as an array
func sum(numbers: Int...) -> Int 
{
   var sum = 0
   for curNum in numbers
   {
      sum += curNum
   }
   return sum
}

// You can call the function with any amount of elements for the numbers argument
println("The sum of no numbers is: \(sum())")
println("The sum of three numbers is: \(sum(1,2,3))")
println("The sum of six numbers is: \(sum(1,4,7,2,9,124))")

// Functions can be nested (you can define a function inside another function)
func writeStory(firstWord: String) -> String
{
   var curStory = "Once there was a \(firstWord)"

   // Inner functions can access the variables from the outer function
   func continueStory()
   {
      curStory += " and they lived happily ever after"
   }

   continueStory()
   return curStory
}



//
// OBJECTS AND CLASSES
//
// This is how you define a class
class Animal
{
   // Properties are declared like variables, but only exist within the class' context
   var name = "Unknown Species"
   var sound = "Silence"

   // This is a basic initializer 
   init(name: String, sound: String)
   {
      self.name = name
      self.sound = sound
   }

   func makeSound() -> String
   {
      return sound
   }
}

// And this is how you instantiate a class and access its properties
var animal = Animal(name: "Dog", sound: "Bark")
animal.name = "Stray Dog"
println("A \(animal.name) make a \(animal.makeSound()) sound")

// This is how you define a subclass
class Dog : Animal
{
   var breed = "Unknown"  
   let crySound: String = "Cry"

   // Properties can also have getters and setters
   var isCrying: Bool
   {
      get
      {
         // Notice that you can compare strings' content using ==
         return sound == crySound
      }
      set
      {
         // The value received for the property is accessed using 'newValue'
         if newValue == true
         {
            sound = crySound
         }
      }
   }

   init(breed: String)
   {
      self.breed = breed
      super.init("Dog", "Bark")
   }

   func goFetch()
   {
      println("Fetch!")
   }

   // Use 'override' for methods that are also defined in the superclass
   override func makeSound() -> String
   {
      return "Bark"
   }
}




// 
// ENUMERATIONS
//
// This is how you define an enum
enum CardShape: Int
{
   // We defined the raw value for the enum as Int, so specifying the first is enough
   case Hearts = 1
   case Clubs, Spades, Diamonds 

   // Enums can have methods associated with them
   func description() -> String
   {
      switch self
      {
         case .Hearts:
            return "Hearts"

         case .Clubs:
            return "Clubs"

         case .Spades:
            return "Spades"

         case .Diamonds:
            return "Diamonds"

         default:
            return "Undefined"
      }
   } 

   func isRed() -> Bool
   {
      case .Hearts, .Diamonds:
         return true

      default:
         return false
   }
}

// Getting the raw value for an enum value (in this case, 3)
// Raw value types can also be strings or floating point values
var heartShapeRawValue = CardShape.Spades.toRaw()

var heartShape = CardShape.fromRaw(heartShapeRawValue)
println("One of the card shapes is \(heartShape.description())")
