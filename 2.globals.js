// GLOBALS

// __dirname  -- path to current directory
// __filename -- file name
// require    -- function to use modules (CommonJS)
// module     -- info about current module (file)
// process    -- info about env where the program is being executed

console.log(__filename)
setInterval(()=>{
  console.log("hello World!")
},1000)