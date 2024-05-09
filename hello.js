function argvFunc(init = process.argv[2]){

    if(init === 'kala'){
        return 'you are black'
    }
    else{
        return `${init} = white?`
    }
    // comment
}

console.log(argvFunc());