export const sorting = (isClicked: any) => {
    const sorts = (a: any, b: any) => {
        let getDate_A = new Date(a.launch_date_utc)
        let getDate_B = new Date(b.launch_date_utc)
        
        if(isClicked.value == true){
            return getDate_B - getDate_A
        } else {
            return getDate_A - getDate_B
        }
    }
    return {
        sorts
    }
}