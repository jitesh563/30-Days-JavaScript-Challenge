let promise = new Promise((resolve, reject) => {
    setTimeout( ()=>{
        resolve (console.log("Hii i am resolve promise"))
    }, 2000)
})


let promise1 = new Promise((resolve, reject) => {
    setTimeout( ()=>{
        reject(new Error("Error!"));
    }, 2000)
}).catch( (e)=> console.log(e))

let FetchData = new Promise(async (resolve, reject) => {     
    let fetchApi = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let convert = await fetchApi.json()
    await console.log(convert);
})


let promise2 = new Promise( async(resolve, reject) => {
    await resolve (console.log("I am resolve message "))
}) 

async function handleError () {
try {
    await new Promise((resolve, reject) => {
        reject(new Error("try wala error!"))
    })
} catch (error) {
    console.log(error)
}

}

handleError()


let FetchApi2 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
});

FetchApi2.then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});


async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Call the fetchData function
  fetchData();


const newpromise1 = Promise.resolve(3);
const newpromise2 = Promise.resolve(42);
const newpromise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([newpromise1, newpromise2, newpromise3]).then((values) => {
  console.log(values);
}).catch((error) => {
    console.error(error);
});


const promise8 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'race - one');
  });
  
  const promise9 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'race - two');
  });
  
  Promise.race([promise8, promise9]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });