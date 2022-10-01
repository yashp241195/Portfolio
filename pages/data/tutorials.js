
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
        <tr><th>Topics</th><th>Hashtags</th></tr>
        <tr><td>Technical(Lec 1-20)</td><td> #programming </td></tr>
        <tr><td>Product/UI(Lec 21-23)</td><td> #productdesign #productmanagement #ui</td></tr>
        <tr><td>Marketing(Lec 24-25,19)</td><td> #marketing </td></tr>
        <tr><td>Business Dev(Lec 26-30)</td><td> #business </td></tr>
        </table>
        `
    },
    {
        Title:"basic web development with html css javascript",
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
        Title:"linux command line , bash, how to pick right linux OS ",
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
	
	<h4>How to pick right linux OS?</h4>
        <div>
        There are major 3 linux based distribution from where other distributions are derived.
        </div>
        <br/>
        <ul>
        <li>
        Debian : (Ubuntu/Linux mint/Zorin etc) here we package manager is "apt". Really good for beginners and people who doesn't want to configure things much, for first time user and regular users. It is very stable. all software and packages are properly tested. but it is slower when you wish to do graphic intense tasks like gaming and all.
        </li>
        <li>
        Arch: it is community based, software aren't well tested, unstable sometimes but very good for graphic intensive activities like gaming, designing, 3D modeling stuff and all.
        </li>
        <li>
        Fedora : combination of above two like stable and faster, not faster as arch and neither the library is as wide as deb but it is best for one who do regular stuff and code on databases.
        </li>
        </ul>
	
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
        Title:"SOLID Priciple in object oriented programming",
        tags:"#oop #programming #python #tutorial",
        Blog:`
        <h4>SOLID Priciple in OOP</h4>
        
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
        
        # L : Liskov Substitution, derived class object 
        $ can be substituted in place of base class object
        
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
        Title:"How to approach data structures , algorithms",
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
        <br>
        Do leetcode study plan questions, it has everything, it consists of 200-250 
        Questions covering all concepts and with various difficulty level. 
        <br><a target="_blank" href="https://leetcode.com/study-plan/data-structure/" >study-plan/data-structure</a>,
        <br><a target="_blank" href="https://leetcode.com/study-plan/algorithm/" >study-plan/algorithm</a>,
        <br>OR<br>
	<br><a target="_blank" href="https://www.interviewbit.com/courses/programming/" >interviewbit/programming</a>,
	<br><br>
        Solving Data Structures and Algorithms proactively all the time (also known as Competitive Coding) is purely
        a wastage of time in the era of open source, it is just that if a decent engineer take 1 hour to solve dsa question then 6* codeforce/codechef 
        will do the same in 1/2 hour but opportunity for doing such thing occurs once a month for senior engineers and that 
        person import such algorithms with open source libraries which is a good practice as these libraries are well tested and well documented 
        and sometime copy it from google which makes speed in that skill useless. The main benefit of doing DSA is found while learning new concepts, 
        especially in system design. 
        <br><br>
        It is just 20% part of the equation so 
        don't think doing data structures and algorithms will solve all other problems 
        of software engineering and business due to which engineering job exists.
        <br><br>

        `
    },
    {
        Title:"How to pick the right database",
        tags:"#dbms #programming #tutorial",
        Blog:`
        <h3>How to pick right database</h3>
        <p>
        <b>MySQL : </b> MySQL is a relational database, it is used
        when we have data which can be stored in tabular format and 
        we need to perform ACID transactions. Usually in banking
        or financial apps where money is deducted from one account and
        added to another as a single operation and revert entire process 
        in case of failure so that there will be no data inconsistency. 
        </p>
        <p>
        <b>MongoDB : </b> MongoDB is a document database used for faster
        read and write operations and storing unstructured data. 
        </p>
        <p>
        <b>Redis : </b> Redis Cache is a cache database used to store data 
        in key value pair where we need to perform quick access to the data.
        </p>
        <p>
        <b>Cassandra : </b> Cassandra is a database which store data in key value 
        pair where we need to store huge amount of data. It is usually act as a
        backup storage or some database where we need to write huge amount of data. 
        </p>
        <p>
        <b>CDN : </b> A content delivery network (CDN) is a group of geographically 
        distributed servers that speed up the delivery of web content by bringing it 
        closer to where users are. 
        </p>
        <p>
        <b>AmazonS3 : </b> Amazon S3 or Amazon Simple Storage Service is a service offered 
        by Amazon Web Services that provides object storage through a web service interface.
        It is used to store media objects like photos, videos and other objects.
        </p>
        <p>
        <b>Hadoop : </b> Apache Hadoop is an open source framework that is used to efficiently 
        store and process large datasets ranging in size from gigabytes to petabytes of data. 
        Instead of using one large computer to store and process the data, Hadoop allows clustering 
        multiple computers to analyze massive datasets in parallel more quickly.
        </p>
        <p>
        <b>Apache Kafka : </b> Apache Kafka is a distributed publish-subscribe messaging system and a 
        robust queue that can handle a high volume of data and enables you to pass messages from one 
        end-point to another. Kafka is suitable for both offline and online message consumption. 
        Kafka messages are persisted on the disk and replicated within the cluster to prevent data loss. 
        Kafka is built on top of the ZooKeeper synchronization service. It integrates very well with Apache Storm 
        and Spark for real-time streaming data analysis
        </p>
        <p>
        <b>Apache Spark : </b> Apache Spark is an open-source, distributed processing system used for big data workloads. ... 
        It provides development APIs in Java, Scala, Python and R, and supports code reuse across multiple workloads batch 
        processing, interactive queries, real-time analytics, machine learning, and graph processing.
        </p>
        <p>
        <b>Neo4J : </b> Neo4j is a graph database management system helpful to store and process relationships more conviniently
        </p>

        `
    },
    {
        Title:"MERN Stack Web Dev for Tourist app ( REST API ) , How to pick right React JS framework for frontend, What is Progressive Web App (PWA web app), Trusted Web Activity (TWA Android App)",
        tags:"#mern #restapi #web #dbms #pwa #twa #programming #tutorial #project",
        Blog:`
        <h4>Tourist App (MERN Stack Application)</h4>
        <h4>Designing the App</h4>
        <p>
        The first step is to design the app User Interface (UI) according to your 
        needs in designing tools like Figma, design the backend of the app by 
        designing API and databases.
        </p>
        <h4> Design in Figma </h4>
        <img src="data/images/mern/mern1.jpeg" height="450" width="600"/>
        <img src="data/images/mern/mern2.jpeg" height="400" width="600"/>
        <div style="margin-left:-200px;" >
        <img src="data/images/mern/mern3.jpeg" height="850" width="1550"/>
        </div>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <h4>Tourist App (MERN Stack Application)</h4>
        <p>
        M : MongoDB : Non Relational Database, <br>
        E : Express : Backend REST API framework built on NodeJS<br>
        R : React JS : Frontend framework based on NodeJS<br>
        N : Node JS : Framework for web development <br>
        </p>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Code Name</th><th> Code URL</th></tr>
        <tr><td>Tourist(frontend:NextJS(reactjs))</td><td> <a target="_blank" href="https://github.com/yashp241195/tourist-frontend" >tourist-frontend</a> </td></tr>
        <tr><td>Tourist(backend:ExpressJS,SwaggerDocs)</td><td> <a target="_blank" href="https://github.com/yashp241195/tourist-backend" > tourist-backend</a> </td></tr>
        </table>
        <br>
        <img src="data/images/mern/mern4.jpg" height="500" width="500"/>
        <img src="data/images/mern/mern5.jpg" height="500" width="500"/>
        <img src="data/images/mern/mern6.jpg" height="500" width="500"/>
       
        <h4>Lectures</h4>
        <p>The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Course Name</th><th> Category </th><th> Tutorial URL</th></tr>
        <tr><td> NodeJS Basic </td><td>Web (Basic)</td><td> <a target="_blank" href="https://www.youtube.com/watch?v=TlB_eWDSMt4" >nodejs-mosh</a> </td></tr>
        <tr><td> ReactJS with Hooks	</td><td>Web (Frontend)</td><td> <a target="_blank" href="https://www.youtube.com/watch?v=9U3IhLAnSxM" >reactjs-with-hooks</a> </td></tr>
        <tr><td> NextJS Full </td><td>Web (Frontend)</td><td> <a target="_blank" href="https://www.youtube.com/watch?v=7J4iL1HDshQ&list=PLYSZyzpwBEWSQsrukurP09ksi49H9Yj40" >nextjs-bruno</a> </td></tr>
        <tr><td> NextJS Cookies	</td><td>Web (Frontend)</td><td> <a target="_blank" href="https://www.youtube.com/watch?v=_AYuhmz-fX4" >nextjs-cookies</a> </td></tr>
        <tr><td> REST API Express Basic	</td><td>Web (Backend)</td><td> <a target="_blank" href="https://www.youtube.com/watch?v=pKd0Rpw7O48" >RESTAPI-express-mosh</a> </td></tr>
        <tr><td> REST API Express Full</td><td>Web (Backend)</td><td> <a target="_blank" href="https://www.youtube.com/watch?v=zx6jnaLuB9Q&list=PLSpJkDDmpFZ7GowbJE-mvX09zY9zfYatI" >RESTAPI-express-full-codeworkr</a> </td></tr>
        <tr><td> NodeJS Security</td><td>Web (Backend)</td><td> <a target="_blank" href="https://www.youtube.com/playlist?list=PLTgRMOcmRb3PcbiJAR6rQb1OaijMyy0Mp" >nodejs-security</a> </td></tr>
        </table>
        <br>
        <h3> How to pick right ReactJS framework for frontend ? </h3>  
        <p>
        The same tourist app could be created with pure reactjs  
        "create-react-app" as well instead of nextjs. For small project 
        like that, it really doesn't matter but when we create anything
        real project which we are supposed to maintain and provide services
        then we need to consider the following.
        </p>
        <p>
        <br> 1. If you want to build site which is mostly static (blog, portfolio, landing page), use Gatsby, its not SSR, but it pre-renders the website into HTML at the build time
        <br> 2. If you want to build a web app with react, and you care about SEO, easier social media optimization and faster render for user you should think about SSR and framework like next.js
        <br> 3. If you building a SPA (single page application), and you dont want to configure everything on the server side like: i18n, router e.t.c. you should use create-react-app
        </p>
	
        <br/>
        <h3>What is Progessive Web App (PWA) ?</h3>
        <div>
        <br/>A progressive web app (PWA) is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store, make a purchase and download software locally. Instead, a PWA can be located with a search engine query and accessed immediately through a browser.
        <br/><br/>PWAs eliminate the need for e-commerce merchants to develop native apps for multiple mobile operating systems. Just like YouTube videos, PWA content is downloaded progressively, which provides the end user with a better user experience than a traditional website that uses responsive design. The term “progressive web apps” was coined in 2015 by designer Frances Berriman and Google Chrome engineer, Alex Russell
        <br/><br/>The goal of PWAs is to blur the distinction between native apps and the mobile web by bringing most of the benefits of native mobile apps to the mobile browser. PWAs use standards-based technologies and run in a Container that is secure and accessible to anyone on the web. They can send web push notifications, work offline and be accessible from the home screen, just like a mobile app from an app store.
        </div>
        <br/>
        <div>
        Pick PWA over Native mobile when you don't need to perform heavy computation and your app doesn't rely majorly on hardware. It is a bad choice for making a camera filter app as it requires camera hardware acceleration.  
        </div>
        <br/>
        <h3>What is Trusted Web Activity (TWA) Android ? </h3>
        <div>
        <br/>A Trusted Web Activity (TWA) allows us to "package" a PWA-standard online service in a special container based on the Chrome web browser. To an average user, this package will act like a standard application. And TWAs can be published in the Google Play Store.
        <br/><br/>From a technical standpoint, a TWA is a browser instance without its own graphic interface (URL bar and menu) which works in a verified mode (Trusted). It can connect solely to a specific domain to give the impression of browsing a full-fledged mobile application.
        <br/><br/>In other words, an application that's based on a PWA page can be installed on a mobile device. If we decide to change the device, this installation (with the data used) can be re-created, as the TWA is linked to the user's Google account. Such an application has an icon, can work in full-screen mode, allows access to specialized device functions, and works offline. From the user's point of view, it's essentially a standard application.
        </div>

        



        `
    },
    {
        Title:"MERN Stack Web Dev for Book app ( GraphQL API )",
        tags:"#mern #graphql #web #dbms #programming #tutorial #project",
        Blog:`
        <h4>MERN Stack Web Dev for Book app ( GraphQL API )</h4>
        <img src="data/images/mern/mern7.jpeg" height="500" width="800"/>
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
        <tr><td>GraphQL(React+Express)</td><td>Web</td><td><a target="_blank" href="https://www.youtube.com/watch?v=ed8SzALpx1Q">express-react-graphql</a></td></tr>
        </table>
        <br>
        <h3> Code for Bookapp </h3>  
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Code Name</th><th> Code URL</th></tr>
        <tr><td>BookApp(React,Express,Graphql)</td><td> <a target="_blank" href="https://github.com/yashp241195/GraphQLBookApp" >book-app-graphql</a> </td></tr>
        </table>



        `
    },
    {
        Title:"Requirements to Low Level Diagram to code , How to improve software development speed",
        tags:"#soa #systemdesign #programming #microservice #project",
        Blog:`
        <h3>Requirements to Low Level Diagram to code</h3>
        <p>
        Low Level Design, LLD helps to create working product from concept quickly.
        </p>
        <img src="data/images/lld/projects08.jpeg" height="450" width="600"/>
        <img src="data/images/lld/projects09.jpeg" height="450" width="600"/>
        <img src="data/images/lld/projects10.jpeg" height="450" width="600"/>
        <img src="data/images/lld/projects11.jpeg" height="450" width="600"/>
        <img src="data/images/lld/projects12.jpeg" height="450" width="600"/>
        <img src="data/images/lld/projects13.jpeg" height="450" width="600"/>
        <img src="data/images/lld/projects14.jpeg" height="450" width="600"/>
        <img src="data/images/lld/projects15.jpeg" height="450" width="600"/>
        <h3>How to improve software development speed</h3>
        0. Improve typing speed and capabilities so that you can type without fatigue and also reading speed as well if you can't stare at books or texts for longer duration and get tired really quick then there is no way for you to improve anything. Everything you do requires lots of physical energy also.
        <br><br>1. Learn linux commands and start using command lines tools such as linux terminal and learn it well because most solutions on stackoverflow is in that format and if you miss that thing you will not able to get helped easily. Answer could be right infront of you and you'll wonder what to do and how to tweak it to solve the issues.
        <br><br>2. First step to anything is to print hello world irrespective of the language or framework. Always test whether functionalities are working properly or not before developing anything. Always look wthether library support for given language or framework is good enough or not. Don't write any code before confirming whether the most basic possible code is working or not.
        <br><br>3. Always focus on abstraction like if you are creating a backend don't focus on whether you are doing Nodejs Python PHP Golang etc always focus on designing the RestAPI or GraphQL or gRpc or Socket or whatever needed to make software functional. In Frontend as well don't focus on material UI or bootstrap or anything just focus of simple HTML or the simple React JSX to input and output the data and some very basic styling with css.
        <br><br>4. Design the Low Level Diagram of the most basic version of the software without worrying about any optimization, efficiency or anything.
        <br><br>5. Develop and deploy the first version of the software without worrying about the functionality but worrying about whether my code work without bugs and errors or not. Modify the code and fix bugs and create the minimal feature and ensure whether user is able to use software properly or not.
        <br><br>6. Design the next iteration and implement only specific feature and develop app iteration wise and create the list of task needed to be done in each iterations  
        `
    },
    {
        Title:"Service oriented architecture, CAP Theorem, High Level Diagram for Amazon , Uber",
        tags:"#soa #systemdesign #cap #programming #tutorial #project",
        Blog:`
        <h3>Service Oriented Architecture</h3>
        <p>
        Service Oriented Architecture (SOA) splits the big monolith application into multiple 
        services so that it can handle big scale applications more efficiently and also allow 
        reusability of resources. In SOA, smaller teams can work on independent services which 
        allows faster development, deployment, bug fixing and healing which is extremely important 
        for large scale applications as every second is the second of business transaction.
        </p>
	<h3>CAP Theorem</h3>
	<p>In theoretical computer science, the CAP theorem, also named Brewer's theorem after computer scientist Eric Brewer, states that any distributed data store can provide only two of the following three guarantees</p>
	<p>Consistency</p>
	<p>Every read receives the most recent write or an error.</p>
	<p>Availability</p>
	<p>Every request receives a (non-error) response, without the guarantee that it contains the most recent write.</p>
	<p>Partition tolerance</p>
	<p>The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes. When a network partition failure happens, it must be decided whether to</p>
	<p>cancel the operation and thus decrease the availability but ensure consistency or to proceed with the operation and thus provide availability but risk inconsistency.</p>
	<p>Thus, if there is a network partition, one has to choose between consistency and availability. Note that consistency as defined in the CAP theorem is quite different from the consistency guaranteed in ACID database transactions.</p>
	<p>Eric Brewer argues that the often-used &quot;two out of three&quot; concept can be somewhat misleading because system designers need only to sacrifice consistency or availability in the presence of partitions.</p>
        <div style="margin-left:-30px;">
            <img src="data/images/hld/projects16.jpeg" height="500" width="640"/>
        </div>
        <div style="margin-left:-30px;">
            <img src="data/images/hld/projects17.jpeg" height="500" width="640"/>
        </div>
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
        <tr><td>Microservices Edureka</td><td>System Design</td><td><a target="_blank" href="https://www.youtube.com/watch?v=E3ByCRqE7Lo">microservice-edureka</a></td></tr>
        <tr><td>Microservices Narendra</td><td>System Design</td><td><a target="_blank" href="https://www.youtube.com/watch?v=NgyKTKyN4BU&list=PLkQkbY7JNJuDqCFncFdTzGm6cRYCF-kZO&index=3">microservice-narendra</a></td></tr>
        <tr><td>Microservices CodeKarle</td><td>System Design</td><td><a target="_blank" href="https://www.codekarle.com/">microservice-codekarle</a></td></tr>
        <tr><td>Kafka Install</td><td>System Design</td><td><a  target="_blank" href="https://linuxhint.com/install-apache-kafka-ubuntu/">kafka-install</a></td></tr>
        <tr><td>Kafka Tutorial</td><td>System Design</td><td><a  target="_blank" href="https://www.javatpoint.com/apache-kafka">Kafka-javatpoint</a></td></tr>
        <tr><td>RabbitMQ Install</td><td>System Design</td><td><a  target="_blank" href="https://linuxhint.com/install-rabbitmq-ubuntu/">rabbitmq-install</a></td></tr>
        </table>
        `
    },
    {
        Title:"Microservice architecture , High Level Diagram for Amazon , Whatsapp , Twitter , Netflix",
        tags:"#soa #systemdesign #programming #microservice #tutorial #project",
        Blog:`
        <h4>Microservice architecture </h4>
        <p>
        Microservice architecture is also a way to implement Service Oriented Architecture.
        Microservices is an architectural design for building a distributed application using containers. 
        They get their name because each function of the application operates as an independent service. 
        This architecture allows for each service to scale or update without disrupting other services in the application.
        </p>
        <div style="margin-left:-100px;">
        <img src="data/images/hld/projects18.jpg" height="550" width="650"/>
        </div>
        <div style="margin-left:-30px;">
        <img src="data/images/hld/projects19b.jpg" height="920" width="630"/>
        </div>
        <div style="margin-left:-30px;">
        <img src="data/images/hld/projects19c.jpg" height="920" width="630"/>
        </div>
        <div style="margin-left:-80px;">
        <img src="data/images/hld/projects20a.jpg" height="920" width="700"/>
        </div>
        <div style="margin-left:-50px;">
        <img src="data/images/hld/projects20b.jpg" height="980" width="680"/>
        </div>
        <div style="overflow-x:scroll; margin-left:-90px;">
        <img src="data/images/hld/projects21a.jpg" height="800" width="1060"/>
        </div>
        <div style="margin-left:-50px;">
        <img src="data/images/hld/projects21b.jpg" height="900" width="680"/>
        </div>
        <div style="overflow-x:scroll; margin-left:-50px;">
        <img src="data/images/hld/projects22a.jpg" height="750" width="800"/>
        </div>
        <div style="margin-left:-20px;">
        <img src="data/images/hld/projects22b.jpg" height="700" width="580"/>
        </div>

        `
    },
    {
        Title:"Git , Github, Version Control System ( VCS ) ",
        tags:"#git #devops #deployment #programming #tutorial",
        Blog:`
        <h4>Git and Github : Version Control System</h4>
        <p> 
        Git is a version control system that lets you manage and keep track of your source code history. 
        GitHub is a cloud-based hosting service that lets you manage Git repositories.
        If you have open-source projects that use Git, then GitHub is designed to help you better manage them.
        </p>
        <br>
        <h4>Create and Upload git repository</h4>
        <div style="margin-left:-70px;">
        <pre>
        // initialize the folder as git repository
        $ git init
        // add particular file to git 
        $ git add file.txt
        // add all files in the directory with
        $ git add .
        // ignore files for commit with .gitignore
        // by mentioning things you wish to ignore
        // inside .gitignore (for example in any node project)
        // node_modules
        // check which branch you are presently in
        $ git branch --list
        // commit to git current branch
        $ git commit -m 'first commit'
        // Create the branch
        $ git branch mybranch
        // Delete the branch 
        $ git branch -d mybranch
        // Switch to mybranch
        $ git checkout mybranch
        // merge branchA from branchB
        $ git checkout branchA
        // switched to branchA ..
        $ git merge branchB
        // branch B is merged into branch A 
        </pre>
        </div>
        <h4>Pushing the code to github</h4>
        <div style="margin-left:0px;">
        <br>// add the remote url to origin variable (SSH)
        <br>$ git remote add origin git@github.com:yashp241195/devhelp.git
        <br>// if origin already exists you can remove origin and add new origin again
        <br>$ git remote remove origin
        <br>// create the SSH Keys pair for committing to github
        <br>$ ssh-keygen -t ed25519 -C 'git@github.com:yashp241195/devhelp.git'
        <br>// this will create two keys github (private) and github.pub (public) keys.
        <br>// add key.pub data to github account key (private) into your local directory
        <br>// from where you want to push the code to your github
        <br>$  eval ssh-agent
        <br>$  ssh-add /home/yash/Desktop/myapps/keys/github
        <br><b>github</b>
        <br>$ sudo env SSH_AUTH_SOCK="$SSH_AUTH_SOCK" ssh-add /home/yash/Desktop/myapps/keys/github
        <br><b>gitlab</b> 
        <br>$ sudo env SSH_AUTH_SOCK="$SSH_AUTH_SOCK" ssh-add /home/yash/Desktop/myapps/keys_gl/glkey
        <br>// pushing the files into the main branch
        <br>$ git push origin main
        <br>
        </div>
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
        <tr><td>Git basics mosh</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=8JJ101D3knE">git-basic-mosh</a></td></tr>
        <tr><td>Git master freecodecamp</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=Uszj_k0DGsg">git-master-freecodecamp</a></td></tr>
        </table>
        `
    },
    {
        Title:"Deployment , Virtual Machine vs Container ( Docker , Kubernetes )",
        tags:"#deployment #devops #programming #tutorial",
        Blog:`
        <h4>Deployment</h4>
        <p>We can deploy our webapps via containers or virtual machines, 
        <br><b>Virtual machine</b> : A VM is a virtualized instance of a computer 
        that can perform almost all of the same functions as a computer, 
        including running applications and operating systems. Virtual machines 
        run on a physical machine and access computing resources from software 
        called a hypervisor.
        <br>
        <b>Container</b> : Containers are a form of operating system virtualization. 
        A single container might be used to run anything from a small microservice or 
        software process to a larger application. Inside a container are all the 
        necessary executables, binary code, libraries, and configuration files. 
        </p>
        <p>
        Containers are much faster than Virtual Machines because they are lightweight.
        Docker is a container technology and Docker Swarm is a container orchestration
        technology which can manage multiple containers automatically. 
        Kubernetes is also a container orchestration technology which provides auto 
        scaling.<br>
        Say, you hosted an ecommerce website as a microservice where each container act
        as a component of microservice and you found on weekends there is huge traffic 
        which means you need more scale on weekends then weekdays, on manual scaling we
        need a tech team who take care of scale according to traffic and there will be lags
        and ultimately huge wastage of resources whereas kubernetes provide auto scale.
        Pokemon Go is the best example of this, they were expecting 5X traffic instead they
        got 50X but kubernetes handle it really well or without any downtime, they were able 
        to serve their customers, after that kubernetes become the benchmark in the industry.
        </p>
        <br>
        <h4>Create and Upload docker container</h4>
        <div style="overflox-x:scroll; margin-left:-70px;">
        <pre>
        // check if docker installed or not
        $ docker version 
        // run will get the image from docker-hub if not present locally 
        $ docker run hello-world
        // list all docker images available locally 
        $ docker image --list
        // -d - run the container in detached mode (in the background)
        // -p 80:80 - map port 80 of the host to port 80 in the container
        // docker/getting-started - the image to use
        $ docker run -d -p 80:80 docker/getting-started
        // see the running docker containers
        $ docker ps
        // stop the container
        $ docker stop <the-container-id>
        // remove the container
        $ docker rm <the-container-id>
        // Building the image from current directory
        // .dockerignore will have all the files you wish not to include
        node_modules
        // inside Dockerfile
        FROM node:16-alpine
        WORKDIR /app
        COPY package.json /app
        RUN npm install -g nodemon
        RUN npm install 
        COPY . /app
        CMD [ 'nodemon', 'index.js' ]
        EXPOSE 8080
        // build the image with tag myimage
        $ docker build -t myimage .
        </pre>
        </div>
        <h4>Create servers with docker-compose</h4>
        <div style="overflox-x:scroll; margin-left:-70px;">
        <pre>
        version: '3'
        services:
        api-server:
            build: .
            image: api-server
            ports:
            - '5000:8080'
            networks:
            - mern-app
            depends_on:
            - mongo
        mongo:
            image: mongo:3.6.19-xenial
            ports:
            - "27017:27017"
            networks:
            - mern-app
            volumes:
            - mongo-data:/data/db
        networks:
        mern-app:
            driver: bridge
        volumes:
        mongo-data:
            driver: local
        // start the containers with the above configurations
        $ docker-compose up
        // stop the containers started with docker-compose
        $ docker-compose down
        </pre>
        </div>
        <br>
        <div style="margin-left:0px">
        <h4>Deploy with Kubernetes (minikube)</h4>
        <img src="data/images/others/kube.jpeg" height="350" width="550"/>
        </div>
        <div style="margin-left:-70px; overflox-x:scroll;">
        <pre>
        # DeployWithKubernetes
        docker build container
        $ docker build -t app-1-k8s:1 .
        Deploy on kubernetes with minikube, minikube is a single node cluster made for
        testing purpose, minikube requires virtualbox or hyperviser (virtual machine) as well to run on local system
        check the minikube working or not by checking it's version
        $ minikube version
        start the cluster on local machine
        $ minikube start 
        check the status of nodes on kubernetes cluster with kubectl, a command line tool  
        $ kubectl get nodes
        To use docker images in kubernetes you need to run 
        $ eval $(minikube docker-env)
        Important note: You have to run eval $(minikube docker-env) on each terminal you want to use, since it only sets the environment variables for the current shell session.
        apply the kubernetes configurations set in K8s/main.yaml to the cluster
        $ kubectl apply -f K8s/main.yaml
        open minikube dashboard in another window
        $ minikube dashboard
        run the 'express-test-service' by
        $ kubectl get svc
        NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)          AGE
        express-test-service   LoadBalancer   10.104.31.77   10.104.31.77   6100:32415/TCP   7m3s
        kubernetes             ClusterIP      10.96.0.1      < none >         443/TCP          44h
        access the express app in your web browser with http://10.104.31.77:6100/
        $ curl 10.104.31.77:6100
        {'message':'Welcome : express-test-app-68469d95c7-h75h8 to app-1 '}
        incase EXTERNAL-IP of express-test-service stay in pending state use the following commnd
        because minikube doesn't provide the loadbalancer. To run the service you need loadbalancer
        $ minikube tunnel


        ### main.yaml
        apiVersion: v1
        kind: Service
        metadata:
        name: express-test-service
        spec:
        selector:
            app: express-test-app
        ports:
        - protocol: \"TCP\"
            port: 6100
            targetPort: 3010
        type: LoadBalancer
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
        name: express-test-app
        spec:
        selector:
            matchLabels:
            app: express-test-app
        replicas: 2
        template:
            metadata:
            labels:
                app: express-test-app
            spec:
            containers:
            - name: express-test-app
                image: app-1-k8s:1
                imagePullPolicy: Never
                ports:
                - containerPort: 3010


        ### Dockerfile
        FROM node:16-alpine
        WORKDIR /app
        COPY package.json /app
        RUN npm install -g nodemon
        RUN npm install 
        COPY . /app
        CMD [ \"nodemon\", \"index.js\" ]
        EXPOSE 3010


        ### .dockerignore
        node_modules

        </pre>
        </div>
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
        <tr><td>Docker Full</td><td>Deploy</td><td><a target="_blank" href="https://www.youtube.com/watch?v=3c-iBn73dDE">docker-full</a></td></tr>
        <tr><td>Kubernetes Full</td><td>Deploy</td><td><a target="_blank" href="https://www.youtube.com/watch?v=X48VuDVv0do">kubernetes-full</a></td></tr>
        </table>
        <h3> Code for Docker/Kubernetes </h3>  
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Code Name</th><th> Code URL</th></tr>
        <tr><td>Docker Compose Nodeapp deploy</td><td> <a target="_blank" href="https://github.com/yashp241195/DeployWithDockerCompose" >deploy-docker-compose</a> </td></tr>
        <tr><td>Kubernetes Deploy</td><td> <a target="_blank" href="https://github.com/yashp241195/DeployWithKubernetes" >deploy-with-kubernetes</a> </td></tr>
        </table>


        `
    },
    {
        Title:"DevOps , AWS , Terraform , Gitlab CI",
        tags:"#devops #ci #aws #deployment #programming #tutorial",
        Blog:`
        <h4>Deploy EC2 on AWS with Terraform</h4>
        <p>Terraform is an infrastructure as code (IaC) tool that allows you to build, change, and 
        version infrastructure safely and efficiently. This includes low-level components such as 
        compute instances, storage, and networking, as well as high-level components such as DNS entries, 
        SaaS features, etc.
        </p>
        <div style="margin-left:-70px;">
        <pre>
        Deploy EC2 instance on AWS with terraform
        $ terraform init
        $ terraform plan -out=myplan
        $ terraform apply
        $ terraform destroy
        
        ### inside main.tf

        /*
        // static way, just for testing purpose, not recommended always use
        // environment variables in order to avoid accidental security key leak
        // on VCS like git  

        provider "aws" {
        region = "<region selected in aws account>"
        access_key = "<access key from aws account>"
        secret_key = "<secret access key from aws account>"
        }
        */

        provider "aws" {}

        /*
        set the aws provider info with environment variables
        export AWS_ACCESS_KEY_ID="<access key from aws account>"
        export AWS_SECRET_ACCESS_KEY="<secret access key from aws account>"
        export AWS_DEFAULT_REGION="<region selected in aws account>"
        */

        resource "aws_instance" "myfirstserver" {
        ami = "ami-0c2d06d50ce30b442"
        instance_type = "t2.micro"
            tags = {
                Name = "linux"
            }
        }

        output "ec2create" {
        value = << EOT
            AWS terraform for ec2 instance creation :
            
            Name = $aws_instance.myfirstserver.tags.Name 
            ami = $aws_instance.myfirstserver.ami 
            
            id = $aws_instance.myfirstserver.id 
            public ip = $aws_instance.myfirstserver.public_ip 

            EOT
        }
        </pre>
        </div>
        <br>
	<h4> Gitlab CI </h4>
        <br/>
        <div>
        GitLab CI/CD is the part of GitLab that you use for all of the continuous methods (Continuous Integration, Delivery, and Deployment). With GitLab CI/CD, you can test, build, and publish your software with no third-party application or integration needed.
        </div>
        <img src="data/images/others/gl-ci.png" width="600" />
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <h3> Code for AWS Terraform </h3>  
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Code Name</th><th> Code URL</th></tr>
        <tr><td>AWSTerraformEC2</td><td> <a target="_blank" href="https://github.com/yashp241195/AWSTerraformEC2" >AWSTerraformEC2</a> </td></tr>
        </table>
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>Terraform Intro</td><td>DevOps</td><td><a target="_blank" href="https://www.youtube.com/watch?v=l5k1ai_GBDE">terraform-intro</a></td></tr>
        <tr><td>Terraform (AWS)</td><td>DevOps</td><td><a target="_blank" href="https://www.youtube.com/watch?v=SLB_c_ayRMo&t=19s">terraform-aws</a></td></tr>
        <tr><td>Gitlab CI</td><td>DevOps</td><td><a target="_blank" href="https://www.youtube.com/playlist?list=PL6iUkDSEH9SumTY7OSLmcMeFmRtQsQvNn">gitlab-ci</a></td></tr>
        <tr><td>AWS Cloud Full</td><td>DevOps</td><td><a target="_blank" href="https://www.youtube.com/watch?v=dDN-t69sa3U">aws-great-learning</a></td></tr>
        </table>


        `
    },
    {
        Title:"Machine Learning , Movie Recommendation",
        tags:"#machinelearning #python #programming #tutorial #project",
        Blog:`
        <h4>Machine Learning</h4>
        <p>
        Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at 
        predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to 
        predict new output values.
        </p>
        <h4>Movie Recommendation</h4>
        <p>
        Machine Learning concepts to quick movie recommendation system (Netflix) web application, 
        made in order to teach my teammates how to implement ML/AI algorithms on web. 
        UI Designing : Figma, Frontend: Javascript (pure), backend: Python Flask, 
        Documentation: Swagger, ML/AI Algorithms for movie recommendations : Cosine Similarity (Content based filtering) implemented via scikit, numpy, pandas. 
        Downloaded 5000 movies poster's images urls into csv file automatically via Selenium Py web crawler.
        </p>
        <div style="margin-left:-50px">
        <img src="data/images/ml/projects06.jpeg" height="500" width="650"/>
        </div>
        <img src="data/images/ml/ml2.jpg" height="250" width="250"/>
        <img src="data/images/ml/ml3.jpg" height="250" width="250"/>
        <img src="data/images/ml/ml4.jpg" height="600" width="550"/>
        <div style="margin-left:10px">
        <img src="data/images/ml/ml5.jpg" height="550" width="510"/>
        </div>
        <div style="margin-left:10px">
        <img src="data/images/ml/ml7.jpg" height="550" width="510"/>
        </div>
        <div style="margin-left:10px">
        <h4>Collecting movie data from Google with SeleniumPy</h4>
        <img src="data/images/ml/ml6.jpg" height="550" width="510"/>
        </div>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <h3> Code for Machine Learning </h3>  
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Code Name</th><th> Code URL</th></tr>
        <tr><td>Movie Recommendation</td><td> <a target="_blank" href="https://github.com/yashp241195/movie_recommendation" >movie-recomm-ml</a> </td></tr>
        <tr><td>Machine Learning-basics</td><td> <a target="_blank" href="https://github.com/yashp241195/MachineLearningTutorials" >ml-tutorials</a> </td></tr>
        </table>
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>Machine Learning Tutorial</td><td>Machine Learning</td><td><a target="_blank" href="https://www.youtube.com/watch?v=OuPMVdski3E">ml-basics-greatlearning</a></td></tr>
        <tr><td>RESTapi Python Flask</td><td>Web</td><td><a target="_blank" href="https://www.youtube.com/watch?v=s_ht4AKnWZg">flaskPy</a></td></tr>
        <tr><td>Movie Recommendation Tutorial</td><td>Machine Learning</td><td><a target="_blank" href="https://www.youtube.com/watch?v=XoTwndOgXBM">ml-movie-recommendation</a></td></tr>
        </table>



        `
    },
    {
        Title:"Blockchain , Simple Bank",
        tags:"#blockchain #solidity #programming #tutorial #project",
        Blog:`
        <h4>Blockchain</h4>
        <p>
        Blockchain is a system of recording information in a way that makes it difficult or impossible to change, 
        hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated 
        and distributed across the entire network of computer systems on the blockchain.
        </p>
        <br>
        <h4>Blockchain Bank</h4>
        <p>
        Concept to blockchain driven banking system, made in order to teach my teammates how to implement smart contracts and cryptocurrencies via blockchain, Frontend: jQuery, web3js library (interfacing between UI and smart contracts). Meta-mask Wallet for user transactions on blockchain. Backend: Smart Contracts Programming in Solidity, Blockchain deployed on RinkybyTest Network.
        </p>
        <div style="margin-left:-50px">
        <img src="data/images/bl/projects07.jpeg" height="500" width="700"/>
        </div>
        <div style="margin-left:40px">
        <img src="data/images/bl/bl2.png" height="200" width="400"/>
        </div>
        <div style="margin-left:40px">
        <img src="data/images/bl/bl3.jpg" height="500" width="500"/>
        </div>
        <div style="margin-left:40px">
        <img src="data/images/bl/bl4.jpg" height="500" width="500"/>
        </div>
        <div style="margin-left:40px">
        <img src="data/images/bl/bl5.jpg" height="500" width="500"/>
        </div>
        <div style="margin-left:40px">
        <img src="data/images/bl/bl6.jpg" height="500" width="500"/>
        </div>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <h3> Code for Blockchain </h3>  
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Code Name</th><th> Code URL</th></tr>
        <tr><td>Blockchain Tutorial</td><td> <a target="_blank" href="https://github.com/yashp241195/blockchain_tutorial" >blockchain-tutorial</a> </td></tr>
        <tr><td>Blockchain Bank</td><td> <a target="_blank" href="https://github.com/yashp241195/Simple-Bank-Blockchain" >blockchain-bank</a> </td></tr>
        </table>
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>Solidity</td><td>Blockchain</td><td><a target="_blank" href="https://www.youtube.com/watch?v=ipwxYa-F1uY">solidity-dapp-university</a></td></tr>
        <tr><td>Solidity(text tutorial)</td><td>Blockchain</td><td><a target="_blank" href="https://www.dappuniversity.com/articles/solidity">solidity-dapp-article</a></td></tr>
        <tr><td>Web3JS</td><td>Blockchain</td><td><a target="_blank" href="https://www.youtube.com/watch?v=2TV0r94p8OY&list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA">web3JS</a></td></tr>
        <tr><td>Blockchain-Full</td><td>Blockchain</td><td><a target="_blank" href="https://www.youtube.com/watch?v=UqQMSVfugFA&list=PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-">blockchain-full-telusko</a></td></tr>
        </table>



        `
    },
    {
        Title:"Instagram Marketing automation with Selenium Py",
        tags:"#marketing #python #programming #tutorial #project",
        Blog:`
        <h3>Instagram Marketing automation with Selenium Py</h3>
        <p>
        Instagram bots using Selenium Py (web crawling) beautifulSoup Py(web scraping) made to manage insta, 3 bots majorly
        <br>1. unfollow who don't follow back 
        <br>2. auto insta story viewer 
        <br>3. auto like all posts on homepage        
        </p>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <h3> Code for InstaBot </h3>  
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Code Name</th><th> Code URL</th></tr>
        <tr><td>Instagram Bots</td><td> <a target="_blank" href="https://github.com/yashp241195/InstagramSeleniumBot" >insta-bots</a> </td></tr>
        </table>
        <br><br>  
        <div>
        <img src="data/images/ig/ig1.jpg" height="500" width="500"/>
        </div>
        <div>
        <h3>Unfollow who don't follow back</h3>
        <video controls="controls" height="500" width="500" src="data/images/ig/ig2.mp4">
            Your browser does not support the HTML5 Video element.
        </video>
        </div>
        <div>
        <img src="data/images/ig/ig3.jpg" height="500" width="500"/>
        </div>
        <div>
        <h3>Automatic Instagram stories Viewer</h3>
        <video controls="controls" height="500" width="500" src="data/images/ig/ig4.mp4">
        Your browser does not support the HTML5 Video element.
        </video>        
        </div>
        <div>
        <h3>Autolike Posts on homepage</h3>
        <img src="data/images/ig/ig5.jpg" height="500" width="500"/>
        <video controls="controls" height="500" width="500" src="data/images/ig/ig6.mp4">
        Your browser does not support the HTML5 Video element.
        </video> 
        </div>

        `
    },
    {
        Title:"Devhelp linux helper tool for faster software development",
        tags:"#linux #programming #tutorial #project",
        Blog:`
        <h4>Devhelp linux based notemaking helper tool for faster software development</h4>
        <p>
        Devhelp is a command line linux based notemaking helper tool to help with the code, 
        I kept forgetting syntax and process and everything while creating the basic app in
        express.js and react.js and git commands so this is a very simple tool helps you remember
        everything
        </p>
        <img src="data/images/others/devhelp.jpg" height="500" width="800"/>
        <br>
        <h4>How to Install</h4>
        <br>Install guide ..
        <br>create the file in
        <br>$ sudo gedit /usr/bin/devhelp
        <br> add the below code to the "devhelp" file, basically add the path to devhelp folder
        <br> /home/yash/Desktop/myapps/devhelp/devhelp.sh $1 $2
        <br> save the file
        <br> $ sudo chmod +x /usr/bin/devhelp
        <br> done !!
        <br> Now run the devhelp from anywhere
        <br>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <br>
        <h4>Devhelp Download</h4>
        <br>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>App Name</th><th>Download URL</th></tr>
        <tr><td>Devhelp</td><td><a target="_blank" href="https://github.com/yashp241195/devhelp">devhelp-download</a></td></tr>
        </table>


        `
    },
    {
        Title:"UI Design with Figma , Pinterest Example",
        tags:"#ui #ux #tutorial #project",
        Blog:`
        <h4>UI Design with Figma , Pinterest Example</h4>
        <div style="margin-left:-30px;">
        <img src="data/images/others/projects02.jpeg" height="450" width="600"/>
        </div>
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
        <tr><td>Design Crash Course</td><td>UI UX</td><td><a target="_blank" href="https://www.youtube.com/playlist?list=PLDtHAiqIa4wa5MBbE_XDoqY51sAkQnkjt">uiux-abnux</a></td></tr>
        <tr><td>Evolution of Web Design</td><td>UI UX</td><td><a target="_blank" href="https://www.youtube.com/watch?v=XYTwYmOjqQs">web-design</a></td></tr>
        </table>
        	

        `
    },
    {
        Title:"Design Thinking , Product Design DSAEE + SSTCC methodology",
        tags:"#productdesign #tutorial",
        Blog:`
        <h4>Design Thinking</h4>
        <p>
        Design thinking is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems 
        and create innovative solutions to prototype and test. Involving five phases Empathize, Define, Ideate, Prototype and Test it is 
        most useful to tackle problems that are ill-defined or unknown.
        </p>
        <div style="margin-left:0px;">
        <img src="data/images/others/dt.jpeg" height="150" width="300"/>
        </div>
        <h4>DSAEE Iterative process for Product Design</h4>
        <br><b>D : Define</b> : define the problem statement
        <br><b>S : Search</b> : Search the existing solutions and check their efficiencies
        <br><b>A : Alter</b> : Find the alternative way to provide the same value or same benefits to the customer
        <br><b>E : Explore</b> : Explore all alternative ways to provide same value to customer
        <br><b>E : Evaluate</b> : Evaluate all the ways and pick the best
        <br>
        Obviously, the entire problem wasn't solved yet just with one iteration so
        define the problem statement as the best evaluated solution's limitations.
        <br>
        Re iterate - D.S.A.E.E. till you find your perfect solution.
        <br>
        <br>
        <h4>SSTCC Features Selection</h4>
        <p>With DSAEE you have found your problem statement. Now it's time to design
        the product with SSTCC technique.
        </p>
        <br><b>S : Select</b> : Select the user of the product
        <br><b>S : Suggest</b> : Suggest user various options to operate the product
        <br><b>T : Transact</b> : Do the work or the trasaction with the product
        <br><b>C : Cluster</b> : Cluster multiple features according to their functionalities
        <br><b>C : Combine</b> : Combine all similar features.
        <br><br>
        This entire subject of Product Design and Design Thinking is case study based, you need 
        to find resources which show practical use cases.
	<br>
        <h4>Creation of a great product,</h4>
        <p>(i) Marketing funnel and Product Design (UI/UX/Features etc.) : You need to know what kind of users are going to use your product and which is the best distribution channel for it's marketing.</p>
        <p>main focus : Customers (Before Series A)</p>
        <p>for software,</p>
        <p>a. if user is non techie,</p>
        <p> -> build B2C web/app and distribute it over playstore, website, social media.</p>
        <p> -> Product design must be very simple and user must not be given many options to do things as too many options might confuse a normal user. </p>
        <p>b. if user is techie but do analysis or operational work majorly -</p>
        <p> -> build studio apps like VS Code, MS Office, AutoCAD, dashboard apps etc. B2B entreprise software must be made according to the operational need of companies belong to similar domain.</p>
        <p> -> Product Design must be made in consideration of ability to get trained on software. </p>
        <p>c. if user is techie,</p>
        <p> -> build command line tools only say npm libraries or gaming, graphic engines etc and distribute it over the npm, linux package managers etc.</p>
        <p> -> Product Design can go as complex as needed to get things done efficiently.</p>
        <p>This is 50% of the work if you haven't done the above analysis properly then your whole engineering effort will go waste.</p>
        <p> (ii) Product Development(Tech Stack) and Recruitment(organizational structure and career growth):</p>
        <p>You need to know the most efficient product development strategies according to the scale of your product and you also need to figure out whether people who can build and sustain the product exists in the market or not 
        and how hard it is for you to find and recruit those skilled people.</p>
        <p>main focus : Employees (Post Series A investment)</p>
        <p>In the software world, the rule of 1:10:100 is well accepted. It says that if the cost of fixing a defect in the requirement/design stage is 1, it will cost 10 during testing and 100 during user acceptance testing. 
        The cost of bugs detected after launch can be enormous and sometimes fatal for the project/company. The same is true for every product design. </p>
	<p>Every Giant Tech is a marketing machinery primarily and then everything else.</p>
	<p>Marketing machinery : help layman discover most relevant options possible with least amount of inputs with the help of their platforms.</p>
	<p>Google : Help people find most relevant information they &quot;search&quot;. Are Google search results really good enough to find domain specific information ? No. They help people &quot;redirect&quot; towards the most relevant.</p>
	<p>Amazon Help people find most relevant product they &quot;search&quot;. Are Amazon results really good enough or help you make purchasing decision completely ? No. They help people &quot;redirect&quot; towards the most relevant.</p>
	<p>The same is true for Facebook, Apple, Nike, Coke, Paypal etc. They all are marketing machinery primarily interested to pump as many possible relevant products belong to their marketing funnel.</p>
        `
    },
    {
        Title:"Product Managment, MVP , Agile , Scrum board with Trello ( Jira )",
        tags:"#productmanagement #tutorial #mvp",
        Blog:`
        
        <h4>Product Management</h4>
        <p>
        Product management is an organizational function that guides every step of a product's lifecycle from development to positioning 
        and pricing by focusing on the product and its customers first and foremost.
        </p>
        <h4>MVP, Minimum Viable Product</h4>
        <p>
        A minimum viable product (MVP) is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development.
        </p>
        <div style="margin-left:0px;">
        <img src="data/images/others/mvp.png" height="150" width="300"/>
        </div>
        <h4>Minimum Viable Product for Silly Humans Freelancers Community</h4>
	<a href="https://sillyhumans.cyclic.app/sh.html" target="_blank"> click here </a>
	<br><br>
        <div style="margin-left:0px;">
        <img src="data/images/others/silly-mvp.png" height="500" width="500"/>
	<br/>
        </div>
        <h4>Agile methodology</h4>
        <p>
        Agile methodology is a way to manage a project by breaking it up into several phases. It involves constant collaboration 
        with stakeholders and continuous improvement at every stage. Once the work begins, teams cycle through a process of planning, 
        executing, and evaluating. Continuous collaboration is vital, both with team members and project stakeholders.
        </p>
        <h4>SCRUM Board with Jira</h4>
        <div style="margin-left:0px;">
        <img src="data/images/others/jira.png" height="350" width="600"/>
        </div>
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
        <tr><td>Agile Full Course</td><td>Agile</td><td><a target="_blank" href="https://www.youtube.com/playlist?list=PLz-zP8qAkT_2yJGisxALe1DRWsUEcRXxI">agile-methodology</a></td></tr>
        <tr><td>Product Management Basics</td><td>Product Management</td><td><a target="_blank" href="https://www.youtube.com/watch?v=poLzjLt2yqU">product-management-full-basics</a></td></tr>
        <tr><td>Product Management - Shravan Tickoo</td><td>Product Management</td><td><a target="_blank" href="https://www.youtube.com/watch?v=IGJ5id-jty0&list=PLYS-T6kriqV5DQ7B5oX4nYvHAmP2pbMcv">product-management-shravan-tickoo</a></td></tr>
        </table>
        `
    },
    {
        Title:"Social Media Marketing",
        tags:"#marketing #businessgrowth #tutorial",
        Blog:`
        <h3>Social Media Marketing Strategies</h3>
        <br>
        <b>Stage I : Get people know who you are, your interests and your intentions. (500 members, 1-8 months)</b> 
        <br>
        <br>Q. How to get first 100 people without any knowledge of platform and connections?
        <br><br>- Find a group where more than 1,000-10,000 people exists
        <br>- Start engaging with people who has similar interests
        <br>- Get yourself comfortable with the platform and learn how to use all of it's functionality
        <br>- Start making personal connections and start inviting them to your own group.
        <br>- You must need to have conversation with 20 people atleast and try to partner with 1-2 people atleast.
        <br>- Start providing value for 2 weeks on regular basis and start growing the group/page till 100.
        <br><br>You can do it faster if you invite people you already know and also familiar with the platform 
        you created your page/group, it could be done in 10 days.
        <br><br><b>Timeline (after 0 people):</b>
        <br> 	
        <br>min : 10 days
        <br>max : 2 months
        <br><br><b>Helplink Discord Server: 1 Month, 100 members</b>
        <br><br><b>Don't s </b>
        <br>
        <br>- Start asking people too much personal questions, it took time to mature any kind of relationship.
        <br>- Start selling or waiting for the right target audience.
        <br>
        <br>Q. How to start providing consistently bare minimum value on daily basis.
        <br><br>You need to find 3-5 people who are interested to grow with you.
        <br> - Start analyzing the demand like what exactly people are looking for on the platform and what you can provide them
        <br> - Start thinking what you can provide from your end like advise or online resources etc.
        <br><br> If you are already a user of that platform and you know what your community wants then it could be done in next 21 days
        <br><br> <b>Timeline (after 100 people)</b> :
        <br><br>min : 21 days.
        <br>max : 6 months.
        <br><br><b>Netmesh Discord Server : 500 members, 4 months</b>
        <br><br><b>Don't s </b>
        <br><br>- doing everything by your own self without forming any genuine relationships.
        <br>- atleast 5 people must show interest and respond properly in your work regularly.
        <br>- finding the perfect solution to offer, kind of reason why people are unable to even start as they start expecting a lot from their own self
        <br><br>
        <br><b>minimum time : 10 days + 21 days = 1 months</b>
        <br><b>maximum time : 2 months + 6 months = 8 months</b>
        <br><br>
        <b>Stage II : People must know you are enough valuable to get the regular things done (10,000 members, 1-2 years)</b>
        <br>
        <br>Q. How to get people know what problem you are trying to solve.
        <br><br>- You need to start providing the existing or little improved version of solutions
        <br>- At least few people must start believing in your capabilities.
        <br>- You must know your target audience, you can't invite everyone.
	    <br><br>If you already know your target audience and strategy to invite them then you can do it within next 15 days.
        <br><br><b>Timeline (after 500 people) :</b>
        <br><br>min : 15 days
        <br>max : 4 months
        <br><br><b>Sigo Instagram Page : 2 months (after 500), 1000 members</b>
        <br><br><b>Don't</b>
	    <br><br>- Inviting everyone or not having a plan
	    <br>- Overthinking about yourself and judging your self worth on the basis of other people opinion like you aren't good enough. 
        It might be true that you aren't good enough but you will become good enough soon.
        <br><br>
        <b><i>Stage I and Stage II are strictly for making people aware about your existence and your intentions. Don't overthink and expect much. 
        You don't need to be talented in order to do this you just need consistency and good behaviour towards people, nothing more</i></b>
        <br><br> Stage I and II can be done in a single day as well if you find someone else doing similar thing (50% similar to what you want to pursue) 
        but you need strategy to migrate current audience into new vision. You can do it by
        <br><br>(i) Partnership. (Making the account owner as marketing partner, it is the best thing you can do as business isn't independent entity, the business requires multi dimensional solutions)
        <br>(ii) Acquire the account with the help of some genuine 3rd party service like Social Tradia (for Instagram) where people buy and sell accounts legit way with the help of some third party service who does things like that. They will do the background verification and all kinds of things for you so that you don't have to worry about it later.
        <br><br>
        <b>Stage III : People must know that your are trustworthy and reliable</b>
        <br><br>Q. Which is the right platform or where I can find my target audience more easily ?
        <br>- The selection of platform plays key role, if you want to grow more faster and better then you must know the best platform for you.
        <br><br>Q. How to start providing enough decent solutions ?
        <br>- by improving skills and knowledge about the solutions you are providing
        <br>- by letting people know that you deliver on time, your are trustworthy and reliable.
        <br>- by making better content and branding strategy to get more people interested in you.
        <br><br><b>Timeline (after 1000+)</b>
        <br><br>min : 4 months.
        <br>max : 2 years.
        <br><br><b>Mona.marketing : 11 months (after 1000+), 10,000 members</b>
        <br><br>
        Stage III could be done in a single day by official partnership or official acquire but it requires more thinking 
        because migration of the huge audience to new vision is difficult and generating the engagement of similar kind is also 
        difficult and existing account has to be 80% similar with your vision. You may get the social account cheap but you won't 
        be able to utilise and sustain it's growth and engagement. Consult social media marketing manager or someone in domain 
        before doing such things and pay them to strategize things up because you need a lots of planning to make that shift successfully. 
        <br><br>
        <b>Stage IV : People must know that you are very unique in your offerings and your understanding regarding the platform must be really good. 
        You are equivalent to a professional media company. (1,00,000 members, talent+marketing budget dependent)
        </b>
        <br><br>
        <br>Q. How to provide real value ?
        <br><br>- You need original thinking and creativity.
        <br>- You have to become exceptionally good at your offerings and you are equivalent to a media company.
        <br>- You need a business model and also a team to manage things more efficiently.
        <br>- You need to figure out a way to increase your engagement with paid promotions, advertisements and collaborations.
        <br><br><b>Timeline (after 10 K+ people):</b>
        <br><br>min : 3 months
        <br>max : 5 years
        <br><br><b>Ekta Dixit : 1 year (after 10,000 members), 1,00,000 members</b>
        <br><br>Stage IV can't be done in a single day and it needs some real talent to do such thing consistently. You can make that 
        person brand ambassador and key promoter to get the similar results for your company. 
        <br>
        `
    },
    {
        Title:"App Marketing",
        tags:"#marketing #businessgrowth #tutorial",
        Blog:`
        <h3>App Marketing</h3>
        <b>Stage I : Finding the similar app to the app you wish to develop so that you gain market share of that app, because people who would like to use your app or 
        concept won't appear magically.</b>
        <br><br>
        Q. What do you wish to develop ? Is there any app which is used by lots of people similar to your app concept by 30 % ?
        <br><br>
        <b>Delhi Metro Traveler : 10 K+ people</b>
        <br><br>
        I wish to create a journey planner app which plan can tour for me from a given starting point in a way that I don't have to worry about anything while traveling. 
        I started visiting tourist places of Delhi via metro train in 2nd year of my college as it was very easy, convenient and cheap and I don't need permission from my 
        parents for travel as I can get back to the home the same day. The travel structure is similar even if we visit some different city, there is always a need of place 
        to stay within the city and we need to get back to that place at the end of the day as well. During travelling, I found few problems like no information about nearby 
        toilets and parking within metro app and also the list of nearby tourist places, shopping malls, places to eat etc to the particular metro station. What will happen 
        if I create a journey planner which tells me step by step like where to go in what sequence so that I can eat good food, always found parking and toilets in the routes 
        in order to make my journey super convenient. I realised that if I am able to create such thing then I will be able to fulfil my dream to become traveller who travelled 
        across 192 countries with the help of money I earn from ads. I built that app in Jan 2017 (3rd year-6th semester and it took me 2 months), I had no idea about how business 
        works and no idea about how engineering works also or the amount of technical expertise and investment required to create such thing and also the potential revenue it can 
        bring if implemented properly as I was a 13 year naive old teenager girl who got some freedom to travel in her own city and nearby but still I manage to think like what 
        should I need to do in order to improve the reach of my app so I thought of creating Delhi metro app with features like train routes, nearby toilets, parking and places to 
        visit and also embed the web browser to search other things with the help of search buttons.
        <br><br>
        <b>Timeline :</b>
        <br><br>
        <br>100 - 1 week
        <br>1,000 - 3 weeks
        <br>10,000 - 2 months
        <br><br>
        <b>Stage II : Finding the way to grow and sustain more users with the help of users feedback and responses.</b>
        <br><br>
        <b>Khabri : 100 K+ users (Currently 2 Mn+ users with 2 Mn USD funding)</b>
        <br><br>
        Q. How did Khabri get its first set of users?
        <br><br>
        The idea of the app was to broadcast news. Therefore, we started with broadcasting small snippets of audio news in an easily consumable manner. We got family and friends to download the app. The first 5000 - 7000 downloads were purely word of mouth.
        Once we exhausted the downloads from all our contacts. We had a dataset that we could study. But, the problem was the information did not allow us to draw lines. One thing that we learned as a B2C company was not to try and solve all the issues at the same time.
        Therefore, we targeted at getting 50K downloads within the next 3 months. This dataset would allow us to perform analytics. But the question was how do we get 50K downloads in 3 months?
        <br><br>The big break ...
        <br><br>For an app like ours, we need advertising. That was the only way by which more people would reach out to us. But, how to promote a B2C company organically?
        We reached out to journalists from different magazines and newspapers to write about our app. But, at this stage, we were still curating news articles, thereby making it impossible for press giants to write about us. It was against their policy to promote a news channel.
        We then realized the mistake that we were making ...
        <br><br>The main idea of the app was to promote content in the national language so that it reaches out to even the rural part of India. In a country like ours, 70% of the population are from rural areas. Once we cracked this, we went after the rural press. We contacted 
        journalists from small towns and villages and asked them if they can spread the word. After this, we started gaining traction. We were getting about 2000 - 4000 downloads in a day.
        Now that we had the data that we needed, we wanted to grow. When it came to growth, we tried a lot of strategies - blogging, student referrals, Social media groups, etc. But nothing gave us the traction like PR.
        On analyzing deeper, we noticed something unique about the viewership. It dawned to us that our users were using our app to gain General Knowledge. This opened a lot of verticals for us. Until then, the app was primarily a news channel. This opened the horizons for a lot of 
        categories such as motivation, self-help, etc.
        <br><br>Now that we had cracked the market, we needed creators. It was difficult to get creators because our user base was still less. And, we couldn't acquire users because we did not have enough content.
        At this point, we started looking out for pod-casters. We noticed that a lot of the creators were posting content on Youtube with a static image because there was no platform for audio.
        <br><br>We identified the top 20 creators and suggested that they publish content on another platform such as Khrabi in addition to Youtube. Some of them agreed and along with these creators came their user base.
        Pulkit Sharma and Aankit Roy.



        `
    },
    {
        Title:"Entrepreneur Growth Cycle and Business Development Strategy",
        tags:"#business #businessgrowth #tutorial",
        Blog:`
        <h4>Business Development Strategy</h4>
        <div style="margin-left:-30px;">
        <img src="data/images/others/projects01.jpeg" height="450" width="600"/>
        </div>
        <p>
        <br><b>Founder's Knowledge and wisdom</b> will determine the kind of idea
        they bring the in market. their wisdom and knowledge will determine the 
        <b>ideation strategy</b> like "what kind of idea should be pursued at what stage with what kind
        of available resources". Idea determine the <b>recruitment strategy</b> like
        you can't hire a lots of talented people if your business idea isn't scalable
        or require that expertise, you can't hire a student from IIM or business school
        if you are opening a local coffee shop or anything like that, when your coffee shop
        scale or made it's expansion maybe then we will going to need that person for making
        strategies but that person is irrelevant for your current stage. Your recruitment strategy
        will determine the kind of training people need or <b>training strategies</b>.
        Your training strategy will determine the development strategy of product or service like
        what kind of product or service you can build with current resources in order to survive 
        and produce <b>profits</b> in the business. Then last part is <b>leadership and culture</b>,
        leadership and culture determine the long term efficiency and scalability of the business.
        </p>
        <h4>Entrepreneur Growth Cycle</h4>
        <div>
        Every business is a service business, products are used to boost the services in order to
        generate more profits. So, we are talking about entrepreneur growth cycle in context of 
        service business. 
        <br><b>Groping</b> : 
        <br>Q. How to generate revenue ? 
        <br>Q. How to find work ? 
        <br> Ability to find work and revenue generation depends upon the geo-political situation of the 
        your country. The "ease of doing business" is really a big issue if you are starting out as an 
        individual. Business is a team work so, if geo political situation is bad then only thing which 
        can help you out is your relationship building abilities because in early stage you don't need
        talented people or you need to create some genius level of product or service. You need mediocre 
        stuff. You can become sales person, retailer or service provider at this level because building 
        product/service business requires expertise, capital and education which is preferrable if you 
        are a researcher, inventor or a specialist who can get the funding.
        <br><b>Early Success</b> : 
        <br>Q. What is the better way to do busines? 
        <br>Q. Where to find trustworthy people ?
        You need to find better way to do the business in order to produce more profit either by using some
        product or service of other companies. If you are a product company then you will start from this stage,
        groping stage will be done by product validation as product is created in order to provide better way to 
        do business. You need trustworthy people whom you can trust because daily business operations till now 
        doesn't require very much business expertise. Incapability to find trustworthy people is definite way for long 
        term business failure because you need people who prevent the failure of business at every single stage. 
        <br><b>Growth Acceleration</b> : 
        <br>Q. How to find talented people who can take responsibilities?
        You need to find the talented people who can help you accelarate your business 
        growth. Trustworthy people aren't sufficient enough for growth phase but without trustworthy, talented 
        people doesn't matter much. Career is a transition, you need a way to help them grow if you really want
        them to stick around.  
        <br><b>Reorientation</b> : 
        <br>Q. How to build standard business processes?
        You need to build the standard protocols, systems and processes for everything in 
        business so that you can measure the business in excel sheets and do analysis. Without trustworthy and 
        talented people your systems and processes won't work because systems, processes are always designed in
        consideration of the people. 
        <br><b>Corporatization</b> : 
        <br> How to build a brand image ?
        You need to build the brand image of your organization so that people would like 
        to invest in you, bank will lend you loans easily and talented people also show their interest to join you. 
        <br><b>Liberation</b> : 
        Q. Who will become the successor for my business?
        You need a way to figure out the process of selection of your successor who can take your business to next level.
        <br><br>
        <b>
        Each stage has different resources and different challenges, 
        major problem occur if you try to focus on different problem
        at the different business growth phase like you can't work heavily 
        on systems and processes if your business requirements aren't very clear.
        </b>
        </div>
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
        <tr><td>Entrepreneur Growth Cycle</td><td>Business</td><td><a target="_blank" href="https://www.youtube.com/watch?v=3evLs2-7IHo">entrepreneur-growth-cycle</a></td></tr>
        </table>
        `
    },
    {
        Title:"Startup Investment Fundamentals",
        tags:"#business #businessgrowth #tutorial",
        Blog:`
        <h4>Startup Investment Fundamentals</h4>
        <p>
        Lets do some startup investor mathematics for 5 years of return on investment,
        <div style="margin-left:-70px">
        <pre>
        >>> 1.1**5 # Get the amount from bank of FD
        1.6105100000000006
        >>> 1.2**5 - # Get the amount from mutual funds
        2.4883199999999994
        >>> 1.3**5 - # Get the amount from Stock market
        3.7129300000000005
        >>> 1.4**5 - # Minimum amount of return an investor want
        5.378239999999998
        >>> 1.5**5 - # Average amount of return an investor want
        7.59375
        >>> 1.6**5 - # Maximum tangible amount of return an investor can ask
        10.485760000000003
        </pre>
        </div>
        <p>
        If your idea is not scalable or solving some really bigger issue nobody will going to help you or invest their money on you.
        What problem are you solving as an entrepreneur ? Do you have the matrix to justify the investment you wish to raise ?
        <br>
        PS. Problem means what people consider as a problem, not actual problems of people.
        </p>
        </p>
        <br>
	<p>Start-up Pitch Deck Guide:</p>
	<p>1. Explaining the Problem : Explain it with short bullet points if possible.</p>
	<p>A Quick visual story which explain the problem statement correctly might be helpful.</p>
	<p>If investor doesn't consider the problem you are talking about as a &quot;real problem&quot; then it doesn't matter whether you are right or wrong because investors aren't the great economist or genius like Socrates they are regular people with money.</p>
	<p>PS : Problem means what people consider as problem not their actual or real problem.</p>
	<p>If people were that smart to identify their real problems then there might not be any existence of world war, social injustice, climate change, world hunger etc.</p>
	<p>Most start-up pitch got rejected because founders don't do research about &quot;how does an ideal investor should look like for current phase of business&quot; just like you do it for your business &quot;how does an ideal customer should look like for current stage of business&quot;.</p>
	<p>You might think that &quot;negative feedback from investors means you should quit&quot; but you will face the similar challenge while dealing with customers later as they will suggest you to add all unnecessary things to your product or service and even give you very negative feedback without any proper reason but it is your responsibility as a business owner to understand the limitations of your marketing funnel (you can't sell computers hardware inside restaurant) and current resources.</p>
	<p>Say you started Pizza restaurant and suddenly customer demand Dosa. Will that be feasible for you to add that in your menu? No. You can arrange it by some other local shop or food delivery app but you can't add it in your menu or service.</p>
	<p>You can't be stupid or naive about how society works, entrepreneurship is primarily a social science subject.</p>
	<p>2. Existing Solutions/Products : Mention all the major flaws in the existing solution/product.</p>
	<p>Your answer to the &quot;major flaws&quot; will tell investor about your understanding regarding the problem space and one problem space can contain plenty of products or services. If your problem space matches the problem space investor invests majorly then there might be very high chances that you will hear back from investors even if your idea isn't good enough because investor help you to get in the network of other people operating in similar problem space which open door for new possibilities regarding products, systems, teams, investors etc.</p>
	<p>3. Your Solution/Product : Your solution and product must be able to solve all the major flaws you mentioned above.</p>
	<p>4. Traction : Your current traction of product will convince investor about your execution abilities.</p>
	<p>5. Market : Market size must be big enough and your product must be able to produce 10X or more profits in 5-10 years.</p>
	<p>Top Down : used to show investors the current market segment your product can target and generate revenue</p>
	<p>Bottom Up : used to show investors the new potential markets segments you can target with the help of current product/service you are building in future.</p>
	<p>This is only relevant if you are in Series B/Series C (100 Mn USD Valuation) or above where you have the right strategy and right people at place and market starts trusting your credibility and execution abilities</p>
	<br/>
	<img src="data/images/others/TAM.png" height="450" width="550"/>
	<br/>
	<p>6. Business Model : Mention exactly how you are planning to produce profits or mention your key revenue sources.</p>
	<p>7. Team : Why you? What makes you and your team qualified for solving a particular problem.</p>
	<p>8. Fund-raising plan and objectives : Mention in bullet points what will you do with the money you are asking for.</p>
	<p>Now, You can ask for investments, make negotiations and close the deal. </p>
	Checkout more about pitch deck here : <a target="_blank" href="https://github.com/yashp241195/startup_pitch_deck">startup-pitch-deck</a>
        <br/>
	<br/>
	<img src="data/images/others/pitchweights.png" height="300" width="500"/>
	<br/>
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
        <tr><td>Startup School YC - 2020</td><td>Business</td><td><a target="_blank" href="https://www.youtube.com/playlist?list=PLQ-uHSnFig5PjfCy7mE77XMGhgky9HV3o">startup-yc</a></td></tr>
        </table>
        `
    },
    {
        Title:"Recruitment for startup",
        tags:"#business #businessgrowth #recruitment #tutorial",
        Blog:`
        <h4>Recruitment</h4>
        <p>
        There are 3 major factors to consider.
        <br><br>(i) Character/Integrity : Is that person trustworthy/reliable.
        <br>(ii) Learning Abilities : Is that person hold the ability to learn and think.
        <br>(iii) Execution Abilities : Is that person ready to implement things.
        <br><br>
        Every person will come with different level of learning abilities, 
        execution abilities and character. So, don't expect all characterstics in 
        one person instead try to form a team which possess all 3.  
        <br><br>
        A person with integrity can hold entire together as a leader so 
        it is always wise to give that person first preference in promotion then 
        person with good learning abilities because requirements keeps changing and 
        a person with good learning abilities or strong fundamentals can help 
        you predict what kind of work you are supposed to do in order to produce profits 
        and lastly the execution abilities because business need daily output.
        <br><br>
        Only wise can identify wise so it has a lot to do with you as an individual.
        If you aren't talented you can't hire talented person easily. If you don't have
        the integrity then you can't attract people with high integrity and if people
        can't see you doing things then you can't motivate people to work hard.
        <br><br>
        </p>
        `
    },
    {
        Title:"Mentorship and Leadership, Book Reading",
        tags:"#business #leadership #mentorship #businessgrowth #tutorial",
        Blog:`
        <h4>Mentorship</h4>
        <p>
        The most important point is <b>you can't mentor everyone.</b>. If your mentees 
        are't comfortable to open up then no matter what you do for them you won't be 
        able to bring change in their life because they will not tell you their real problems.
        <br>
        It is impossible to find the right solution without understand the complete problem statement.
        </p>
        <h4>Leadership</h4>
        <p>
        Your ability to take ownership will determine your ability to lead, you
        are supposed to set the example for every change you wish to see in them.
        </p>
        <br>
        <b>How to become better leader and a mentor</b>
        <br>
        <br>(i) Talk to as many people with different backgrounds possible in order to gain 
        perspective. Know about their upbringing, aspirations and desires and thought process behind.
        <br>(ii) Read autobiographies of leaders who changed our world.
        <br>(iii) Study Psychology, human behaviour and mind related books and observe.
        <br>(iv) Study Social Science and history in order to gain better understanding about the culture.
        <br><br>
        <b>Book Reading</b>
        <br><br>One book can help you gain the lifetime experience of a person. Often times people say readers are
        the leaders but how does one can know whether book reading is benefitting them or not in real
        <br>
        If level of next 5 books is higher then previous 5 books you read then growth occur otherwise you are 
        just reading words not experiencing and not improving as a person with the help of book
	<br><br>
        <b>MBA Programme</b>
        <br/>
        <p>There are two types of MBA (only do it from top B Schools, others doesn't worth much)</p>
        <p>(i) General MBA</p>
        <p>(ii) Specialized MBA</p>
        <p>General: main goal is to develop your personality to handle stress and chaos. In institutes like IIM, Harvard etc the whole day is packed with classes, assignment, case studies, group discussions, daily exams of random subjects, presentation etc. This whole chaotic and high stress environment push individuals to set well defined priorities in life and figure out what is right for them up to a certain level.</p>
        <p>Why General MBA?</p>
        <p>If you aren't able to</p>
        <p>-> manage your time properly.</p>
        <p>-> set career priorities.</p>
        <p>-> develop your personality.</p>
        <p>-> get a job in Management Consulting or Investment Banking.</p>
        <p>Why not General MBA?</p>
        <p>-> If you are already good in some domain and have experience as manager.</p>
        <p>-> If you are able to manage your time upto a good level and got experience of good companies already in your resume.</p>
        <p>Specialized MBA :</p>
        <p>main goal is to make person transition from one industry to another.</p>
        <p>Especially made for people who already did management up to a certain level but wish to make transition from one career path to another or who wish to specialize in one domain. Specialize MBA always lag behind industry so things you will learn there won't be much useful.</p>
        <p>Why Specialized MBA?</p>
        <p>If you aren't able to</p>
        <p>-> make transition to another domain and up skill yourself.</p>
        <p>-> Very helpful for people transitioning from Govt sector to private sector (Especially Officers in military, bureaucracy, academia). Doing so give them exposure to international business.</p>
        <p>Why not Specialized MBA?</p>
        <p>-> if you are already getting a job and you have already explored the domain on your own up to a good level as MBA curriculum will always teach obsolete practices, it is good for someone who is new but not for someone who is already in the game.</p>
        <p>b.t.w. Specialized MBA doesn't go waste because course structure overlap a lot with General MBA and it means it contains everything we do in General MBA along with Specialization so it doesn't go waste entirely.</p>
        <p>It is all about knowing what is right for you if you found it without MBA then you don't need one.</p>
        <p>It is more about development of ability for doing the work regardless of your mood because as a manager if you delay the work then entire department will slow down and potentially loose it's profit share from the market place. In worst cases manager's inefficiency can lead to shutting down entire business unit and massive layoffs. Loss in market share can lead to bankruptcy as well.</p>        

        `
    },
    {
        Title:"Sales , Communication Skills ( LIACP ) and myth of introversion",
        tags:"#business #sales #businessgrowth #personalgrowth #tutorial",
        Blog:`
        <h4>Communication skills, LIACP and Sales</h4>
        <p>
        Communications skills is all about your ability to communicate.
        In communication there are two parties involved one who listen 
        and one who speak. When you speak or communicate you must need
        to consider the ability of the listener as well. You can't use
        same example to communicate your message to child which you used 
        for adult. Similarly, you can't use same example for people who 
        belong to different backgrounds as well. Communicatin skills is key
        of "one to one" relationship. Sales is a process or persuasion but
        it only work if you understand the needs of customers properly.    
        </p>
        <br>
        <b>L.I.A.C.P.</b>
        <p>
        <br><b>L : Listen</b>, Listen to other person if they don't open up try to 
        ask something which allow you to listen.
        <br><b>I : Interest</b>, Show your interest in the things they were telling you.
        <br><b>A : Acknowledge</b> Acknowledge that you understood what they said.
        <br><b>C : Confirm</b> Confirm what they said and what you understood are the same
        <br><b>P : Proceed</b> Proceed the conversation in iteration of these first 4 steps
        </p>
        <br>
        <b>Myth of interoversion</b>
        <br><br>
        <div>
        Most people who don't have knowledge about things and doesn't got enough exposure label
        themselves as an introvert but they talk a lot infront of their bestfriends or family 
        members. If someone is really introvert that person might not talk a lot even with their
        best friend or family members. Remember, <b>interovert is not someone who can't communicate</b> 
        </div>
        <br>
        Don't hide yourself behind introvert label, your real problem isn't introversion but your
        poor communication skills and poor knowledge. 

        `
    },
]


