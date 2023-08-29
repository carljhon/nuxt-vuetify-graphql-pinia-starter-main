export const getSelectedYears = () => {
    const getSelectedYear = (data:any, listOfYears:any) => {
        for(let i in data.value?.launches){
            let getDate = data.value.launches[i].launch_date_utc // get date in utc format
            let convertDate = new Date(getDate).toLocaleDateString() // convert date to mm/dd/yy
    
            let getDateByYear = convertDate.slice(-4) // get year only
    
            // prevent duplication
            if(listOfYears.indexOf(getDateByYear) === -1){
                listOfYears.push(getDateByYear)
            }
        }

        return listOfYears
    }
    return {
        getSelectedYear
    }
}