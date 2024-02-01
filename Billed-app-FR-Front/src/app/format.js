export const formatDateForDisplay = (dateStr) => { // dateStr = "2021-01-01"  // dateStr = null


  const checkDate = () => { // dateStr = "2021-01-01"  // dateStr = null
    
    if (dateStr !== null) { // dateStr = "2021-01-01"
      
      return new Date(dateStr)
    } 
      return new Date('1970-01-01') // dateStr = null
  }

  const date = checkDate()
    .toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  
  const splittedDate = date.split(' ')
  const da = splittedDate[0].padStart(2, '0')
  const mo = splittedDate[1]
  const ye = splittedDate[2].padStart(4, '0')

  const month = mo.charAt(0).toUpperCase() + mo.slice(1)  
  
  return `${da} ${month} ${ye}`
}

export const formatDateToSort = (dateStr) => {
  const date = new Date(dateStr)
  const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(date)
  const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
  const digitalizedDate = Number(`${ye}${mo}${da}`)

  return digitalizedDate
}


 
export const formatStatus = (status) => {
  switch (status) {
    case "pending":
      return "En attente"
    case "accepted":
      return "Accepté"
    case "refused":
      return "Refused"
  }
}