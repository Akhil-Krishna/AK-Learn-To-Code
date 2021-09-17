

        function main_makeoff(){
            document.getElementById('main_modulo').style.display='none'
        }
        function main_makeon(){
            document.getElementById('main_modulo').style.display='block'
   
        }
    

//back button for registration
        function backbutton(){
            document.getElementById('signing').style.display='none'
        }
//backbutton for selection 
        function backbutton_sel(){
            document.getElementById('selecting').style.display='none'
        }

//signup page opening

        function open_signup(){
            document.getElementById('signing').style.display='block'
        }

//signup page js file
    var ager=document.getElementById('aging')
    var fn=document.getElementById('fname')
    var ln=document.getElementById('lname')

    function to_selection(){
        
        

        if(ager.value.length>2||ager.value<=5){
            document.getElementById('btnage').style.display='inline-block'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnradio').style.display='none'
            //return false
        }
    
        else if(fn.value.trim()==''){
            document.getElementById('btnname').style.display='inline-block'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnradio').style.display='none'
            //return false
        }
        else if(ln.value.trim()==''){
            document.getElementById('btnname').style.display='none'
            document.getElementById('btnlname').style.display='inline-block'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnradio').style.display='none'
            //return false
        }
        else if(fn.value.trim().length+ln.value.trim().length<=3){
            document.getElementById('btnname').style.display='inline-block'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnradio').style.display='none'
            //return false
        }
        else if(document.getElementById('gend1').checked==false && document.getElementById('gend2').checked==false){
            document.getElementById('btnname').style.display='none'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnradio').style.display='inline-block'
        }

        else{
            document.getElementById('selecting').style.display='block'
            
        }
    
    }


//opening selection
    function open_selection(){
        document.getElementById('selecting').style.display='block'
    }

//selection.js
    function selmouseov(){
        document.getElementById('selinf').style.display='inline-block'}
    function selmouseou(){
    document.getElementById('selinf').style.display='none'
    }
    function selmakeoff(){
    document.getElementById('selmodulo').style.display='none'
    }
    function selmakeon(){
    document.getElementById('selmodulo').style.display='block'

    }

    function extrahelperf(){
        document.getElementById('extrahelper').style.display='block'
        document.getElementById('selmodulo').style.display='none'
    }
    function extrahelperoff(){
        document.getElementById('extrahelper').style.display='none'
        
    }
//videoforum open

    function video_forum_open(){
        document.getElementById('video_forum').style.display='block'
    }
    function video_forum_off(){
        document.getElementById('video_forum').style.display='none'
    }





//all quiz back
function quizbackbutton(){
    var lolan=document.getElementsByClassName('closing_icon')
    var george=document.getElementsByClassName('closing_tab')
    for(let acrii=0;acrii<lolan.length;acrii++){
    lolan[acrii].style.display='none'
    george[acrii].style.display='none'
    
    }
    var sds=[ques_list,pyques_list,cques_list,ryques_list,webques_list,jvques_list,swques_list,phques_list,dtques_list]
    for(let asd=0;asd<sds.length;asd++){
        shuffleArray(sds[asd])
    }
}










//online quiz open
    function online_quiz_open(){
        document.getElementById('imodulo').style.display='block'
        imakeon()
    }
    function online_offer(){
        document.getElementById('imodulo').style.display='none'
        }


    //To load modulo when the page loads  vh
   // window.onload=imakeon

    

    //To make the timer work only if modulo is off
    var checker=0
    var f=0

    //clicking yes on modulo
    function makeoff(){
        document.getElementById('modulo_onl').style.display='none'
        checker=1
        var tmei=15
        if(checker==1){
            f=window.setInterval(tme,1000)
        }

        mover()

    }
    //next button
    function next(){
     mover()
    }

        //function for displaying modulo
    function imakeon(){
    
     document.getElementById('modulo_onl').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var tmei=15
    function tme(){
     if(tmei>0){
           tmei--
        }
        else{
            tmei=15
         mover()
        
        }
         document.getElementById('just').textContent=tmei
    }

    function shuffle(ar){
        var veruthe= [ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)]]
     return veruthe
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
           var temp = array[i];
            array[i] = array[j];
         array[j] = temp;
       }
    }



    //Questions and answer  for the quiz
    var ques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which tag is used to create a video element in html?',['<video>','<vdo>','<v>','<vid>',0]],
    ['.Which of the following is a valid identifier in python?',['variable1.','var-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in JavaScript?',['4','2','3','1',2]]
    ]
    shuffleArray(ques_list)


    //tips center
    var tipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var opt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var scr=0


    //creating question label
    var ques=document.getElementById('question')
    //creating options object
    var opt=document.getElementsByClassName('opt')
    var i=0
    //score variable for result.js
    var dis_score=document.getElementById('innerscore')


    function btnc(xxxxx){

        document.getElementsByClassName('opt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==ques_list[i-1][1][4]){
         document.getElementsByClassName('opt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         scr++
         dis_score.textContent='Score:'+scr
        }
        else{
            document.getElementsByClassName('opt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('opt')[ques_list[i-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(mover,900)
    
    }





    function mover(){
        if(i!=ques_list.length){
            if(tmei==0||tmei==1){tmei=15}
            else{tmei=15}
            
            ques.textContent='Q'+(i+1)+ques_list[i][0]
            opt[0].textContent=ques_list[i][1][0]
            opt[1].textContent=ques_list[i][1][1]
            opt[2].textContent=ques_list[i][1][2]
            opt[3].textContent=ques_list[i][1][3]
            document.getElementById('foot').innerHTML=tipper[i]
            for(var teta=0;teta<4;teta++){
                opt[teta].style.backgroundColor='#fff'
     }
     i++
    }
        else{
          window.clearInterval(f)
         document.getElementById('modulo2').style.display='inline-block'
        

        }
    

  
    
    }



//opening result.js
    function res_open_result(){
        document.getElementById('modulo2').style.display='none'
        document.getElementById('imodulo').style.display='none'
        document.getElementById('res_modulo').style.display='block'
        soceri()
    }

//result.js

    function soceri(){
    tscr=document.getElementById('innerscore').value

    document.getElementById('onlshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('onlshow_age').innerHTML=String(ager.value)


    if(((String((dis_score.innerHTML)).length)==7)){
    console.log(String(dis_score.innerHTML)[6])
    document.getElementById('onlshow_score').innerHTML=String(dis_score.innerHTML)[6] 
    jscr=parseInt(String(dis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(dis_score.innerHTML)[6]+String(dis_score.innerHTML)[7])
        document.getElementById('onlshow_score').innerHTML=String(dis_score.innerHTML)[6]+String(dis_score.innerHTML)[7]
        jscr=parseInt(String(dis_score.innerHTML)[6]+String(dis_score.innerHTML)[7])
    }

    if(jscr>8){
        var ograde='A'
        var orst='Passed'
        var omsg='Excellent (but keep practicing)'
        var oclo='rgb(30, 145, 30)'
    }
    else if(jscr>6){
        var ograde='B'
        var orst='Passed'
        var omsg='Good but need to work more and practice'
        var oclo='rgb(30, 145, 30)'
    }
    else if(jscr>4){
        var ograde='C'
        var orst='Passed'
        var omsg='It was a nice try but need to improve'
        var oclo='rgb(30, 145, 30)'
    }
    else if(jscr>1){
        var ograde='D'
        var orst='Passed'
        var omsg='Not a good performance'
        var oclo='rgb(30, 145, 30)'
    }
    else{
        var ograde='E'
        var orst='Failed'
        var omsg='Poor performance but can improve '
        var oclo='red'
    }

    document.getElementById('onlshow_grade').innerHTML=ograde
    document.getElementById('onlshow_result').innerHTML=orst
    document.getElementById('onlshow_msg').innerHTML=omsg
    document.getElementById('onlshow_result').style.color=oclo


    }



//python quiz open

          
    function py_quiz_open(){
        document.getElementById('pyinnerscore').innerHTML='Score:0'
        document.getElementById('pymodulo').style.display='block'
        pymakeon()
    }
    function py_offer(){
        document.getElementById('pymodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=pymakeon

    //To make the timer work only if modulo is off
    var pychecker=0
    var pyf=0

    //clicking yes on modulo
    function pymakeoff(){
        document.getElementById('modulo_py').style.display='none'
        pychecker=1
        var pytmei=15
        if(pychecker==1){
            pyf=window.setInterval(pytme,1000)
        }

        pymover()

    }
    //next button
    function pynext(){
     pymover()
    }

        //function for displaying modulo
    function pymakeon(){
    
     document.getElementById('modulo_py').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var pytmei=15
    function pytme(){
     if(pytmei>0){
           pytmei--
        }
        else{
            pytmei=15
         pymover()
        
        }
         document.getElementById('pyjust').textContent=pytmei
    }

    function shuffle(ar){
        var veruthe= [ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)]]
     return veruthe
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
           var temp = array[i];
            array[i] = array[j];
         array[j] = temp;
       }
    }


    //Questions and answer  for the quiz
    var pyques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in python is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in python?',['variable1.','var-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in Python?',['4','2','3','1',1]]
    ]
    shuffleArray(pyques_list)

    //tips center
    var pytipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var pyopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var pyscr=0


    //creating question label
    var pyques=document.getElementById('pyquestion')
    //creating options object
    var pyopt=document.getElementsByClassName('pyopt')
    var pyi=0
    //score variable for result.js
    var pydis_score=document.getElementById('pyinnerscore')


    function pybtnc(xxxxx){
        document.getElementsByClassName('pyopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==pyques_list[pyi-1][1][4]){
         document.getElementsByClassName('pyopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         pyscr++
         pydis_score.textContent='Score:'+pyscr
        }
        else{
            document.getElementsByClassName('pyopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('pyopt')[pyques_list[pyi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(pymover,900)
    
    }


    function pycaller(){
        for(var teta=0;teta<4;teta++){
            pyopt[teta].style.backgroundColor='#fff'

        pyi=0
        pyscr=0

    }
    }

    function pymover(){
        if(pyi!=pyques_list.length){
            if(pytmei==0||pytmei==1){pytmei=15}
            else{pytmei=15}
            
            pyques.textContent='Q'+(pyi+1)+pyques_list[pyi][0]
            pyopt[0].textContent=pyques_list[pyi][1][0]
            pyopt[1].textContent=pyques_list[pyi][1][1]
            pyopt[2].textContent=pyques_list[pyi][1][2]
            pyopt[3].textContent=pyques_list[pyi][1][3]
            document.getElementById('pyfoot').innerHTML=pytipper[pyi]
            for(var teta=0;teta<4;teta++){
                pyopt[teta].style.backgroundColor='#fff'
     }
     pyi++
    }
        else{
          window.clearInterval(pyf)

          
         document.getElementById('pymodulo2').style.display='inline-block'

         pycaller()

        }


    

  
    
    }
//opening pyresult.js
    function pyres_open_result(){
        
        document.getElementById('pymodulo2').style.display='none'
        document.getElementById('pymodulo').style.display='none'
        document.getElementById('pyres_modulo').style.display='block'
        pysoceri()
    }

//pyresult.js

    function pysoceri(){
    pytscr=document.getElementById('pyinnerscore').value

    document.getElementById('show_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('show_age').innerHTML=String(ager.value)


    if(((String((pydis_score.innerHTML)).length)==7)){
    console.log(String(pydis_score.innerHTML)[6])
    document.getElementById('show_score').innerHTML=String(pydis_score.innerHTML)[6] 
    pyjscr=parseInt(String(pydis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(pydis_score.innerHTML)[6]+String(pydis_score.innerHTML)[7])
        document.getElementById('show_score').innerHTML=String(pydis_score.innerHTML)[6]+String(pydis_score.innerHTML)[7]
        pyjscr=parseInt(String(pydis_score.innerHTML)[6]+String(pydis_score.innerHTML)[7])
    }

    if(pyjscr>8){
        var grade='A'
        var rst='Passed'
        var msg='Excellent (but keep practicing)'
        var clo='rgb(30, 145, 30)'
    }
    else if(pyjscr>6){
        var grade='B'
        var rst='Passed'
        var msg='Good but need to work more and practice'
        var clo='rgb(30, 145, 30)'
    }
    else if(pyjscr>4){
        var grade='C'
        var rst='Passed'
        var msg='It was a nice try but need to improve'
        var clo='rgb(30, 145, 30)'
    }
    else if(pyjscr>1){
        var grade='D'
        var rst='Passed'
        var msg='Not a good performance'
        var clo='rgb(30, 145, 30)'
    }
    else{
        var grade='E'
        var rst='Failed'
        var msg='Poor performance but can improve '
        var clo='red'
    }

    document.getElementById('show_grade').innerHTML=grade
    document.getElementById('show_result').innerHTML=rst
    document.getElementById('show_msg').innerHTML=msg
    document.getElementById('show_result').style.color=clo


    }




//c/c++ quiz open

          
    function c_quiz_open(){
        document.getElementById('cinnerscore').innerHTML='Score:0'
        document.getElementById('cmodulo').style.display='block'
        cmakeon()
    }
    function c_offer(){
        document.getElementById('cmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=cmakeon

    //To make the timer work only if modulo is off
    var cchecker=0
    var cf=0

    //clicking yes on modulo
    function cmakeoff(){
        document.getElementById('modulo_c').style.display='none'
        cchecker=1
        var ctmei=15
        if(cchecker==1){
            cf=window.setInterval(ctme,1000)
        }

        cmover()

    }
    //next button
    function cnext(){
     cmover()
    }

        //function for displaying modulo
    function cmakeon(){
    
     document.getElementById('modulo_c').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var ctmei=15
    function ctme(){
     if(ctmei>0){
           ctmei--
        }
        else{
            ctmei=15
         cmover()
        
        }
         document.getElementById('cjust').textContent=ctmei
    }

    


    //Questions and answer  for the c/c++ quiz
    var cques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in python is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in python?',['variable1.','var-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in Python?',['4','2','3','1',1]]
    ]
    shuffleArray(cques_list)

    //tips center
    var ctipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var copt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var cscr=0


    //creating question label
    var cques=document.getElementById('cquestion')
    //creating options object
    var copt=document.getElementsByClassName('copt')
    var ci=0
    //score variable for result.js
    var cdis_score=document.getElementById('cinnerscore')


    function cbtnc(xxxxx){
        document.getElementsByClassName('copt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==cques_list[ci-1][1][4]){
         document.getElementsByClassName('copt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         cscr++
         cdis_score.textContent='Score:'+cscr
        }
        else{
            document.getElementsByClassName('copt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('copt')[cques_list[ci-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(cmover,900)
    
    }


    function ccaller(){
        for(var teta=0;teta<4;teta++){
            copt[teta].style.backgroundColor='#fff'

        ci=0
        cscr=0

    }
    }


    function cmover(){
        if(ci!=cques_list.length){
            if(ctmei==0||ctmei==1){ctmei=15}
            else{ctmei=15}
            
            cques.textContent='Q'+(ci+1)+cques_list[ci][0]
            copt[0].textContent=cques_list[ci][1][0]
            copt[1].textContent=cques_list[ci][1][1]
            copt[2].textContent=cques_list[ci][1][2]
            copt[3].textContent=cques_list[ci][1][3]
            document.getElementById('cfoot').innerHTML=ctipper[ci]
            for(var teta=0;teta<4;teta++){
                copt[teta].style.backgroundColor='#fff'
     }
     ci++
    }
        else{
          window.clearInterval(cf)
         document.getElementById('cmodulo2').style.display='inline-block'
         ccaller()
        

        }
    

  
    
    }
//opening c/c++result.js
    function cres_open_result(){
        document.getElementById('cmodulo2').style.display='none'
        document.getElementById('cmodulo').style.display='none'
        document.getElementById('cres_modulo').style.display='block'
        csoceri()
    }

//cresult.js

    function csoceri(){
    ctscr=document.getElementById('cinnerscore').value

    document.getElementById('cshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('cshow_age').innerHTML=String(ager.value)


    if(((String((cdis_score.innerHTML)).length)==7)){
    console.log(String(cdis_score.innerHTML)[6])
    document.getElementById('cshow_score').innerHTML=String(cdis_score.innerHTML)[6] 
    cjscr=parseInt(String(cdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(cdis_score.innerHTML)[6]+String(cdis_score.innerHTML)[7])
        document.getElementById('cshow_score').innerHTML=String(cdis_score.innerHTML)[6]+String(cdis_score.innerHTML)[7]
        cjscr=parseInt(String(cdis_score.innerHTML)[6]+String(cdis_score.innerHTML)[7])
    }

    if(cjscr>8){
        var cgrade='A'
        var crst='Passed'
        var cmsg='Excellent (but keep practicing)'
        var cclo='rgb(30, 145, 30)'
    }
    else if(cjscr>6){
        var cgrade='B'
        var crst='Passed'
        var cmsg='Good but need to work more and practice'
        var cclo='rgb(30, 145, 30)'
    }
    else if(cjscr>4){
        var cgrade='C'
        var crst='Passed'
        var cmsg='It was a nice try but need to improve'
        var cclo='rgb(30, 145, 30)'
    }
    else if(cjscr>1){
        var cgrade='D'
        var crst='Passed'
        var cmsg='Not a good performance'
        var cclo='rgb(30, 145, 30)'
    }
    else{
        var cgrade='E'
        var crst='Failed'
        var cmsg='Poor performance but can improve '
        var cclo='red'
    }

    document.getElementById('cshow_grade').innerHTML=cgrade
    document.getElementById('cshow_result').innerHTML=crst
    document.getElementById('cshow_msg').innerHTML=cmsg
    document.getElementById('cshow_result').style.color=cclo


    }





//              RUBy way in it Ruby ruby ruby ruby ruby ruby ruby
//ruby ruby ruby ruby ruby ruby ruby ruby ruby ruby ruby ruby


//rython quiz open

          
    function ry_quiz_open(){
        document.getElementById('ryinnerscore').innerHTML='Score:0'
        document.getElementById('rymodulo').style.display='block'
        rymakeon()
    }
    function ry_offer(){
        document.getElementById('rymodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=rymakeon

    //To make the timer work only if modulo is off
    var rychecker=0
    var ryf=0

    //clicking yes on modulo
    function rymakeoff(){
        document.getElementById('modulo_ry').style.display='none'
        rychecker=1
        var rytmei=15
        if(rychecker==1){
            ryf=window.setInterval(rytme,1000)
        }

        rymover()

    }
    //next button
    function rynext(){
     rymover()
    }

        //function for displaying modulo
    function rymakeon(){
    
     document.getElementById('modulo_ry').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var rytmei=15
    function rytme(){
     if(rytmei>0){
           rytmei--
        }
        else{
            rytmei=15
         rymover()
        
        }
         document.getElementById('ryjust').textContent=rytmei
    }

    

    //Questions and answer  for the quiz
    var ryques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in ruby is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in ruby?',['variable1.','vas-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in ruby?',['4','2','3','1',1]]
    ]
    shuffleArray(ryques_list)

    //tips center
    var rytipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var ryopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var ryscr=0


    //creating question label
    var ryques=document.getElementById('ryquestion')
    //creating options object
    var ryopt=document.getElementsByClassName('ryopt')
    var ryi=0
    //score variable for result.js
    var rydis_score=document.getElementById('ryinnerscore')


    function rybtnc(xxxxx){
        document.getElementsByClassName('ryopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==ryques_list[ryi-1][1][4]){
         document.getElementsByClassName('ryopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         ryscr++
         rydis_score.textContent='Score:'+ryscr
        }
        else{
            document.getElementsByClassName('ryopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('ryopt')[ryques_list[ryi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(rymover,900)
    
    }


    function rycaller(){
        for(var teta=0;teta<4;teta++){
            ryopt[teta].style.backgroundColor='#fff'

        ryi=0
        ryscr=0

    }
    }


    function rymover(){
        if(ryi!=ryques_list.length){
            if(rytmei==0||rytmei==1){rytmei=15}
            else{rytmei=15}
            
            ryques.textContent='Q'+(ryi+1)+ryques_list[ryi][0]
            ryopt[0].textContent=ryques_list[ryi][1][0]
            ryopt[1].textContent=ryques_list[ryi][1][1]
            ryopt[2].textContent=ryques_list[ryi][1][2]
            ryopt[3].textContent=ryques_list[ryi][1][3]
            document.getElementById('ryfoot').innerHTML=rytipper[ryi]
            for(var teta=0;teta<4;teta++){
                ryopt[teta].style.backgroundColor='#fff'
     }
     ryi++
    }
        else{
          window.clearInterval(ryf)
         document.getElementById('rymodulo2').style.display='inline-block'
        rycaller()

        }
    
    }




//opening ryresult.js
    function ryres_open_result(){
        document.getElementById('rymodulo2').style.display='none'
        document.getElementById('rymodulo').style.display='none'
        document.getElementById('ryres_modulo').style.display='block'
        rysoceri()
    }

//rubyresult.js

    function rysoceri(){
    rytscr=document.getElementById('ryinnerscore').value

    document.getElementById('ryshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('ryshow_age').innerHTML=String(ager.value)


    if(((String((rydis_score.innerHTML)).length)==7)){
    console.log(String(rydis_score.innerHTML)[6])
    document.getElementById('ryshow_score').innerHTML=String(rydis_score.innerHTML)[6] 
    ryjscr=parseInt(String(rydis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(rydis_score.innerHTML)[6]+String(rydis_score.innerHTML)[7])
        document.getElementById('ryshow_score').innerHTML=String(rydis_score.innerHTML)[6]+String(rydis_score.innerHTML)[7]
        ryjscr=parseInt(String(rydis_score.innerHTML)[6]+String(rydis_score.innerHTML)[7])
    }

    if(ryjscr>8){
        var rygrade='A'
        var ryrst='Passed'
        var rymsg='Excellent (but keep practicing)'
        var ryclo='rgb(30, 145, 30)'
    }
    else if(ryjscr>6){
        var rygrade='B'
        var ryrst='Passed'
        var rymsg='Good but need to work more and practice'
        var ryclo='rgb(30, 145, 30)'
    }
    else if(ryjscr>4){
        var rygrade='C'
        var ryrst='Passed'
        var rymsg='It was a nice try but need to improve'
        var ryclo='rgb(30, 145, 30)'
    }
    else if(ryjscr>1){
        var rygrade='D'
        var ryrst='Passed'
        var rymsg='Not a good performance'
        var ryclo='rgb(30, 145, 30)'
    }
    else{
        var rygrade='E'
        var ryrst='Failed'
        var rymsg='Poor performance but can improve '
        var ryclo='red'
    }

    document.getElementById('ryshow_grade').innerHTML=rygrade
    document.getElementById('ryshow_result').innerHTML=ryrst
    document.getElementById('ryshow_msg').innerHTML=rymsg
    document.getElementById('ryshow_result').style.color=ryclo


    }





// web web wbe wbe web web wbe web web web web wbe web web web web web wbe wweb 
// web web wbe wbe web web wbe web web web web wbe web web web web web wbe wweb 
// web web wbe wbe web web wbe web web web web wbe web web web web web wbe wweb 

//web quiz open

          
    function web_quiz_open(){
        document.getElementById('webinnerscore').innerHTML='Score:0'
        document.getElementById('webmodulo').style.display='block'
        webmakeon()
    }
    function web_offer(){
        document.getElementById('webmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=cmakeon

    //To make the timer work only if modulo is off
    var webchecker=0
    var webf=0

    //clicking yes on modulo
    function webmakeoff(){
        document.getElementById('modulo_web').style.display='none'
        webchecker=1
        var webtmei=15
        if(webchecker==1){
            webf=window.setInterval(webtme,1000)
        }

        webmover()

    }
    //next button
    function webnext(){
     webmover()
    }

        //function for displaying modulo
    function webmakeon(){
    
     document.getElementById('modulo_web').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var webtmei=15
    function webtme(){
     if(webtmei>0){
           webtmei--
        }
        else{
            webtmei=15
         webmover()
        
        }
         document.getElementById('webjust').textContent=webtmei
    }

    


    //Questions and answer  for the c/c++ quiz
    var webques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in python is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in python?',['variable1.','var-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in Python?',['4','2','3','1',1]]
    ]
    shuffleArray(webques_list)

    //tips center
    var webtipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var webopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var webscr=0


    //creating question label
    var webques=document.getElementById('webquestion')
    //creating options object
    var webopt=document.getElementsByClassName('webopt')
    var webi=0
    //score variable for result.js
    var webdis_score=document.getElementById('webinnerscore')


    function webbtnc(xxxxx){
        document.getElementsByClassName('webopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==webques_list[webi-1][1][4]){
         document.getElementsByClassName('webopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         webscr++
         webdis_score.textContent='Score:'+webscr
        }
        else{
            document.getElementsByClassName('webopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('webopt')[webques_list[webi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(webmover,900)
    
    }


    function webcaller(){
        for(var teta=0;teta<4;teta++){
            webopt[teta].style.backgroundColor='#fff'

        webi=0
        webscr=0

    }
    }


    function webmover(){
        if(webi!=webques_list.length){
            if(webtmei==0||webtmei==1){webtmei=15}
            else{webtmei=15}
            
            webques.textContent='Q'+(webi+1)+webques_list[webi][0]
            webopt[0].textContent=webques_list[webi][1][0]
            webopt[1].textContent=webques_list[webi][1][1]
            webopt[2].textContent=webques_list[webi][1][2]
            webopt[3].textContent=webques_list[webi][1][3]
            document.getElementById('webfoot').innerHTML=webtipper[webi]
            for(var teta=0;teta<4;teta++){
                webopt[teta].style.backgroundColor='#fff'
     }
     webi++
    }
        else{
          window.clearInterval(webf)
         document.getElementById('webmodulo2').style.display='inline-block'
        webcaller()

        }
    

  
    
    }
//openingwebresult.js
    function webres_open_result(){
        document.getElementById('webmodulo2').style.display='none'
        document.getElementById('webmodulo').style.display='none'
        document.getElementById('webres_modulo').style.display='block'
        websoceri()
    }

//webresult.js

    function websoceri(){
    webtscr=document.getElementById('webinnerscore').value

    document.getElementById('webshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('webshow_age').innerHTML=String(ager.value)


    if(((String((webdis_score.innerHTML)).length)==7)){
    console.log(String(webdis_score.innerHTML)[6])
    document.getElementById('webshow_score').innerHTML=String(webdis_score.innerHTML)[6] 
    webjscr=parseInt(String(webdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(webdis_score.innerHTML)[6]+String(webdis_score.innerHTML)[7])
        document.getElementById('webshow_score').innerHTML=String(webdis_score.innerHTML)[6]+String(webdis_score.innerHTML)[7]
        webjscr=parseInt(String(webdis_score.innerHTML)[6]+String(webdis_score.innerHTML)[7])
    }

    if(webjscr>8){
        var webgrade='A'
        var webrst='Passed'
        var webmsg='Excellent (but keep practicing)'
        var webclo='rgb(30, 145, 30)'
    }
    else if(webjscr>6){
        var webgrade='B'
        var webrst='Passed'
        var webmsg='Good but need to work more and practice'
        var webclo='rgb(30, 145, 30)'
    }
    else if(webjscr>4){
        var webgrade='C'
        var webrst='Passed'
        var webmsg='It was a nice try but need to improve'
        var webclo='rgb(30, 145, 30)'
    }
    else if(webjscr>1){
        var webgrade='D'
        var webrst='Passed'
        var webmsg='Not a good performance'
        var webclo='rgb(30, 145, 30)'
    }
    else{
        var webgrade='E'
        var webrst='Failed'
        var webmsg='Poor performance but can improve '
        var webclo='red'
    }

    document.getElementById('webshow_grade').innerHTML=webgrade
    document.getElementById('webshow_result').innerHTML=webrst
    document.getElementById('webshow_msg').innerHTML=webmsg
    document.getElementById('webshow_result').style.color=webclo


    }




//java java java java jajva jaa ja jav aj jav jav java jkava jva j
//java java java java jajva jaa ja jav aj jav jav java jkava jva j
//java java java java jajva jaa ja jav aj jav jav java jkava jva j
//java quiz open

          
    function jv_quiz_open(){
        document.getElementById('jvinnerscore').innerHTML='Score:0'
        document.getElementById('jvmodulo').style.display='block'
        jvmakeon()
    }
    function jv_offer(){
        document.getElementById('jvmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=jvmakeon

    //To make the timer work only if modulo is off
    var jvchecker=0
    var jvf=0

    //clicking yes on modulo
    function jvmakeoff(){
        document.getElementById('modulo_jv').style.display='none'
        jvchecker=1
        var jvtmei=15
        if(jvchecker==1){
            jvf=window.setInterval(jvtme,1000)
        }

        jvmover()

    }
    //next button
    function jvnext(){
     jvmover()
    }

        //function for displaying modulo
    function jvmakeon(){
    
     document.getElementById('modulo_jv').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var jvtmei=15
    function jvtme(){
     if(jvtmei>0){
           jvtmei--
        }
        else{
            jvtmei=15
         jvmover()
        
        }
         document.getElementById('jvjust').textContent=jvtmei
    }

    


    //Questions and answer  for the c/c++ quiz
    var jvques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in python is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in python?',['variable1.','var-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in Python?',['4','2','3','1',1]]
    ]
    shuffleArray(jvques_list)

    //tips center
    var jvtipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var jvopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var jvscr=0


    //creating question label
    var jvques=document.getElementById('jvquestion')
    //creating options object
    var jvopt=document.getElementsByClassName('jvopt')
    var jvi=0
    //score variable for result.js
    var jvdis_score=document.getElementById('jvinnerscore')


    function jvbtnc(xxxxx){
        document.getElementsByClassName('jvopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==jvques_list[jvi-1][1][4]){
         document.getElementsByClassName('jvopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         jvscr++
         jvdis_score.textContent='Score:'+jvscr
        }
        else{
            document.getElementsByClassName('jvopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('jvopt')[jvques_list[jvi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(jvmover,900)
    
    }

    function jvcaller(){
        for(var teta=0;teta<4;teta++){
            jvopt[teta].style.backgroundColor='#fff'

        jvi=0
        jvscr=0

    }
    }



    function jvmover(){
        if(jvi!=jvques_list.length){
            if(jvtmei==0||jvtmei==1){jvtmei=15}
            else{jvtmei=15}
            
            jvques.textContent='Q'+(jvi+1)+jvques_list[jvi][0]
            jvopt[0].textContent=jvques_list[jvi][1][0]
            jvopt[1].textContent=jvques_list[jvi][1][1]
            jvopt[2].textContent=jvques_list[jvi][1][2]
            jvopt[3].textContent=jvques_list[jvi][1][3]
            document.getElementById('jvfoot').innerHTML=jvtipper[jvi]
            for(var teta=0;teta<4;teta++){
                jvopt[teta].style.backgroundColor='#fff'
     }
     jvi++
    }
        else{
          window.clearInterval(jvf)
         document.getElementById('jvmodulo2').style.display='inline-block'
        jvcaller()

        }
    

  
    
    }
//opening java result.js
    function jvres_open_result(){
        document.getElementById('jvmodulo2').style.display='none'
        document.getElementById('jvmodulo').style.display='none'
        document.getElementById('jvres_modulo').style.display='block'
        jvsoceri()
    }

//java result.js

    function jvsoceri(){
    jvtscr=document.getElementById('jvinnerscore').value

    document.getElementById('jvshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('jvshow_age').innerHTML=String(ager.value)


    if(((String((jvdis_score.innerHTML)).length)==7)){
    console.log(String(jvdis_score.innerHTML)[6])
    document.getElementById('jvshow_score').innerHTML=String(jvdis_score.innerHTML)[6] 
    jvjscr=parseInt(String(jvdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(jvdis_score.innerHTML)[6]+String(jvdis_score.innerHTML)[7])
        document.getElementById('jvshow_score').innerHTML=String(jvdis_score.innerHTML)[6]+String(jvdis_score.innerHTML)[7]
        jvjscr=parseInt(String(jvdis_score.innerHTML)[6]+String(jvdis_score.innerHTML)[7])
    }

    if(jvjscr>8){
        var jvgrade='A'
        var jvrst='Passed'
        var jvmsg='Excellent (but keep practicing)'
        var jvclo='rgb(30, 145, 30)'
    }
    else if(jvjscr>6){
        var jvgrade='B'
        var jvrst='Passed'
        var jvmsg='Good but need to work more and practice'
        var jvclo='rgb(30, 145, 30)'
    }
    else if(jvjscr>4){
        var jvgrade='C'
        var jvrst='Passed'
        var jvmsg='It was a nice try but need to improve'
        var jvclo='rgb(30, 145, 30)'
    }
    else if(jvjscr>1){
        var jvgrade='D'
        var jvrst='Passed'
        var jvmsg='Not a good performance'
        var jvclo='rgb(30, 145, 30)'
    }
    else{
        var jvgrade='E'
        var jvrst='Failed'
        var jvmsg='Poor performance but can improve '
        var jvclo='red'
    }

    document.getElementById('jvshow_grade').innerHTML=jvgrade
    document.getElementById('jvshow_result').innerHTML=jvrst
    document.getElementById('jvshow_msg').innerHTML=jvmsg
    document.getElementById('jvshow_result').style.color=jvclo


    }


//swift4 quiz open

          
    function sw_quiz_open(){
        document.getElementById('swinnerscore').innerHTML='Score:0'
        document.getElementById('swmodulo').style.display='block'
        swmakeon()
    }
    function sw_offer(){
        document.getElementById('swmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=rymakeon

    //To make the timer work only if modulo is off
    var swchecker=0
    var swf=0

    //clicking yes on modulo
    function swmakeoff(){
        document.getElementById('modulo_sw').style.display='none'
        swchecker=1
        var swtmei=15
        if(swchecker==1){
            swf=window.setInterval(swtme,1000)
        }

        swmover()

    }
    //next button
    function swnext(){
     swmover()
    }

        //function for displaying modulo
    function swmakeon(){
    
     document.getElementById('modulo_sw').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var swtmei=15
    function swtme(){
     if(swtmei>0){
           swtmei--
        }
        else{
            swtmei=15
         swmover()
        
        }
         document.getElementById('swjust').textContent=swtmei
    }

    

    //Questions and answer  for the quiz
    var swques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in ruby is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in ruby?',['variable1.','vas-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in ruby?',['4','2','3','1',1]]
    ]
    shuffleArray(swques_list)

    //tips center
    var swtipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var swopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var swscr=0


    //creating question label
    var swques=document.getElementById('swquestion')
    //creating options object
    var swopt=document.getElementsByClassName('swopt')
    var swi=0
    //score variable for result.js
    var swdis_score=document.getElementById('swinnerscore')


    function swbtnc(xxxxx){
        document.getElementsByClassName('swopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==swques_list[swi-1][1][4]){
         document.getElementsByClassName('swopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         swscr++
         swdis_score.textContent='Score:'+swscr
        }
        else{
            document.getElementsByClassName('swopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('swopt')[swques_list[swi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(swmover,900)
    
    }


    function swcaller(){
        for(var teta=0;teta<4;teta++){
            swopt[teta].style.backgroundColor='#fff'

        swi=0
        swscr=0

    }
    }


    function swmover(){
        if(swi!=swques_list.length){
            if(swtmei==0||swtmei==1){swtmei=15}
            else{swtmei=15}
            
            swques.textContent='Q'+(swi+1)+swques_list[swi][0]
            swopt[0].textContent=swques_list[swi][1][0]
            swopt[1].textContent=swques_list[swi][1][1]
            swopt[2].textContent=swques_list[swi][1][2]
            swopt[3].textContent=swques_list[swi][1][3]
            document.getElementById('swfoot').innerHTML=swtipper[swi]
            for(var teta=0;teta<4;teta++){
                swopt[teta].style.backgroundColor='#fff'
     }
     swi++
    }
        else{
          window.clearInterval(swf)
         document.getElementById('swmodulo2').style.display='inline-block'
        swcaller()

        }
    
    }




//opening swresult.js
    function swres_open_result(){
        document.getElementById('swmodulo2').style.display='none'
        document.getElementById('swmodulo').style.display='none'
        document.getElementById('swres_modulo').style.display='block'
        swsoceri()
    }

//swift4result.js

    function swsoceri(){
    swtscr=document.getElementById('swinnerscore').value

    document.getElementById('swshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('swshow_age').innerHTML=String(ager.value)


    if(((String((swdis_score.innerHTML)).length)==7)){
    console.log(String(swdis_score.innerHTML)[6])
    document.getElementById('swshow_score').innerHTML=String(swdis_score.innerHTML)[6] 
    swjscr=parseInt(String(swdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(swdis_score.innerHTML)[6]+String(swdis_score.innerHTML)[7])
        document.getElementById('swshow_score').innerHTML=String(swdis_score.innerHTML)[6]+String(swdis_score.innerHTML)[7]
        swjscr=parseInt(String(swdis_score.innerHTML)[6]+String(swdis_score.innerHTML)[7])
    }

    if(swjscr>8){
        var swgrade='A'
        var swrst='Passed'
        var swmsg='Excellent (but keep practicing)'
        var swclo='rgb(30, 145, 30)'
    }
    else if(swjscr>6){
        var swgrade='B'
        var swrst='Passed'
        var swmsg='Good but need to work more and practice'
        var swclo='rgb(30, 145, 30)'
    }
    else if(swjscr>4){
        var swgrade='C'
        var swrst='Passed'
        var swmsg='It was a nice try but need to improve'
        var swclo='rgb(30, 145, 30)'
    }
    else if(swjscr>1){
        var swgrade='D'
        var swrst='Passed'
        var swmsg='Not a good performance'
        var swclo='rgb(30, 145, 30)'
    }
    else{
        var swgrade='E'
        var swrst='Failed'
        var swmsg='Poor performance but can improve '
        var swclo='red'
    }

    document.getElementById('swshow_grade').innerHTML=swgrade
    document.getElementById('swshow_result').innerHTML=swrst
    document.getElementById('swshow_msg').innerHTML=swmsg
    document.getElementById('swshow_result').style.color=swclo


    }


//php quiz open

          
    function ph_quiz_open(){
        document.getElementById('phinnerscore').innerHTML='Score:0'
        document.getElementById('phmodulo').style.display='block'
        phmakeon()
    }
    function ph_offer(){
        document.getElementById('phmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=phmakeon

    //To make the timer work only if modulo is off
    var phchecker=0
    var phf=0

    //clicking yes on modulo
    function phmakeoff(){
        document.getElementById('modulo_ph').style.display='none'
        phchecker=1
        var phtmei=15
        if(phchecker==1){
            phf=window.setInterval(phtme,1000)
        }

        phmover()

    }
    //next button
    function phnext(){
     phmover()
    }

        //function for displaying modulo
    function phmakeon(){
    
     document.getElementById('modulo_ph').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var phtmei=15
    function phtme(){
     if(phtmei>0){
           phtmei--
        }
        else{
            phtmei=15
         phmover()
        
        }
         document.getElementById('phjust').textContent=phtmei
    }

    

    //Questions and answer  for the quiz
    var phques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in ruby is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in ruby?',['variable1.','vas-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in ruby?',['4','2','3','1',1]]
    ]
    shuffleArray(phques_list)

    //tips center
    var phtipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var phopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var phscr=0


    //creating question label
    var phques=document.getElementById('phquestion')
    //creating options object
    var phopt=document.getElementsByClassName('phopt')
    var phi=0
    //score variable for result.js
    var phdis_score=document.getElementById('phinnerscore')


    function phbtnc(xxxxx){
        document.getElementsByClassName('phopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==phques_list[phi-1][1][4]){
         document.getElementsByClassName('phopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         phscr++
         phdis_score.textContent='Score:'+phscr
        }
        else{
            document.getElementsByClassName('phopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('phopt')[phques_list[phi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(phmover,900)
    
    }


    function phcaller(){
        for(var teta=0;teta<4;teta++){
            phopt[teta].style.backgroundColor='#fff'

        phi=0
        phscr=0

    }
    }


    function phmover(){
        if(phi!=phques_list.length){
            if(phtmei==0||phtmei==1){phtmei=15}
            else{phtmei=15}
            
            phques.textContent='Q'+(phi+1)+phques_list[phi][0]
            phopt[0].textContent=phques_list[phi][1][0]
            phopt[1].textContent=phques_list[phi][1][1]
            phopt[2].textContent=phques_list[phi][1][2]
            phopt[3].textContent=phques_list[phi][1][3]
            document.getElementById('phfoot').innerHTML=phtipper[phi]
            for(var teta=0;teta<4;teta++){
                phopt[teta].style.backgroundColor='#fff'
     }
     phi++
    }
        else{
          window.clearInterval(phf)
         document.getElementById('phmodulo2').style.display='inline-block'
        phcaller()

        }
    
    }




//opening phresult.js
    function phres_open_result(){
        document.getElementById('phmodulo2').style.display='none'
        document.getElementById('phmodulo').style.display='none'
        document.getElementById('phres_modulo').style.display='block'
        phsoceri()
    }

//phpresult.js

    function phsoceri(){
    phtscr=document.getElementById('phinnerscore').value

    document.getElementById('phshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('phshow_age').innerHTML=String(ager.value)


    if(((String((phdis_score.innerHTML)).length)==7)){
    console.log(String(phdis_score.innerHTML)[6])
    document.getElementById('phshow_score').innerHTML=String(phdis_score.innerHTML)[6] 
    phjscr=parseInt(String(phdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(phdis_score.innerHTML)[6]+String(phdis_score.innerHTML)[7])
        document.getElementById('phshow_score').innerHTML=String(phdis_score.innerHTML)[6]+String(phdis_score.innerHTML)[7]
        phjscr=parseInt(String(phdis_score.innerHTML)[6]+String(phdis_score.innerHTML)[7])
    }

    if(phjscr>8){
        var phgrade='A'
        var phrst='Passed'
        var phmsg='Excellent (but keep practicing)'
        var phclo='rgb(30, 145, 30)'
    }
    else if(phjscr>6){
        var phgrade='B'
        var phrst='Passed'
        var phmsg='Good but need to work more and practice'
        var phclo='rgb(30, 145, 30)'
    }
    else if(phjscr>4){
        var phgrade='C'
        var phrst='Passed'
        var phmsg='It was a nice try but need to improve'
        var phclo='rgb(30, 145, 30)'
    }
    else if(phjscr>1){
        var phgrade='D'
        var phrst='Passed'
        var phmsg='Not a good performance'
        var phclo='rgb(30, 145, 30)'
    }
    else{
        var phgrade='E'
        var phrst='Failed'
        var phmsg='Poor performance but can improve '
        var phclo='red'
    }

    document.getElementById('phshow_grade').innerHTML=phgrade
    document.getElementById('phshow_result').innerHTML=phrst
    document.getElementById('phshow_msg').innerHTML=phmsg
    document.getElementById('phshow_result').style.color=phclo


    }







//dart quiz open

          
    function dt_quiz_open(){
        document.getElementById('dtinnerscore').innerHTML='Score:0'
        document.getElementById('dtmodulo').style.display='block'
        dtmakeon()
    }
    function dt_offer(){
        document.getElementById('dtmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=phmakeon

    //To make the timer work only if modulo is off
    var dtchecker=0
    var dtf=0

    //clicking yes on modulo
    function dtmakeoff(){
        document.getElementById('modulo_dt').style.display='none'
        dtchecker=1
        var dttmei=15
        if(dtchecker==1){
            dtf=window.setInterval(dttme,1000)
        }

        dtmover()

    }
    //next button
    function dtnext(){
     dtmover()
    }

        //function for displaying modulo
    function dtmakeon(){
    
     document.getElementById('modulo_dt').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var dttmei=15
    function dttme(){
     if(dttmei>0){
           dttmei--
        }
        else{
            dttmei=15
         dtmover()
        
        }
         document.getElementById('dtjust').textContent=dttmei
    }

    

    //Questions and answer  for the quiz
    var dtques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in ruby is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in ruby?',['variable1.','vas-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in ruby?',['4','2','3','1',1]]
    ]
    shuffleArray(dtques_list)

    //tips center
    var dttipper=[' Always give more preference to logic than coding','Always think before you code','Give more preference to logic than coding','Bugs are necessary to improve a coder','Make a paper design before implementing','More than learning practice makes more sense']



    //Options
    var dtopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var dtscr=0


    //creating question label
    var dtques=document.getElementById('dtquestion')
    //creating options object
    var dtopt=document.getElementsByClassName('dtopt')
    var dti=0
    //score variable for result.js
    var dtdis_score=document.getElementById('dtinnerscore')


    function dtbtnc(xxxxx){
        document.getElementsByClassName('dtopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==dtques_list[dti-1][1][4]){
         document.getElementsByClassName('dtopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         dtscr++
         dtdis_score.textContent='Score:'+dtscr
        }
        else{
            document.getElementsByClassName('dtopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('dtopt')[dtques_list[dti-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(dtmover,900)
    
    }


    function dtcaller(){
        for(var teta=0;teta<4;teta++){
            dtopt[teta].style.backgroundColor='#fff'

        dti=0
        dtscr=0

    }
    }


    function dtmover(){
        if(dti!=dtques_list.length){
            if(dttmei==0||dttmei==1){dttmei=15}
            else{dttmei=15}
            
            dtques.textContent='Q'+(dti+1)+dtques_list[dti][0]
            dtopt[0].textContent=dtques_list[dti][1][0]
            dtopt[1].textContent=dtques_list[dti][1][1]
            dtopt[2].textContent=dtques_list[dti][1][2]
            dtopt[3].textContent=dtques_list[dti][1][3]
            document.getElementById('dtfoot').innerHTML=dttipper[dti]
            for(var teta=0;teta<4;teta++){
                dtopt[teta].style.backgroundColor='#fff'
     }
     dti++
    }
        else{
          window.clearInterval(dtf)
         document.getElementById('dtmodulo2').style.display='inline-block'
        dtcaller()

        }
    
    }




//opening dtresult.js
    function dtres_open_result(){
        document.getElementById('dtmodulo2').style.display='none'
        document.getElementById('dtmodulo').style.display='none'
        document.getElementById('dtres_modulo').style.display='block'
        dtsoceri()
    }

//dtpresult.js

    function dtsoceri(){
    dttscr=document.getElementById('dtinnerscore').value

    document.getElementById('dtshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('dtshow_age').innerHTML=String(ager.value)


    if(((String((dtdis_score.innerHTML)).length)==7)){
    console.log(String(dtdis_score.innerHTML)[6])
    document.getElementById('dtshow_score').innerHTML=String(dtdis_score.innerHTML)[6] 
    dtjscr=parseInt(String(dtdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(dtdis_score.innerHTML)[6]+String(dtdis_score.innerHTML)[7])
        document.getElementById('dtshow_score').innerHTML=String(dtdis_score.innerHTML)[6]+String(dtdis_score.innerHTML)[7]
        dtjscr=parseInt(String(dtdis_score.innerHTML)[6]+String(dtdis_score.innerHTML)[7])
    }

    if(dtjscr>8){
        var dtgrade='A'
        var dtrst='Passed'
        var dtmsg='Excellent (but keep practicing)'
        var dtclo='rgb(30, 145, 30)'
    }
    else if(dtjscr>6){
        var dtgrade='B'
        var dtrst='Passed'
        var dtmsg='Good but need to work more and practice'
        var dtclo='rgb(30, 145, 30)'
    }
    else if(dtjscr>4){
        var dtgrade='C'
        var dtrst='Passed'
        var dtmsg='It was a nice try but need to improve'
        var dtclo='rgb(30, 145, 30)'
    }
    else if(dtjscr>1){
        var dtgrade='D'
        var dtrst='Passed'
        var dtmsg='Not a good performance'
        var dtclo='rgb(30, 145, 30)'
    }
    else{
        var dtgrade='E'
        var dtrst='Failed'
        var dtmsg='Poor performance but can improve '
        var dtclo='red'
    }

    document.getElementById('dtshow_grade').innerHTML=dtgrade
    document.getElementById('dtshow_result').innerHTML=dtrst
    document.getElementById('dtshow_msg').innerHTML=dtmsg
    document.getElementById('dtshow_result').style.color=dtclo


    }




// certificate generator


function cert_open(){
   // document.getElementById('res_modulo').style.display='none'
    document.getElementById('cert_id').style.display='block'
    
  }

function certbackbutton(){
    document.getElementById('cert_id').style.display='none'

}
  
  
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  
  console.log(fn.value)
  const nameInput = document.getElementById('fname')
  
  const downloadBtn = document.getElementById('download-btn')
  
  const image = new Image()
  image.src = 'certificate.jpeg'
  image.onload = function () {
      drawImage()
  }
  
  function drawImage() {
      // ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      ctx.font = '40px monotype corsiva'
      ctx.fillStyle = '#29e'
      ctx.fillText(nameInput.value +' '+ ln.value, 80, 180)
      

  }

  

  
 nameInput.addEventListener('input', function () {
      drawImage()
  })
  ln.addEventListener('input', function () {
    drawImage()
})

  
  downloadBtn.addEventListener('click', function () {
      downloadBtn.href = canvas.toDataURL('image/jpg')
      downloadBtn.download = 'Certificate - ' + nameInput.textContent
  })
  
  
  
  
  




