
var allTutorials = [
    {
        Title:"Tag Index",
        tags:"#index",
        Blog:`
        <h4>Tag Index</h4>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>hashtags</th><th>topics</th></tr>
        <tr><td>#dsa</td><td> data structures and algorithms </td></tr>
        <tr><td>#web</td><td>html,css,javascript</td></tr>
        <tr><td>#mernweb</td><td>mern stack (mongodb,expressjs,reactjs,nodejs) </td></tr>
        <tr><td>#microservice</td><td> microservice achitecture, amazon,whatsapp,twitter,netflix </td></tr>
        <tr><td>#soa</td><td> service oriented architecture,amazon,uber </td></tr>
        <tr><td>#dbms</td><td> database management system</td></tr>
        <tr><td>#soa</td><td> </td></tr>
        <tr><td>#soa</td><td> </td></tr>
        <tr><td>#soa</td><td> </td></tr>
        </table>
        `
    },
    {
        Title:"basic web development with html,css,javascript",
        tags:"#programming #web #tutorial",
        Blog:`
        Web browser read H.T.M.L. (hypertext markup language) code and create D.O.M. (document object model) tree corresponding to that in the memory. CSS helps you to style components of D.O.M tree
        and then javascript helps you manipulate the DOM tree in memory programmatically.
        <br><br>
        <b>HTML</b> : <xmp><div id="#mydiv">Hello</div></xmp>
        <b>CSS</b> : <xmp> #mydiv{color:"red"} </xmp>
        <b>Javascript</b> : <xmp> document.getElementById("mydiv").innerHTML+=" World" </xmp>
        <b>Output</b>:<br/><br> 
        <div style="color:red">Hello World</div>
        <br> 
        <h3>Lectures:</h3>
        <p>The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>  
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>HTML</td><td>Web Development (Frontend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=E3ByCRqE7Lo">html-codewithharry</a></td></tr>
        <tr><td>CSS</td><td>Web Development (Frontend)</td><td><a  target="_blank" href="https://www.youtube.com/watch?v=u5-K_ua9sOw">css-codewithharry</a></td></tr>
        <tr><td>JavaScript</td><td>Web Development (Frontend)</td><td><a  target="_blank" href="https://www.youtube.com/watch?v=hKB-YGF14SY">js-codewithharry</a></td></tr>
        <tr><td>Namaste JavaScript</td><td>Programming</td><td><a  target="_blank" href="https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP">namaste-js-akshay-saini</a></td></tr>
        <tr><td>W3schools</td><td>Tutorial/IDE for html,css,javascript</td><td><a  target="_blank" href="https://www.w3schools.com/html/html_basic.asp">w3schools</a></td></tr>
        </table>
        `
    },
    {
        Title:"basic programming in python",
        tags:"#python #programming #tutorial",
        Blog:`
        <h4>Basic programming in python</h4>
        4 Fundamentals of basic programming : <br>
        (i) basic operations<br>
        (ii) functions<br>
        (iii) loop<br>
        (iv) recursion<br> 
        <pre>
        print("Hello world")
        # arithmetic operations
        x = 2
        y = 3
        z1 = x+y
        print("sum of ",x,"+",y,"= ",z1)

        # Function: for reuse same code 
        def sq(x):
            return x*x

        z2 = sq(x) + sq(y)
        print("sum of sq(",x,") + sq(",y,") = ",z2)

        # sum of first 5
        # (i) repeat sum
        fsum = 0
        fsum = fsum + 1
        fsum = fsum + 2
        fsum = fsum + 3
        fsum = fsum + 4
        fsum = fsum + 5

        print("sum of first 5 with repeat add",fsum)

        # (ii) for loop
        fsum = 0
        for i in range(1, 5+1):
            fsum = fsum + i

        print("sum of first 5 with for loop",fsum)

        # (iii) with recursion
        def calcSum(n):
            if(n == 0):
                return 0
            return n + calcSum(n-1)

        fsum = calcSum(5)
        print("sum of first 5 with recursion",fsum)
        </pre>
        <h4>Output</h4>
        <pre>
        Hello world
        sum of  2 + 3 =  5
        sum of sq( 2 ) + sq( 3 ) =  13
        sum of first 5 with repeat add 15
        sum of first 5 with for loop 15
        sum of first 5 with recursion 15
        </pre>
        <br> 
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>    
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>Python Beginner Full</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=gfDE2a7MKjA">python-codewithharry</a></td></tr>
        </table>
        `
    },
    {
        Title:"linux command line, bash ",
        tags:"#linux #programming #tutorial",
        Blog:`
        <h4>Basic Linux Commands</h4>
        <h4>Basic Commands</h4>
        echo <text> : print the text in terminal<br>
        ls : list of files present in folder<br>
        ls -a: list of files present in folder and 
        -a flag will including hidden files<br>
        cd : change directory<br>
        mkdir : make a folder/directory<br>
        touch : create the file<br>
        gedit <filename> : open the file in gedit<br>
        history : list of all commands you entered earlier<br>
        clear : clear the screen<br>
        sudo <command> : run command as super user<br>
        sudo apt-get install <package-name> : install package from apt-get<br>
        sudo snap install <package-name> : install package from snapcraft <br>
        <br>
        <h4>Key Points:</h4>
        (i) use arrow keys (up)/(down) to see the commands you entered earlier.<br>
        (ii) use "tab" for autocompletion of the commands.<br>
        <br> 
        <h4>Bash Script:</h4> 
        We can also execute the linux command from a bash file (.sh), we
        call it bash scripts.  
        <br>
        for example: <br>
        <pre>
        user~$ echo "Hello World"
        user~$ Hello World
        </pre>
        This can be done with bash file
        say "command.sh"
        <pre>
        echo "Hello World"
        </pre>
        <br>
        Now run the same command with "command.sh" file
        <br>
        <pre>
        user~$ ./command.sh
        user~$ Hello World
        </pre>
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>Linux Tutorial</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=_tCY-c-sPZc">linux-codewithharry</a></td></tr>
        <tr><td>Bash Script</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=v-F3YLd6oMw">bash-traversymedia</a></td></tr>
        </table>
        `
    },
    {
        Title:"object oriented programming",
        tags:"#oop #programming #python #tutorial",
        Blog:`
        <h4>Object Oriented Programming</h4>
        <p>
        In object oriented programming, everything is object.
        object can represent the real world systems into the computer 
        in order to improve the operational productivity of the 
        system. 
        </p>
        <h4>Code</h4>
        <pre>
        class Animal:
            def __init__(self,tp,sp):
                self.type = tp
                self.speed = sp
            def run(self):
                print("run @",self.speed,"km/h ")
            def climbTree(self):
                print(self.type," can climb a tree - Not known")
                
        class Dog(Animal):
            def __init__(self,na,sp):
                self.name = na
                Animal.__init__(self, "Dog",sp)
            def run(self):
                print(self.name,"is",self.type," which ",end=" ")
                super().run()
            def climbTree(self):
                print(self.name, " is Dog, can't climb tree")
            
        class Monkey(Animal):
            def __init__(self,na,sp):
                self.name = na
                Animal.__init__(self, "Monkey",sp)
            def run(self):
                print(self.name,"is",self.type," which ",end=" ")
                super().run()
            def climbTree(self):
                print(self.name," is Monkey, climb tree easily")
            
        dg = Dog("Tommy", 30)
        mn = Monkey("Mercell", 50)
        dg.run()
        mn.run()
        dg.climbTree()
        mn.climbTree()
        </pre>
        <h4>Output</h4> 
        <pre>
        Tommy is a Dog  which  run @ 30 km/h 
        Mercell is a Monkey  which  run @ 50 km/h 
        Tommy is Dog, can't climb tree
        Mercell is a Monkey, climb tree easily
        </pre>
        <h4>Core Concepts</h4>
        (i) Encapsulation : wrapping data+function in one unit
        , functions+variables of animal's+dog's classes 
        are encapsulated into one unit of dog object.  
        <br>
        (ii) Inheritance : data+function of base class
        is inherited by derived class, Animals class is inherited 
        by Dog and Monkey class.
        <br>
        (iii) Polymorphism : "one name, many forms", here climbTree() 
        function is one name but has many forms in it's derived class,
        in monkey's class it prints "can climb easily" but in dog's class
        it show that it can't climb easily. 
        <br>
        (iv) Abstraction : a class which act as blueprint, we have
        "Animal" as abstract class which means there is nothing like 
        "Animal" which really exists, "Dogs" and "Monkeys" are the real
        things which exists. In Java or other languages or even in 
        python with some tweak we can define Animal class as abstract or
        I mean to say we can prevent the creation of object of Animal's class.
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>OOP (Quick)</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=pTB0EiLXUC8">oop-quick-mosh</a></td></tr>
        <tr><td>OOP in Python</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=qiSCMNBIP2g">oop-python-telusko</a></td></tr>
        </table>
        `
    },
    {
        Title:"functional programming",
        tags:"#functionalprog #programming #python #tutorial",
        Blog:`
        <h4>Functional Programming</h4>
        <p>
        Functional programming is based on lambda calculus which helps
        mathematicians to represent and operate computations more conviniently.
        </p>
        <pre>
        # pure functions, same output for same 
        # set of arguments with no modifications 
        # in the input.
        def sq(x):
            return x*x
        
        def cube(x):
            return x*x*x
        a = 2
        print("sq of ", a," = ",sq(a))
        print("sq of ", a," = ",sq(a))
        print("a not modified, sq is pure")
        
        # Impure functions
        arr = [1,2,3,4]
        
        def myfunc2(arr,i):
            arr[i] += 11
            return arr
        
        print("arr(before)",arr)
        myfunc2(arr,2)
        print("arr(after 1)",arr)
        myfunc2(arr,2)
        print("arr(after 2)",arr)
        print("arr modified, myfunc2 is impure")
        
        # lambda, function with n args but 1 expression only
        sqlm = lambda x:x*x
        cubelm = lambda x:x*x*x
        
        # here power is higher order function, it takes  
        # function as the argument
        
        def power(myfunc,x):
            return myfunc(x)
            
        print("square of ",3," = ",power(sqlm,3))
        
        # variables are immutable
        x = 3
        print("x = ",x)
        x = x + 4
        print("x = ",x)
        print("x changed from 3 to 7, hence mutable")
        
        inc2 = lambda x:x+4
        inc2(x)
        print("x = ",x)
        inc2(x)
        print("x = ",x)
        print("inc2 is immutable")
        
        # referential transparency
        def myfun22():
            return 5+8
        print(myfun22())
        
        # myfunc22 can be replaced in code
        # and there won't be any changes 
        # in the entire program, myfunc22 
        # function has referential transparency
        
        print(5+8)
        
        # map, reduce and filter
        
        aarr = [1,2,3,4]
        sqr = lambda x: x*x
        
        print("aarr = ",aarr)
        res = map(sqr,aarr)
        print("aarr = ",aarr)
        
        # arr remain same, map is pure function
        print("res = ",list(res))
        
        # reduce
        import functools
        
        aarrsum = lambda res,i:res+i
        res2 = functools.reduce(aarrsum,aarr)
        print("res2 = ", res2)
        
        # filter
        iseven = lambda x:x%2==0
        res3 = filter(iseven,aarr)
        print("res3 = ",list(res3))

        </pre>
        <br>
        <h4>Output</h4> 
        <pre>
        
        sq of  2  =  4
        sq of  2  =  4
        a not modified, sq is pure
        arr(before) [1, 2, 3, 4]
        arr(after 1) [1, 2, 14, 4]
        arr(after 2) [1, 2, 25, 4]
        arr modified, myfunc2 is impure
        square of  3  =  9
        x =  3
        x =  7
        x changed from 3 to 7, hence mutable
        x =  7
        x =  7
        inc2 is immutable
        13
        13
        aarr =  [1, 2, 3, 4]
        aarr =  [1, 2, 3, 4]
        res =  [1, 4, 9, 16]
        res2 =  10
        res3 =  [2, 4]

        </pre>
        <h4>Core Concepts</h4>
        (i) Pure functions : Same output for same input arguments <br>
        (ii) Functions are First-Class and can be Higher-Order : 
        functions are treated like objects and it can be passed in arguments 
        and can be returned also. 
        <br>
        (iii) Variables are immutable, function with referential transparency : variables 
        can't be modified and by referential transparency in function I mean 
        to say that "function can be replaced by a piece of code and there will be
        no impact on the final state of entire program " . 
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>functional programming (JS)</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=e-5obm1G_FY">functional-programming-js-anjana</a></td></tr>
        <tr><td>functional programming (Python)</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=2OdyPEY77X8">functional-programming-python</a></td></tr>
        </table>
        `
    },
    {
        Title:"SOLID Priciple in OOP",
        tags:"#oop #programming #python #tutorial",
        Blog:`
        <h4>SOLID Priciple in OOP</h4>
        <p>
        Functional programming is based on lambda calculus which helps
        mathematicians to represent and operate computations more conviniently.
        </p>
        <pre>

        # S.O.L.I.D. principle in OOP

        # S : Single Responsibility
        
        class Circle():
            def __init__(self,r):
                self.radius = r
            def area(self):
                return 3.14*(self.radius**2)
        
        c = Circle(5)
        print(c.area())
        
        # O : Open Closed 
        
        class Square():
            def __init__(self,a):
                self.side = a
            def area(self):
                return (self.side**2)
            def param(self):
                return 4*self.side
                
        s1 = Square(3)
        print(s1.area())
        print(s1.param())
        
        # L : Liskov Substitution, derived class object can be substituted in place of base class object
        
        class Shape():
            def __init__(self):
                pass
            def area(self):
                return 0
        
        class Rectangle(Shape):
            def __init__(self, l, w):
                self.length = l
                self.width = w
            def area(self):
                return self.length * self.width
        
        # r = Rectangle(10,20)
        # print("area ",r.area())
        # print("parameter ",r.parameter())
        
        # I : Interface Segregation,
        
        class SMSDevice():
            def sms(self):
                print("sms ..")
                pass
        
        class CallDevice():
            def call(self):
                print("call")
                pass
        
        class SmartPhone(SMSDevice, CallDevice):
            def __init__(self):
                pass
            def sms(self):
                super().sms()
            def call(self):
                super().call()
            
        smPh = SmartPhone()
        smPh.sms()
        smPh.call()
        
        
        # Dependency Inversion
        
        class Employee(object):
            def Work():
                pass
              
        class Manager():
            def __init__(self):
                self.employees=[]
            def addEmployee(self,a):
                self.employees.append(a)
           
        class Developer(Employee):
            def __init__(self):
                print("developer added")
            def Work():
                print("turning coffee into code")
                  
        class Designer(Employee):
            def __init__(self):
                print("designer added")
            def Work():
                print("turning lines to wireframes")
        
                  
        a=Manager()
        a.addEmployee(Developer())
        a.addEmployee(Designer())

        </pre>
        <h4>Core Concepts</h4>
        (i) Single Responsibility Principle (SRP) states that a Class or Module 
        should have one job to do and hence it should have only one reason to change.
        <br>
        (ii) The Open-Closed principle states that a Class or Module should be open 
        to extensions and closed for modifications.        
        <br>
        (iii) Liskov Substitution Principle states that if we have a base class and 
        a child class, then objects of the base class should be substituted by objects 
        of child class without giving incorrect results. <br>
        (iv) The Interface Segregation Principle states that clients should not be forced 
        to depend on methods that they do not use. <br>
        (v) Dependency inversion : that high level modules should not depend on low level modules; 
        both should depend on abstractions. Instead of depending upon low level modules like designer 
        and developer manager as high level module or class should be dependent upon abstract class 
        "employee". Now I can add different kinds of employees even without designer 
        and developer.
        <h4>Few other principles</h4>
        DRY : Don't repeat Yourself, avoid code which repeat itself.<br>
        KISS : Keep it simple stupid, don't try to make code complex unnecessarily<br> 
        <br>
        `
    },
    {
        Title:"How to approach data structures, algorithms",
        tags:"#dsa #programming #tutorial",
        Blog:`
        <h4>Approaching Data structures and Algorithms</h4>
        (i) Don't memorize instead visualize, when you become capable enough
        to visualize then only you will be able to solve difficult questions.
        <br>
        (ii) Loop and recursion are the foundation of coding, don't touch 
        anything else unless you become good at recursion or loops. 
        <br> but really Why?? <br>
        a. mergesort, quicksort, graph, tree etc recursion everywhere<br>
        b. linkedlist, array, stack, etc loops everywhere<br>
        Any variation in loop or recursion will make you stressed if you are
        not able to visualize. Give huge amount of time to these two topics,
        I will highly recommend 
        <a target="_blank" href="https://codingbat.com/java" >codingbat.com</a>,
        this website has a lots of easy to hard questions on recursion and loops 
        and designed by an experienced professor as they design things in 
        consideration of human psychology instead of posting questions like a pile 
        of garbage just like we saw questions on coding websites. 
        <br>
        (iii) Try to solve the question with recursion you generally solve with 
        loops and solve questions with loops which you solve with recursion.
        <br>
        (iv) Practice coding problems upto a certain level till your brain 
        start giving auto suggestions. 
        <br><br>
        Don't think doing data structures and algorithms will solve all other problems 
        of software engineering and business due to which engineering job exists.
        <br><br>
        `
    },
    {
        Title:"How to pick the right database",
        tags:"#dbms #programming #tutorial",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"MERN Stack Web Dev for Tourist app (RESTfulAPI)",
        tags:"#mern #restapi #web #dbms #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"MERN Stack Web Dev for Book app (GraphQLAPI)",
        tags:"#mern #graphql #web #dbms #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Requirements to Low Level Diagram to code",
        tags:"#soa #systemdesign #programming #microservice #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Service oriented architecture, High Level Diagram for Amazon, Uber",
        tags:"#soa #systemdesign #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Microservice architecture, High Level Diagram for Amazon, Whatsapp, Twitter, Netflix",
        tags:"#soa #systemdesign #programming #microservice #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Git, Version Control System(VCS)",
        tags:"#git #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Deployment, Virtual Machine vs Container (Docker, Kubernetes)",
        tags:"#deployment #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"DevOps, AWS, Terraform, Jenkins",
        tags:"#devops #aws #deployment #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Machine Learning, Movie Recommendation",
        tags:"#machinelearning #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },{
        Title:"Blockchain, Simple Bank",
        tags:"#blockchain #solidity #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    ,{
        Title:"Instagram Marketing automation with SeleniumPy",
        tags:"#marketing #python #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Devhelp linux helper tool",
        tags:"#linux #programming #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"UI Design with Figma, Pinterest Example",
        tags:"#ui #ux #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    }
    ,
    
    {
        Title:"Design Thinking,Product Design DSAEE+SSTCC methodology",
        tags:"#productdesign #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Product Managment, Agile, Scrum board with Trello(Jira)",
        tags:"#productmanagement #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Social Media Marketing",
        tags:"#marketing #businessgrowth #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"App Marketing",
        tags:"#marketing #businessgrowth #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Entrepreneur Growth Cycle and Business Development Strategy",
        tags:"#business #businessgrowth #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Startup Investment Fundamentals",
        tags:"#business #businessgrowth #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Recruitment for startup",
        tags:"#business #businessgrowth #recruitment #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Mentorship, Parenting, Leadership and Training",
        tags:"#business #leadership #mentorship #businessgrowth #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
    {
        Title:"Sales, Communication (LIACP) and importance of personal growth",
        tags:"#business #sales #businessgrowth #personalgrowth #tutorial #project",
        Blog:`
        <h4>Types of databases</h4>
        <p>this is database</p>
        `
    },
 

]


