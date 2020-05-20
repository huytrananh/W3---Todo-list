const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ]
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  console.log("MILESTONE 2:")
  console.log("Print out an array of the inventors whose name starts with 'A'.")
  let result1 = inventors.filter(name => name.startsWith('A'))
  console.log(result1)
  
  console.log("=======================================================================")
  console.log("Print out an array of the inventors whose name contains 'n'.")
  let result2 = inventors.filter(name => name.includes('n'))
  console.log(result2)
  
  console.log("=======================================================================")
  console.log("Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).")
  let result3 = inventors.filter(name => {
    for(let i = 0; i < name.length; i++){
      if(name[i] == name[i+1]){
        return true
      }
    }
  })
  console.log(result3)
  console.log("=======================================================================")
  console.log("Print out an array of the numbers which are odd.")
  let oddNum = numbers.filter(num => num % 2 == 1)
  console.log(oddNum)
  
  console.log("=======================================================================")
  console.log("Print out an array of the numbers that have two digits.")
  let twoDigitLetter = numbers.filter(num => num.toString().length > 1)
  // let twoDigitLetter = numbers.filter(num => (num/10 != 0 && (num/10 > 1 && num/10<9)))
  console.log(twoDigitLetter)
  
  console.log("=======================================================================")
  console.log("Print out an array of the numbers which are prime.")
  let newPrime = numbers.filter(num => {
    for(let i = 2; i < num; i++){
      if(num % i == 0) return false
    }
    return num > 1
  })
  console.log(newPrime)
  console.log("=======================================================================")
  
  console.log("MILESTONE 3:")
  console.log("Print out the first name of each inventor.")
  let firstName = inventors.map(name => {
    let newArr = name.split(" ")
    return newArr
  })
  // let firstName = inventors.map(name =>{
  //  for (i=0; i< name.length; i++){
  //    if (name[i] === " "){
  //     return name.slice(0,i);
  //     }
  //   }
  // })
  console.log(firstName)
  
  console.log("=======================================================================")
  console.log("Print out the length of every inventor's full name.")
  let lengthFullName = inventors.map(name => {
    return name.length - name.split("").filter(a => a === " ").length
  })
  console.log(lengthFullName)
  
  console.log("=======================================================================")
  console.log("Print out all the inventors' names in uppercase.")
  let upperCaseName = inventors.map(name => name.toUpperCase())
  console.log(upperCaseName)
  
  console.log("=======================================================================")
  console.log("Print out initials of all inventors(e.g. A.E., I.N., ...)")
  let initialName = inventors.map(name => {
    let nameArr = name.split(" ")
    return nameArr[0][0] + "." + nameArr[1][0]
  })
  console.log(initialName)
  // let initials =[];
  // name8 = inventors.map((item) => {
  //     let eachName = item.split(' ')
  //     return eachName.reduce((total,name)=>{
  //         console.log("what is total",total)
  //         console.log("what is name",name)
  //         return total += name.charAt(0)},'')
  
  
  console.log("=======================================================================")
  console.log("Print out an array of every number multiplied by 100.")
  let mulArr = numbers.map(num => num * 100)
  console.log(mulArr)
  
  console.log("=======================================================================")
  
  console.log("MILESTONE 4:")
  console.log("Sort all the inventors by length of name, shortest name first.")
  let shortestName = inventors.sort ((a, b) => {return a.length - b.length})
  console.log (shortestName)
  
  console.log("=======================================================================")
  console.log("Sort all the inventors by length of name, longest name first. Do not use the reverse method.")
  let longestName = inventors.sort ((a, b) => {return b.length - a.length})
  console.log (longestName)
  
  console.log("=======================================================================")
  
  console.log("MILESTONE 5:")
  console.log("Find the sum of all the numbers.")
  let sumAllNum = numbers.reduce((a,b) => {
    return a + b
  })
  console.log("Sum of all the numbers is: ",sumAllNum)
  
  console.log("=======================================================================")
  console.log("Find the sum of all the even numbers.")
  let sumEvenNum = numbers.reduce((total,num) => { return total + (num%2 === 0 ? num:0)})
  
  
  
  
  
  // const inventors = [
  //   "Albert Einstein",
  //   "Issac Newton",
  //   "Galileo Galilei",
  //   "Marie Curie",
  //   "Johannes Kepler",
  //   "Nicolaus Copernicus",
  //   "Max Planck",
  //   "Katherine Blodgett",
  //   "Ada Lovelace",
  //   "Sarah E. Goode",
  //   "Lise Meitner",
  //   "Hanna Hammarstrom"
  // ];
  // const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  
  // // // Print out an array of the inventors whose name starts with 'A'.
  // // let arr1 = inventors.filter(x => x.startsWith('A'));
  
  // // // Print out an array of the inventors whose name contains 'n'.
  // // let arr2 = inventors.filter(x => x.includes('n'));
  
  // // // Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
  // // let arr3 = inventors.filter((x,i) => {
  // //   let count = 0;
  // //   while(count != x.length){
  // //     if(x[count]==x[count+1]) return true;
  // //     count++;
  // //   }
  // // })
  
  // // Print out an array of the numbers which are odd.
  
  // // let arr4 = numbers.filter(x => x%2==1);
  
  // // // Print out an array of the numbers that have two digits.
  // // let arr5 = numbers.filter(x => (x/10 != 0 && (x/10 > 1 && x/10<9)));
  
  // // // Print out an array of the numbers which are prime.
  // // let arr6 = numbers.filter(function(x){
  // //   let count = x;
  // //   while(count!=1){
  // //     if(x%count==0&&count!=1&&count!=x)
  // //       return false;
  // //     count--;
  // //   }
  // //   return true;
  // // })
  
  
  
  // // --------------MAP------------
  // // Print out the first name of each inventor.
  // let arr7 = inventors.map(x=>x[0])
  
  // // Print out the length of every inventor's full name.
  // let arr8 = inventors.map(x => x.length);
  
  // // Print out all the inventors' names in uppercase.
  // let arr9 = inventors.map(x => x.toUpperCase())
  
  
  // // Print out initials of all inventors(e.g. A.E., I.N., ...)
  // let arr10 = inventors.map(x => {
  //     let newArr = x.split(" ");
  //     return newArr.reduce((total,item)=>{
  //       return total += item.charAt(0);
  //     },'')
  
  // })
  
  // console.log(arr10);
  
  // // Print out an array of every number multiplied by 100.
  
  // let arr11 = numbers.map(x => x*100);
  
  
  // // --------------SORT------------
  // // Sort all the inventors in alphabetical order, A-Z.
  
  // let arr12 = inventors.sort(function(a,b){
  //   let nameA=a.toLowerCase();
  //   let nameB=b.toLowerCase();
  //  if (nameA < nameB) 
  //   return -1;
  //  if (nameA > nameB)
  //   return 1;
  //  return 0;
  // })
  
  // // Sort all the inventors in reverse alphabetical order, Z-A
  
  // let arr13 = inventors.sort(function(a,b){
  //   let nameA=a.toLowerCase();
  //   let nameB=b.toLowerCase();
  //  if (nameA < nameB) 
  //   return 1;
  //  if (nameA > nameB)
  //   return -1;
  //  return 0;
  // })
  
  // // Sort all the inventors by length of name, shortest name first.
  
  // let arr14 = inventors.sort((a,b)=> a.length - b.length);
  
  // console.log(arr14)
  
  // // Sort all the inventors by length of name, longest name first.
  // let arr15 = inventors.sort((a,b)=> b.length - a.length);
  
  
  // // ---------REDUCE----------
  // // // Find the sum of all the numbers.
  // let arr16 = numbers.reduce((acc,current)=> acc+= current);
  
  // // // Find the sum of all event numbers.
  // let arr17 = numbers.reduce((acc,current)=> acc+= (current%2==0?current:0),0);
  
  // // // Create a string that has the first name of every inventor.
  // let arr18 = inventors.reduce((total,name)=>{
  //   let firstName = name.split(' ')[0];
  //   return total += firstName + ' | ';
  // },'');
  // console.log(arr18)
  
  // // ----------SOME/EVERY----------
  // // // Does any inventor have the letter 'y' in their name?
  // let arr19 = inventors.some(x=> x.includes('y'))
  
  
  // // // Does every inventor have the letter 'e' in their name?
  
  // let arr20 = inventors.every(x=> x.includes('e'))
  
  
  // // // Does every inventor have first name that's longer than 4 characters?
  
  // let arr21 = inventors.every(x=> x.split(' ')[0].length > 4)
  // console.log(arr21)
  
  
  // // ------------FIND-----------
  // // // Find the inventor that has a middle name.
  // let arr22 = inventors.find(function(value,index){
  //   return value.split(" ").length == 3;
  // })
  
  
  // // BONUS
  // // inventors.splice(inventors.findIndex(inventor =>{return (inventor.split(" ").length == 3)}),1);
  
  //Divisible by 7
  // let newArr = numbers.find(x=>{return x%7==0;})
  // console.log(newArr);
  
  // // BONUS
  // // numbers.splice(numbers.findIndex(number =>{return (number%7==0)}),1);
  
  // // console.log(numbers)
  
  
  // // ------------Rocket------------
  // function fib(num){
  //   let arr = [0,1];
  //   let index = 1;
  //   while(arr.length!=num+1){
  //     arr.push(arr[index]+arr[index-1]);
  //     index++;
  //   }
  //   return arr.pop();
  // }
  
  // // console.log(fib(14))
  
  