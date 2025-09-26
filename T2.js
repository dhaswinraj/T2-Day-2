let username;
 let psd;
 let cnfm;
 var choice
 username=prompt("Enter your username");
 psd=prompt("Enter the password");
 if (username=="Library" && psd=="Book123"){
     cnfm=confirm("Do you want to borrow a book?");
         if(cnfm==true){
             choice=prompt(" 1=Fiction, 2=Science, 3=History");
             switch(choice){
                 case "1":
                     alert("You selected Fiction");
                     break;
                 case "2":
                     alert("You selected Science");
                     break;
                 case "3":
                     alert("you selected History");
                     break;
                 default:
                     alert("Invalid catagory!");        
             }
         }
             else {
                 alert("May Be Next Time, Thank You");
             }
     }          
 else{ 
     alert("Invalid login!");
 }