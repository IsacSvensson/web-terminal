const Commands = {
    is_valid: (key) => {
        return Commands.hasOwnProperty(key);
    },    
    help: () => {return [
        "add    Returns sum of arbitrary number of arguments.\n\tUsage: 'add 1 2 3 4'\n\tReturns: '10'",
        "help   Display avalible commands", 
        "quit   Close window",
        " ",
        ]
      },
    quit: () => {
        window.close()
    },
    add: (args) => {
        console.log(args)

        if (args.length < 3){
            return `Error: Too few arguments`
        }

        var sum = 0;

        for (let i = 1; i < args.length; i++) 
        {
            if (isNaN(Number(args[i])))
                return `Error: Argument ${i}, '${args[i]}' is not a number`
            sum += Number(args[i]);
        }
        return sum
    }
  };



export default Commands