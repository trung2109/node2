const array = [
	{
		name: "Ha",
		gender: 'female',
		point: 8
	},
	{
		name: "Huy",
		gender: 'male',
		point: 9
	},
	{
		name: "Hung",
		gender: 'male',
		point: 7
	},
	{
		name: "Phuong",
		gender: 'female',
		point: 6
	},
	{
		name: "Huyen",
		gender: 'female',
		point: 10
	},
	{
		name: "Long",
		gender: 'male',
		point: 5
	},
	{
		name: "Luan",
		gender: 'male',
		point: 10
	},
	{
		name: "Linh",
		gender: 'female',
		point: 8
	}

    ];
    let malePoint = 0;
    let femalePoint = 0;
    let male = 0;
    let female = 0;
    for (const human of array){
        if (human.gender === "male"){
            malePoint = malePoint + human.point;
            male ++;
        } else {
            femalePoint = femalePoint + human.point;
            female++;
        }
    };
    console.log(malePoint/male);
    console.log(femalePoint/female);