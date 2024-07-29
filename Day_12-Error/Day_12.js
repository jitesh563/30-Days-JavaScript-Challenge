function task1 (){
    try {
        throw Error("This is error")
    } catch (error) {
        console.log(error)
    }
}
task1()

function devideNumber (a,b){
    try {
        if(b==0){
            throw Error("Denomenator is zero")
        }
        else{
            console.log(a/b);
        }
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("This is finnaly block")       // Activity 2 - finally block
    }
}

devideNumber(6,0)

// Step 1: Define the Custom Error Class
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
      this.date = new Date();
    }
  }

  // Step 2: Function that throws the Custom Error
  function riskyFunction() {
    // Simulate some condition that causes an error
    const condition = true;
    if (condition) {
      throw new CustomError('Something went wrong in riskyFunction!');
    }
  }

  // Step 3: Handle the Custom Error Using Try-Catch
  try {
    riskyFunction();
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(`Custom Error Caught: ${error.name} - ${error.message}`);
      console.log(`Error Occurred at: ${error.date}`);
    } else {
      console.log(`An unexpected error occurred: ${error.message}`);
    }
  }



  function task3 (a){
    try {
        if(a.length==0){
            throw Error(`String is zero`)
        }
        else{
            console.log(a);
        }
    } catch (error) {
        console.log(error)
    }
    
}

task3("")

// Activity 4

async function Activity4 (){
new Promise(async (resolve, reject) => {
  let num = await Math.random()
  try{
    if(num > 0.4){
     await resolve(console.log(num))
    }else{
     throw Error(`${num} is less than 0.4`)
    }

  }catch(error){
    console.log(error)
  }
  
})
}
Activity4();

// Activity 5

async function fetchApi (){
  let api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  try {
    if(!api.ok){
      throw await new Error('Network response was not ok');
    }
    const data = await api.json()
    console.log(data)
  }
  catch(error){
    console.log(error)
  }
}

fetchApi();