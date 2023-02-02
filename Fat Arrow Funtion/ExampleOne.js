var programmingLanguage={
   name:"javascript",
   library:['React',"Angular","Vue"],
   printLibrary:function(){
    this.library.forEach((a)=>{
        console.log(`${this.name} Loves ${a}`); 
    });
   },
}
programmingLanguage.printLibrary();



var name=(a)=> console.log(a);

name("hi");
