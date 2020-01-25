let customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
    { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
    { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
   ];

const list = document.querySelector('#customers')


const render = ()=> {
    let html = customers.mep(customer = ()=>{
        return 
        `<li class= `${customer.isVIP ? 'vip': ''}`>
            ${customers.name}
        </li>`
    }).join('')
    list.innerHTML= html
}
      
})

