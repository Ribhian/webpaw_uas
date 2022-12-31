import React, { Fragment } from "react";


class StartPage extends React.Component{
    render(){
        return(
            <Fragment>
               <div id="page-left_start">
        <div id="name_start">
        <h2>القواعد القراءة</h2>
        </div>
            <div id="adab_start">
                 يعتبر التركيز أثناء القراءة من القواعد المهمة، فتشتت الانتباه هو عدو القارئ، ولهذا يُنصَح بالجلوس في مكان هادئ بعيداً عن الضوضاء، والألعاب، والإنترنت، وإذا كان هذا صعبا قليلاً، فمن الممكن سماع القليل بما يسمى بالضوضاء البيضاء أثناء القراءة لزيادة التركيز، والحرص على أن لا يكون مكان القراءة مريحاً جداً لدرجة الشعور بالنعاس يساعد تدوين الملاحظات أثناء القراءة على تذكّر المعلومات التي تمّت قراءتها، والتركيز خلال القراءة، حيث من الممكن تدوين الكلمات المبهمة غير الواضحة، بالإضافة إلى الأفكار الموجودة داخل الكتاب. هناك بعض الأشخاص الذين يقومون بالقراءة السريعة، من دون التركيز على الأمور المهمة، ولهذا ينصح بإعادة قراءة النص من أجل فهمه بطريقة صحيحة، ولضمان تفادي ضياع أيّ أفكار في الكتاب

                 إقرأ المزيد على موضوع.كوم
            </div>
        <div id="list_start">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Service</a></li>
            </ul>
        </div>
    </div>
    <div id="page-right_start">
        <div id="text-ahlan">
          <h2>مرحبا بك في</h2>
        </div>
        <div id="text-nama">
            <h1>القواعد القراءة</h1>
        </div>
        <div id="bingkai">
          
        </div>
        <div id="pilihan">
            <div id="login_start">
                <a href="/loginpage">Login</a>
            </div>
            <div id="daftar">
                <a href="/registerpage">Sign Up</a>
            </div>
        </div>
    </div>
    </Fragment>
        )
    }
}

export default StartPage;