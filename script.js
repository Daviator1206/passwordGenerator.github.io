class Password{
    constructor(long, reason){
      this.long = long
      this.reason = reason
      console.log(typeof reason)
    }
    generateStrongPassword(){
      let i =  ""
      let a = "abcdefghijklmnopqrstuvwxyz6789012345"
      while(i.length != this.long){
        let n = Math.floor(Math.random() * a.length)
        i += a[n]
      }
        localStorage.setItem(this.reason,i)
        // data.innerHTML = "Your password is "+i
        data.value = i
    }
    generateWeakPassword(){
      let i = ""
      let a = "abcdefghijklmnopqrstuvwxyz"
      while (i.length != this.long){
        let n = Math.floor(Math.random() * a.length)
        i += a[n]
      }
      localStorage.setItem(this.reason, i)
      // data.innerHTML = "Your password is "+i
      data.value = i
    }
    generateSuperStrongPassword(){
      let i = ""
      let a = "abcdefghijklmnopqrstuvwxyz6789012345!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      while(i.length != this.long){
        let n = Math.floor(Math.random()* a.length)
        i += a[n]
      }
      localStorage.setItem(this.reason,i)
      // data.innerHTML = "Your password is "+i
      data.value = i
    }
    generateFunnyPassword(){
      let a = ["funny", "love", "create", "password", "earth"]
      let r = Math.floor(Math.random()*a.length)
      localStorage.setItem(this.reason, a[r])
      // data.innerHTML = "Your password is "+ a[r]
      data.value = a[r]
    }
  }
  
  // p.generateStrongPassword()
  // p.generateFunnyPassword()
  // let d = document.getElementById("num").value
  // let p = new Password(d)
  btn1.addEventListener('click',(e)=>{
    e.preventDefault(e)
    let d = document.getElementById("num").value
    let rea = document.getElementById("reason").value
    let p = new Password(d, rea)
    p.generateStrongPassword()
  })
  btn2.addEventListener('click',(e)=>{
    e.preventDefault(e)
    let d = document.getElementById("num").value
    let rea = document.getElementById("reason").value
    let p = new Password(d,rea)
    p.generateWeakPassword()
  })
  btn3.addEventListener('click',(e)=>{
    e.preventDefault(e)
    let d = document.getElementById("num").value
    let rea = document.getElementById("reason").value
    let p = new Password(d,rea)
    p.generateSuperStrongPassword()
  })
  btn4.addEventListener('click',(e)=>{
    e.preventDefault(e)
    // let d = document.getElementById("num").value
    let p = new Password()
    p.generateFunnyPassword()
  })
  
  
  // code for coping the text
  
  function coping(){
    let copy = document.getElementById("data")
    copy.select()
    navigator.clipboard.writeText(data.value)
    alert("text Copied : " + data.value)
  }