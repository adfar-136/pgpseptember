var obj = {
    fname:"Adfar",
    age:26,
    display1:function(){
     console.log(this.skill.first)
    },
    skill:{
        first :"HTML",
        display2:function(){
            console.log(this.fname)
        }
    }
}
obj.display1()
obj.skill.display2()