const players = [
    {
    name: "Eric Haaland",
    age: 22,
    team: {
    name: "Manchester City",
    country: "England"
    }
    },
    {
    name: "Kylian Mbappé",
    age: 24,
    team: {
    name: "PSG",
    country: "France"
    }
    },
    {
    name: "Gavi",
    age: 18,
    team: {
    name: "Barcelona",
    country: "Spain"
    }
    },
    {
    name: "Pedri",
    age: 20,
    team: {
    name: "Barcelona",
    country: "Spain"
    }
    },
    {
    name: "Vinicous Junior",
    age: 22,
    team: {
    name: "Real Madrid",
    country: "Spain"
    }
    }
    ] 

    // 1.
    players.slice(3);
    console.log(players);

    // 2.
    const descAges = players.age.sort((a,b)=>{
        if(a>b){
            return -1;
        }
        {
            return 1;
        }
    })
    console.log(descAges);

    // 3.
   function  allName(cb){
    cb();
   }
   allName(players);

    // 4.
    players.unshift({
        name:"Jamal Musiala",
        age:20,
        team:{
        name:"Bayern Munich",
        country:"Germany"
        }
    })
    console.log(players);

    // 5.
    players.shift();
    console.log(players);
    
    // 6.
    const filteredAges = players.filter((age)=>{
        return age > 20;
    })
    console.log(filteredAges);


    // 7.
    const newPlayer = players.name.some((name)=>{
        return team.name == "Chelsea";
    })
    console.log(newPlayer);

    
    // 8.
    const filteredAges2 = players.filter(function(age){
        return age < 20;
    })
    console.log(filteredAges2);


    console.log(players.name);
    

    // 9.
    const playersBarcelona = players.team.name.filter((name)=>{
        return name == "Barcelona";
    })
    console.log(playersBarcelona);

    // 10.
    const accAges = players.reduce((acc,currentValue)=>{
        console.log(acc);
        console.log(currentValue);
        return acc + currentValue;
    })
    console.log(accAges);