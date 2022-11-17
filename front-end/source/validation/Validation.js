class Validation {
    checkEmpty (data) {
        // console.log('check empty' , data) ; 
        for (const key in data) {
            if(key === 'sale') {
                if (data[key] === '0') return false ; 
            }
            if(data[key].trim() === '') return false ;
        }
        return true ; 
    }
}
export const validation = new Validation() ; 