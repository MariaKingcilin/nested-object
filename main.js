const person={
	first_name:"Mariya",
	last_name:"Kingcilin",
	phone:"9344117798",
	email:"mariakingcilin@gmail.com",
	address:{
		street:{
			street_num:"2/53",
			street_name:"North Street"
		},
		city:"Tenkasi",
		country:"India"
	}
};
for(king in person)
{
	if(person[king] instanceof Object==false)
	{
		console.log(`${king}:${person[king]}`);
	}
	else if(person[king] instanceof Object)
	{
		for(king2 in person[king])
		{
			if(person[king][king2] instanceof Object==false)
			{
				console.log(`${king2}:${person[king][king2]}`);
			}
			else
			{
				for(king3 in person[king][king2])
				{
					console.log(`${king3}:${person[king][king2][king3]}`);
				}
			}
		}
	}
}