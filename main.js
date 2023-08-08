//Login form

const submitBtn = document.getElementById('submitbtn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const labelDate = document.getElementById('date');
const loggedUser = document.getElementById('logged-user');
const loginContainer = document.querySelector('login-container')
const navContainer = document.querySelector('nav')
const accountBtn = document.getElementById('account')
const accountContainer = document.getElementById('account-info')
const transactionBtn = document.getElementById('transaction')
const accountDetails = document.getElementById('account-details')
const transactionContainer = document.getElementById('transaction-container')
const tbodyContainer = document.getElementById('tbody')

const firstNameInput = document.getElementById('firstname_input')
const lastnameInput = document.getElementById('lastname_input')
const usernameInput = document.getElementById('username_input')
const accountnoInput = document.getElementById('accountno_input')
const opendateInput = document.getElementById('opendate_input')
const custumeridInput = document.getElementById('custumerid_input')
const accounttypeInput = document.getElementById('accounttype_input')
const statusInput = document.getElementById('status_input')
const ifscInput = document.getElementById('ifsc_input')
const dobInput = document.getElementById('dob_input')
const passwordInput = document.getElementById('password_input')
const phonenoInput = document.getElementById('phoneno_input')
const totalBalance = document.getElementById('totalbalance')
const labelTimer    = document.getElementById('labelTimer')
const timerContainer = document.getElementById('timer')


const user1= {
    userId:1,
    firstname:'Emma',
    lastname:'Willams',
    username:"Emma",
    accountNumber:1678336952990,
    openDate:1678336952990,
    customerId:882243,
    accountType:'Savings',
    status:'Active',
    ifsc:'BLUE000042',
    dob:2000-09-22,
    password:'password456',
    phoneNumber:'9997773056',
    transaction:[{
        serialNo:1,
        dateTime:'2023-03-01 10:00:00',
        description :'Initial Deposit',
        debit :0,
        credit :5000,
        balance :5000
    },
    {   
        serialNo:2,
        dateTime: "2023-03-03 14:30:00",
        description: "Grocery Shopping",
        debit: 1000,
        credit:0,
        balance: 4000
    },
    
    {
        serialNo:3,    
        dateTime: "2023-03-05 12:15:00",
        description: "Salary Credit",
        debit:0,
        credit: 10000,
        balance: 14000
        }
    

    ]

}
const user2 = {
    userId:2,
    firstname:'Lima',
    lastname:'John',
    username:"Lima",
    accountNumber:1678896952990,
    openDate:1678896952990,
    customerId:882243,
    accountType:'Savings',
    status:'Active',
    ifsc:'BLUE000089',
    dob:2001-10-28,
    password:'password123',
    phoneNumber:'9897773056',
    transaction:[{
        serialNo:1,
        dateTime:'2023-03-01 10:00:00',
        description :'Initial Deposit',
        debit :0,
        credit:5000,
        balance:5000
    },
    {
        serialNo:2,
        dateTime: "2023-03-03 14:30:00",
        description: "Shopping",
        debit:2000,
        credit:0,
        balance: 2000
        },
        {
        serialNo:3,
        dateTime: "2023-03-05 12:15:00",
        description: "Salary Credit",
        debit: 0,
        credit:20000,
        balance:23000
        }
    ]
}

const users = [user1, user2]
// console.log(users)
let currentUser;
const startLogoutTimer = function () {

    const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);

        labelTimer.textContent = `${min}:${sec}`;

        time--

        if (time === 0) {
            clearInterval(timer)
            accountContainer.style.opacity= 0;
            timerContainer.style.opacity =0;
            accountDetails.style.opacity =0;
            username.value = password.value =""
            accountDetails.style.display ='none'; 
            navContainer.style.opacity = 0;

        }

    }
    let time = 120;
    tick()
    const timer = setInterval(tick, 1000)
}

submitBtn.addEventListener('click',function(e)
{
    
    const currentUser = users.find(e =>e.username === username.value)
    // console.log(currentUser.userId)
    e.preventDefault();
    if(username.value === currentUser.username && password.value === currentUser.password)
    {
        startLogoutTimer()
        navContainer.style.opacity=100;
        
        timerContainer.style.opacity=100;
        loggedUser.textContent = `Welcome ${username.value}`
        const dateNow = new Date();
        const options = {
            hour: 'numeric',
            minutes: 'numeric',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
        labelDate.textContent = new Intl.DateTimeFormat(currentUser.local,options).format(dateNow);
        const currentUserId = currentUser.userId



        
        //Total Balance
        var credit = 0;
        var debit = 0;
        var serialNo = 0;
        var dateTime = 0;
        var des = 0;
        for(i = 0; i < currentUser.transaction.length;i++ )
        {
         credit += (currentUser.transaction[i].credit)
       
         debit += (currentUser.transaction[i].debit)
        }
        const lastbalance = (credit - debit) 
        console.log(lastbalance)
        
          
        // currentUser.transaction.forEach((a.length-1) =>
        for(let a = currentUser.transaction.length-1; a >= 0 ; a--)
        {
            // console.log(a.serialNo)
        //    credit = a.credit
        //    debit = a.debit
        serialNo = currentUser.transaction[a].serialNo
        dateTime = currentUser.transaction[a].dateTime
        des = currentUser.transaction[a].description
        credit = currentUser.transaction[a].credit
        debit = currentUser.transaction[a].debit


        const type = credit != 0 ? 'Deposit' : 'Withdrawal';
    
      
        var html =  `
        <td><span id="SerialNo_input">${serialNo}</span></td>
        <td><span id="datetime_input">${dateTime}</span></td>
        <td><span id="debit_input">${credit+debit}</span></td>
        <td>
            <span id="credit_input">${type}</span>
        </td>
        <td><span id="des_input">${des}</span></td>
        `
        tbodyContainer.insertAdjacentHTML("afterbegin",html)
    }

       
      
       
           
        accountBtn.addEventListener('click',function()
        {
            // e.preventDefault()
            // console.log(currentUser.firstname)
            accountContainer.style.opacity= 100;
            accountDetails.style.opacity = 100;
            username.value = password.value =""
            accountDetails.style.display ='block'; 
            
            


            firstNameInput.textContent = currentUser.firstname;
            lastnameInput.textContent = currentUser.lastname;
            usernameInput.textContent = currentUser.username;
            accountnoInput.textContent = currentUser.accountNumber;
            opendateInput.textContent = currentUser.openDate;
            custumeridInput.textContent = currentUser.customerId;
            accounttypeInput.textContent = currentUser.accountType;
            statusInput.textContent = currentUser.status;
            ifscInput.textContent = currentUser.ifsc;
            dobInput.textContent = currentUser.dob;
            password.textContent = currentUser.password;
            phonenoInput.textContent =currentUser.phoneNumber;
            passwordInput.textContent = currentUser.password;
        })
        transactionBtn.addEventListener('click',function(){
            
            accountContainer.style.opacity= 100; 
            
            accountDetails.style.display ='none'; 
              
            totalBalance.textContent = lastbalance
            username.value = password.value =""

            

        
        })
       
    //    console.log(lastbalace);
    //    const lastBalnce = currentUser.transaction[currentUser.transaction.length - 1]
       totalBalance.textContent = lastbalance
    }else{
        alert('Invalid username and password')
    }
})


