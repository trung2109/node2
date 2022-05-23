const hanoi = ["29","30","31","32","33","40"];
    const checkhanoi = (bshanoi) => {
        for(const value of hanoi){
            if (bshanoi.startsWith(value)){
                return true;
            }
        }
        return false;
    }
    const bs = ["29P1-124123", "30L9-63568", "17B3-09813", "33H2-21231"];
    const bshanoi = [];
    for(const value of bs){
        if(checkhanoi(value)){
            bshanoi.push(value);
        }
    }
    console.log(bshanoi);