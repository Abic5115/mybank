// -------------------------SIGNUP PAGE------------------------------------

let signuplink = document.getElementById("h8");
let signuplink2 = document.getElementById("h10");
let signuplink3 = document.getElementById("h12");
let loginlink = document.getElementById("h9");
let loginlink2 = document.getElementById("h11");
let loginlink3 = document.getElementById("h13");
let homepg = document.getElementById("main");
let loginpg = document.getElementById("main2");
let signuppg = document.getElementById("main1");
let loginbutton1 = document.getElementById("loginbutton1");
let homelink = document.getElementById("h14")
signuplink.addEventListener("click", () => {
  homepg.style.display = "none";
  loginpg.style.display = "none";
  signuppg.style.display = "block";
});
homelink.addEventListener("click", () => {
  homepg.style.display = "block";
  loginpg.style.display = "none";
  signuppg.style.display = "none";
});


let signupbutton = document.getElementById("signupbutton");
let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");
let message4 = document.getElementById("message4");
signupbutton.addEventListener("click", () => {

  
  let name = document.getElementById("name1").value;
  let nameflag = false;

  if (name === "") {
    message1.innerHTML = "enter a valid name";
    
  } else {
    nameflag = true;
  }

  let mail = document.getElementById("email1").value;
  let mailflag = false;
  
  
  let check = JSON.parse(localStorage.getItem("userdetails")) || [];
  
  // Regular expression for basic email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(mail)) {
      message2.textContent = "Enter a valid email id";
      console.log("Invalid email format");
  } else {
      let emailExists = false;
  
      
      for (let i = 0; i < check.length; i++) {
          if (check[i].email1 === mail) {
              emailExists = true;
              break; 
          }
      }
  
      if (emailExists) {
          message2.textContent = "Email already in use";
          console.log("Email already exists");
      } else {
          console.log("mail:", mail);
          mailflag = true; 
      }
  }
  

  let pass1flag = false;
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
  const number = /[0123456789]/;
  let pass1 = document.getElementById("pass1").value;
  if (pass1.length < 6) {
    message3.textContent = "enter password with minimum 6 characters";
  } else if (!specialCharPattern.test(pass1)) {
    message3.textContent = "enter password with one specialcharacter";
  } else if (!number.test(pass1)) {
    message3.textContent = "enter password with number";
  } else {
    console.log("password:", pass1);
    pass1flag = true;
  }

  let pass2 = document.getElementById("pass2").value;
  let pass2flag = false;
  if (pass2 !== pass1) {
    message4.textContent = "passwords dont match";
  } else {
    pass2flag = true;
   
   
  }

  function generateaccntnumber() {
    return Math.floor(1000 + Math.random() * 90000);
  }
  if (
    nameflag == true &&
    mailflag == true &&
    pass1flag == true &&
    pass2flag == true
  ) {
    // let check = JSON.parse(localStorage.getItem("userdetails")) || [];
    var balance = 0;
    var withdraw = 0;
    const accountnumber = generateaccntnumber();
    let signupdetails = {
      username1: name,
      email1: mail,
      password1: pass1,
      accountnumber1: accountnumber,
      balance1: balance,
      withdraw1: withdraw,
      transaction1 :[{
        amount1 : 0,
        type:"",
        time:  new Date().toLocaleString()

      }]

    };

    check.push(signupdetails);
    localStorage.setItem("userdetails", JSON.stringify(check));
    document.getElementById("name1").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("pass1").value = "";
    document.getElementById("pass2").value = "";
    message1.innerHTML = "";
    message2.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML = "";

    alert("Signup successful!");

    localStorage.removeItem("recentlogin");
    homepg.style.display = "block";
    loginpg.style.display = "none";
    signuppg.style.display = "none";
    localStorage.removeItem("recentlogin");
  } else {
    alert("enter valid details");
  }


  
});

loginlink2.addEventListener("click", () => {
  homepg.style.display = "none";
  loginpg.style.display = "block";
  signuppg.style.display = "none";
});


signuplink2.addEventListener("click", () => {
  homepg.style.display = "none";
  loginpg.style.display = "none";
  signuppg.style.display = "block";
});

loginlink3.addEventListener("click", () => {
  homepg.style.display = "none";
  loginpg.style.display = "block";
  signuppg.style.display = "none";
});

signuplink3.addEventListener("click", () => {
  homepg.style.display = "none";
  loginpg.style.display = "none";
  signuppg.style.display = "block";
});

loginlink.addEventListener("click", () => {
  homepg.style.display = "none";
  loginpg.style.display = "block";
  signuppg.style.display = "none";
});




localStorage.removeItem("recentlogin");
// login------------------------------------------------------------------------------------------

loginbutton1.addEventListener("click", () => {
  let emaillogin = document.getElementById("emaillogin").value;
  let passwordlogin = document.getElementById("passwordlogin").value;
  let storeddata = JSON.parse(localStorage.getItem("userdetails") || "[]");

  let connect = false;
  for (let i = 0; i < storeddata.length; i++) {
    if (
      storeddata[i].email1 === emaillogin &&
      storeddata[i].password1 === passwordlogin
    ) {
      connect = true;
      // let check1 = JSON.parse(localStorage.getItem("recentlogin"))
      let check1 = {
        rmail: storeddata[i].email1,
        rpass: storeddata[i].password1,
        raccnt: storeddata[i].accountnumber1,
      };

      localStorage.setItem("recentlogin", JSON.stringify(check1));
      break;
    }
  }
  if (connect) {
    homepg.style.display = "block";
    loginpg.style.display = "none";
    signuppg.style.display = "none";
    document.getElementById("emaillogin").value = "";
    document.getElementById("passwordlogin").value = "";
  } else {
    alert("not registered");
  }

  // ====================deposit=========================
  loginlink.innerHTML = "logout";
  let h1 = document.getElementById("h1");
  for (i = 0; i < storeddata.length; i++) {
    h1.innerHTML = "account number:" + storeddata[i].accountnumber1;
  }

  let dialog1 = document.getElementById("dialog1");
  let depositbutton = document.getElementById("i6");

  depositbutton.addEventListener("click", () => {
    document.body.id = "blur";

    let boxx1 = document.createElement("div");
    boxx1.id = "x1";
    dialog1.innerHTML = "";
    dialog1.appendChild(boxx1);

    let input1 = document.createElement("input");
    input1.id = "inputamount";
    input1.type = "text";
    input1.placeholder = "enter the amount to be deposited";
    boxx1.appendChild(input1);

    let input2 = document.createElement("input");
    input2.id = "inputpass";
    input2.type = "password";
    input2.placeholder = "enter the password";
    boxx1.appendChild(input2);

    let button1 = document.createElement("button");
    button1.id = "but1";
    button1.innerHTML = "deposit";
    boxx1.appendChild(button1);

    let button2 = document.createElement("button");
    button2.id = "but2";
    button2.innerHTML = "close";
    boxx1.appendChild(button2);

    dialog1.showModal();
    

    button1.addEventListener("click", () => {
      var check1 = JSON.parse(localStorage.getItem("recentlogin")) || [];
      var storeddata = JSON.parse(localStorage.getItem("userdetails") || "[]");

      if (input2.value == check1.rpass) {
        for (let j = 0; j < storeddata.length; j++) {
          if (storeddata[j].email1 == check1.rmail) {
            var depositamount = parseFloat(input1.value);
            storeddata[j].balance1 = parseFloat(storeddata[j].balance1);
            storeddata[j].balance1 += depositamount;
            alert("amount has benn deposited successfully")
            storeddata[j].transaction1.push({
              amount1: depositamount,
              type: "deposit",
              time: new Date() 
          });
            
            localStorage.setItem("userdetails", JSON.stringify(storeddata));
            input1.value = "";
            input2.value = "";
           
      
            
          }
        }
      } else {
        alert("wrong password");
      }
    });

    button2.addEventListener("click", () => {
      dialog1.close();
      document.body.id = "";
    });
  });
  let dialog2 = document.getElementById("dialog2");
  let withdrawbutton = document.getElementById("i12");
  withdrawbutton.addEventListener("click", () => {
    document.body.id = "blur";

    let boxx2 = document.createElement("div");
    boxx2.id = "x2";
    dialog2.innerHTML = "";
    dialog2.appendChild(boxx2);

    let input3 = document.createElement("input");
    input3.id = "withdrawamount";
    input3.type = "text";
    input3.placeholder = "enter the amount to withdraw";
    boxx2.appendChild(input3);

    let input4 = document.createElement("input");
    input4.id = "inputpass1";
    input4.type = "password";
    input4.placeholder = "enter the password";
    boxx2.appendChild(input4);

    let button3 = document.createElement("button");
    button3.id = "but3";
    button3.innerHTML = "withdraw";
    boxx2.appendChild(button3);

    let button4 = document.createElement("button");
    button4.id = "but4";
    button4.innerHTML = "close";
    boxx2.appendChild(button4);

    dialog2.showModal();

    button3.addEventListener("click", () => {
      var check1 = JSON.parse(localStorage.getItem("recentlogin")) || [];
      var storeddata = JSON.parse(localStorage.getItem("userdetails") || "[]");
      if (input4.value == check1.rpass) {
        for (let i = 0; i < storeddata.length; i++) {
          if (storeddata[i].email1 == check1.rmail) {
            var withdrawamount = parseFloat(input3.value);
            storeddata[i].balance1 = parseFloat(storeddata[i].balance1)
            storeddata[i].withdraw1 = parseFloat(storeddata[i].withdraw1)
            storeddata[i].withdraw1 += withdrawamount
            storeddata[i].transaction1.push({
              amount1: withdrawamount,
              type: "withdraw",
              time: new Date()
          });
            if(storeddata[i].balance1 >= withdrawamount){
              alert("amount successfully withdrawn")
              storeddata[i].balance1 = storeddata[i].balance1 - withdrawamount
              localStorage.setItem("userdetails", JSON.stringify(storeddata));
              input3.value = "";
              input4.value = "";
              
              
              
            }
            else{
              alert("insufficient balance")
            }
            
          }}}
          else {
            alert("wrong password");
          }
    });

    button4.addEventListener("click", () => {
      dialog2.close();
      document.body.id = "";
    });
  });

  let dialog3 = document.getElementById("dialog3");
  let accountbutton = document.getElementById("i13");
  accountbutton.addEventListener("click", () => {
    document.body.id = "blur";

    let boxx3 = document.createElement("div");
    boxx3.id = "x3";
    dialog3.innerHTML = "";
    dialog3.appendChild(boxx3);
    let check1 = JSON.parse(localStorage.getItem("recentlogin")) || [];
    var storeddata = JSON.parse(localStorage.getItem("userdetails") || "[]");
    let paragraph1 = document.createElement('p')
    paragraph1.id = 'par1'
    paragraph1.innerHTML = "Account number :" + check1.raccnt
    boxx3.appendChild(paragraph1) 

    let paragraph2 = document.createElement('p')
    paragraph2.id = 'par1'
    paragraph2.innerHTML = "Email :" + check1.rmail
    boxx3.appendChild(paragraph2) 
    
    let paragraph3 = document.createElement('p')
    paragraph3.id = 'par1'
    for(let i= 0 ;i <storeddata.length ;i++)
      if (storeddata[i].email1 === check1.rmail){
    paragraph3.innerHTML = "Balance :" + storeddata[i].balance1
    boxx3.appendChild(paragraph3) 
    }
    let button5 = document.createElement("button");
    button5.id = "but5";
    button5.innerHTML = "Transaction History";
    boxx3.appendChild(button5);

    let button6 = document.createElement("button");
    button6.id = "but6";
    button6.innerHTML = "close";
    boxx3.appendChild(button6);
    button6.addEventListener("click", () => {
      dialog3.close();
      document.body.id = "";
    });


    dialog3.showModal();
    let dialog4 = document.getElementById("dialog4");
    
    button5.addEventListener('click',()=>{
      let boxx4 = document.createElement("div");
      boxx4.id = "x4";
      dialog4.innerHTML = "";
      dialog4.appendChild(boxx4);
      dialog4.showModal();
      let boxx5 = document.createElement('div')
      boxx5.id = 'x5'
      boxx4.appendChild(boxx5);
      let boxx6 = document.createElement('div')
      boxx6.id = 'x6'
      boxx4.appendChild(boxx6)
      let button7 = document.createElement("button");
      button7.id="but7"
      button7.innerHTML = "close";
      boxx6.appendChild(button7);
      
      let check1 =JSON.parse( localStorage.getItem("recentlogin") || []);
      var storeddata = JSON.parse(localStorage.getItem("userdetails") || "[]");
      for (let i = 0; i < storeddata.length; i++) {
        if (storeddata[i].email1 == check1.rmail){
        
          for (let j = 1; j < storeddata[i].transaction1.length; j++) {
            let paragraph4 = document.createElement('p');
            paragraph4.id = "p10";
            paragraph4.innerHTML = "Transaction: " + storeddata[i].transaction1[j].type + 
                       ", Amount: " + storeddata[i].transaction1[j].amount1 + 
                       ", Time: " + storeddata[i].transaction1[j].time;
            boxx5.appendChild(paragraph4);
          }
        }
      }
      button7.addEventListener("click", () => {
        dialog4.close();
        document.body.id = "";
      
  
      })
      dialog4.showModal();
    });
  })
// transfer money --------------------------------------------------------------------   ----------------
      let dialog5 = document.getElementById("dialog5");
  let transferbutton = document.getElementById("i14");
  transferbutton.addEventListener("click", () => {
    document.body.id = "blur";

    let boxx7 = document.createElement('div')
    boxx7.id = 'x7'
    dialog5.innerHTML = "";
    dialog5.appendChild(boxx7)


    let senderaccount1 = document.createElement('input')
    senderaccount1.id = "sender1"
    senderaccount1.type = "text"
    senderaccount1.placeholder = "enter the account number"
    senderaccount1.innerHTML = ""
    boxx7.appendChild(senderaccount1)

    let amountsend = document.createElement('input')
    amountsend.id = "amountsend"
    amountsend.type = "text"
    amountsend.placeholder = "enter the amount"
    amountsend.innerHTML = ""
    boxx7.appendChild(amountsend)

    let transferpassword = document.createElement('input')
    transferpassword.id = "transferpassword"
    transferpassword.type = "password"
    transferpassword.placeholder = "enter password"
    transferpassword.innerHTML = ""
    boxx7.appendChild(transferpassword)


    let button8 = document.createElement("button");
    button8.id="but8"
    button8.innerHTML = "send";
    boxx7.appendChild(button8);

    button8.addEventListener('click', () => {
      let check1 = JSON.parse(localStorage.getItem('recentlogin') || "[]");
      let storeddata = JSON.parse(localStorage.getItem('userdetails') || "[]");
    
      
      
      
      for (let i = 0; i < storeddata.length; i++) {
        if (storeddata[i].email1 === check1.rmail) {
          var senderAccount = storeddata[i];
          break;
        }
      }
    
    
     
      if (transferpassword.value !== check1.rpass) {
        alert("Enter correct password");
        return;
      }

      if (senderAccount.accountnumber1 === parseInt(senderaccount1.value)) {
        alert("transfer money to another account")
      return
       }
  
   
    
        let receiverAccount = null;
        for (let j = 0; j < storeddata.length; j++) {
            if (storeddata[j].accountnumber1 === parseInt(senderaccount1.value)) {
                receiverAccount = storeddata[j];
                break;
            }
        }
    
        if (receiverAccount) {
          let amountToSend = parseFloat(amountsend.value);
      
          
          if (senderAccount.balance1 >= amountToSend) {
              senderAccount.balance1 -= amountToSend;
              receiverAccount.balance1 += amountToSend;
      
              senderAccount.transaction1.push({
                  amount1: amountToSend,
                  type: "transfer out",
                  time: new Date().toLocaleString()
              });
      
              receiverAccount.transaction1.push({
                  amount1: amountToSend,
                  type: "transfer in",
                  time: new Date().toLocaleString()
              });
      
              localStorage.setItem("userdetails", JSON.stringify(storeddata));
              alert("Money has been sent successfully.");
          } else {
              alert("Insufficient balance");
          }
      } else {
          alert("Enter a valid account number");
      }
    
     
      senderaccount1.value = "";
      amountsend.value = "";
      transferpassword.value = "";
    
    

    
    

    })

    let button9 = document.createElement("button");
    button9.id="but9"
    button9.innerHTML = "close";
    boxx7.appendChild(button9)
    button9.addEventListener("click", () => {
      dialog5.close();
      document.body.id = "";
  })
  dialog5.showModal();
})
  loginlink.addEventListener("click", () => {
    localStorage.removeItem("recentlogin");
  });

   
 
})