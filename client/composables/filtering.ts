export const filtering = (selected: any) => {
    const filters = (i: any) => {
        let getDate = new Date(i.launch_date_utc).toLocaleDateString() // convert date to mm/dd/yy
        let getDateByYear = getDate.slice(-4) // get year only

        return getDateByYear.match(selected.value) // match the selected year to all launches list
    }
    return {
        filters
    }
}